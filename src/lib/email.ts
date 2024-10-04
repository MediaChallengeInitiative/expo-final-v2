import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  // Configure your email service here
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendConfirmationEmail(email: string, name: string, programType: string) {
  const mailOptions = {
    from: '"Africa Media & Creatives Expo" <noreply@example.com>',
    to: email,
    subject: `Welcome to the ${programType} Program!`,
    html: `
      <h1>Welcome, ${name}!</h1>
      <p>Thank you for signing up for our ${programType} program.</p>
      <p>We'll be in touch with more details soon.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}