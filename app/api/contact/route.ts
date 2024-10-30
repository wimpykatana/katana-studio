/* eslint-disable no-unused-vars */
import { transporter, mailOptions } from "@/config/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `${data.subject} - katana studio`,
      text: "Email from katana studio website",
      html: `<h1>${data.subject}</h1><p>name: ${data.name}</p><p>email: ${data.email}</p><p>phone: ${data.phone}</p></hr><p>message:</p><p>${data.message}</p>`,
    });
    //return new Response(JSON.stringify({ message: "Email sent" }), {
    //  headers: { "Content-Type": "application/json" },
    //});
    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    //return new Response(JSON.stringify({ message: error.message }), {
    //  headers: { "Content-Type": "application/json" },
    //});
    return NextResponse.json(
      { message: "Failed to process form" },
      { status: 500 },
    );
  }
}
