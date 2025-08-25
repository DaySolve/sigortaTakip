"use client";
import { useState } from "react";
import Map from "@/components/Map";

type ContactPayload = { name: string; email: string; phone?: string; message: string };
type AppointmentPayload = { name: string; email: string; phone?: string; date: string; time: string };

export default function IletisimPage() {
  const [contactLoading, setContactLoading] = useState(false);
  const [appointmentLoading, setAppointmentLoading] = useState(false);
  const [contactMsg, setContactMsg] = useState<string | null>(null);
  const [apptMsg, setApptMsg] = useState<string | null>(null);

  async function submitContact(formData: FormData) {
    setContactLoading(true);
    setContactMsg(null);
    const payload: ContactPayload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim() || undefined,
      message: String(formData.get("message") || "").trim(),
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setContactLoading(false);
    setContactMsg(res.ok ? "Teşekkürler! Size en kısa sürede dönüş yapacağız." : data.error || "Hata oluştu");
  }

  async function submitAppointment(formData: FormData) {
    setAppointmentLoading(true);
    setApptMsg(null);
    const payload: AppointmentPayload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim() || undefined,
      date: String(formData.get("date") || "").trim(),
      time: String(formData.get("time") || "").trim(),
    };
    const res = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setAppointmentLoading(false);
    setApptMsg(res.ok ? "Randevu talebiniz alındı." : data.error || "Hata oluştu");
  }

  return (
    <div className="grid gap-10">
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h1 className="text-2xl font-semibold mb-4">İletişim</h1>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              await submitContact(new FormData(form));
              form.reset();
            }}
            className="grid gap-3"
          >
            <input name="name" placeholder="Ad" className="border rounded px-3 py-2" required />
            <input name="email" type="email" placeholder="E-posta" className="border rounded px-3 py-2" required />
            <input name="phone" placeholder="Telefon" className="border rounded px-3 py-2" />
            <textarea name="message" placeholder="Mesaj" className="border rounded px-3 py-2" rows={4} required />
            <button disabled={contactLoading} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">
              {contactLoading ? "Gönderiliyor..." : "Gönder"}
            </button>
            {contactMsg && <p className="text-sm text-gray-700">{contactMsg}</p>}
          </form>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Randevu Al</h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              await submitAppointment(new FormData(form));
              form.reset();
            }}
            className="grid gap-3"
          >
            <input name="name" placeholder="Ad" className="border rounded px-3 py-2" required />
            <input name="email" type="email" placeholder="E-posta" className="border rounded px-3 py-2" required />
            <input name="phone" placeholder="Telefon" className="border rounded px-3 py-2" />
            <input name="date" type="date" className="border rounded px-3 py-2" required />
            <input name="time" type="time" className="border rounded px-3 py-2" required />
            <button disabled={appointmentLoading} className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50">
              {appointmentLoading ? "Gönderiliyor..." : "Randevu Talep Et"}
            </button>
            {apptMsg && <p className="text-sm text-gray-700">{apptMsg}</p>}
          </form>
        </section>
      </div>

      <section className="grid gap-3">
        <h2 className="text-xl font-semibold">Konumumuz</h2>
        <Map lat={41.015137} lng={28.97953} />
        <p className="text-sm text-gray-600">İstanbul, Türkiye</p>
      </section>
    </div>
  );
}

