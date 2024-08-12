
import nodemailer from 'nodemailer';

export  async function POST(req,res){
    const { email, subject, content } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Your email address
        subject: subject,
        text: content,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Email failed to send' });
    }

} 