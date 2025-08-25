import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabaseClient";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() || null;
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Eksik alanlar" }, { status: 400 });
    }

    const supabase = createSupabaseServerClient();
    const { error } = await supabase.from("contacts").insert({
      name,
      email,
      phone,
      message,
    });
    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Kayıt hatası" }, { status: 500 });
    }

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Number(process.env.SMTP_PORT || 587) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      const from = process.env.EMAIL_FROM || "no-reply@example.com";
      const to = process.env.EMAIL_TO || process.env.SMTP_USER!;
      await transporter.sendMail({
        from,
        to,
        subject: "Yeni İletişim Formu",
        text: `Ad: ${name}\nE-posta: ${email}\nTelefon: ${phone ?? "-"}\nMesaj: ${message}`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}

