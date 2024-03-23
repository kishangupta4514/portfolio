// pages/api/sendEmail.js

import emailjs from "emailjs-com";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("aaa", req.method);
  // if (req.method === "POST") {
  const { name, email, message } = req.body;
  // Send the email using EmailJS
  console.log(      process.env.EMAILJS_SERVICE_ID,
    process.env.EMAILJS_TEMPLATE_ID)
  emailjs
    .send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        name,
        email,
        message,
      },
      process.env.EMAILJS_PUBLIC_KEY // Replace with your EmailJS user ID
    )
    .then(
      (response) => {
        console.log("Email sent:", response);
        NextResponse.json({ success: true });
      },
      (error) => {
        console.error("Email sending failed:", error);
        NextResponse.json({ error: "Failed to send email" }, { status: 500 });
      }
    );
  // } else {
  //   // res.status(405).end(); // Method Not Allowed
  //   NextResponse.json({}, {status: 405});
  // }
}
