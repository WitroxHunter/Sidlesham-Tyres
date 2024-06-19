import "dotenv/config";
import express, { json } from "express";
import { createTransport } from "nodemailer";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

app.post("/send", (req, res) => {
  const { name, email, phoneNumber, vehicleType, serviceNeeded } = req.body;

  // Nadawca (konfiguracja w .env)
  const transporter = createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "lolxdyoloelo@gmail.com", // Odbiorca
    subject: `Contact Form Message from ${name}`,
    text: `You have received a new message from the contact form.

    Name: ${name}
    Email: ${email}
    Phone Number: ${phoneNumber}
    Vehicle Type: ${vehicleType}
    Service Needed: ${serviceNeeded}
    
    Best regards,
    Your Website Team`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: "Email sent successfully!" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
