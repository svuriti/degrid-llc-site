import nodemailer from 'nodemailer';

let transporter;

const getTransporter = () => {
  if (transporter) return transporter;

  const user = process.env.ZOHO_SMTP_USER;
  const pass = process.env.ZOHO_SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  transporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com',
    port: Number(process.env.ZOHO_SMTP_PORT || 465),
    secure: process.env.ZOHO_SMTP_SECURE
      ? process.env.ZOHO_SMTP_SECURE === 'true'
      : true,
    auth: { user, pass },
  });

  return transporter;
};

const parseBody = async (req) => {
  if (req.body) {
    if (typeof req.body === 'string') {
      try {
        return JSON.parse(req.body);
      } catch (error) {
        throw new Error('Invalid JSON body');
      }
    }
    return req.body;
  }

  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    const data = Buffer.concat(buffers).toString();
    return data ? JSON.parse(data) : {};
  } catch (error) {
    throw new Error('Invalid JSON body');
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  let body;

  try {
    body = await parseBody(req);
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  const name = (body?.name || '').trim();
  const email = (body?.email || '').trim();
  const message = (body?.message || '').trim();

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Name, email, and message are required.' });
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    res.status(400).json({ error: 'Provide a valid email address.' });
    return;
  }

  const mailer = getTransporter();

  if (!mailer) {
    res.status(500).json({ error: 'Mail transport is not configured.' });
    return;
  }

  const recipient = process.env.CONTACT_RECIPIENT || process.env.ZOHO_SMTP_USER;
  const fromAddress = process.env.CONTACT_FROM || process.env.ZOHO_SMTP_USER;

  const mailOptions = {
    from: fromAddress,
    to: recipient,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n'),
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  };

  try {
    await mailer.sendMail(mailOptions);
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Mail send failed', error);
    res.status(502).json({ error: 'Failed to send inquiry. Please try again later.' });
  }
}
