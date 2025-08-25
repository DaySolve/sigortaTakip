import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabaseClient";
import nodemailer from "nodemailer";

type AppointmentPayload = {
  name: string;
  email: string;
  phone?: string;
  date: string; // ISO
  time: string; // HH:mm
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<AppointmentPayload>;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() || null;
    const date = body.date?.trim();
    const time = body.time?.trim();

    if (!name || !email || !date || !time) {
      return NextResponse.json({ error: "Eksik alanlar" }, { status: 400 });
    }

    const supabase = createSupabaseServerClient();
    const { error } = await supabase.from("appointments").insert({
      name,
      email,
      phone,
      date,
      time,
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
        subject: "Yeni Randevu Talebi",
        text: `Ad: ${name}\nE-posta: ${email}\nTelefon: ${phone ?? "-"}\nTarih: ${date}\nSaat: ${time}`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}

