import { useState } from 'react'

import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 lg:grid-cols-2">
      <Reveal>
        <h1 className="text-2xl font-semibold">İletişim</h1>
        <p className="mt-2 text-slate-600">Sorularınız ve teklif talepleriniz için bize yazabilirsiniz.</p>
      </Reveal>

      <div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Ad Soyad</label>
            <input name="name" value={formState.name} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" placeholder="Adınız Soyadınız" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">E-posta</label>
              <input type="email" name="email" value={formState.email} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" placeholder="ornek@mail.com" />
            </div>
            <div>
              <label className="block text-sm font-medium">Telefon</label>
              <input name="phone" value={formState.phone} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" placeholder="05xx xxx xx xx" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Mesajınız</label>
            <textarea name="message" value={formState.message} onChange={handleChange} rows={5} className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" placeholder="Nasıl yardımcı olabiliriz?" />
          </div>
          <button type="submit" className="inline-flex rounded-md bg-blue-600 text-white px-5 py-2.5 hover:bg-blue-700 transition-transform active:scale-[0.98]">Gönder</button>

          {submitted && (
            <p className="text-green-600 text-sm">Teşekkürler! Mesajınızı aldık.</p>
          )}
        </form>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Konum</h2>
        <div className="aspect-video rounded-xl overflow-hidden border">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12033.26565074478!2d28.97953025!3d41.0151375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9f4e3e2a3c7%3A0x7b6d4fe5f1d4af4!2sIstanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="text-sm text-slate-600">
          <p>Adres: İstanbul, Türkiye</p>
          <p>Telefon: +90 (000) 000 00 00</p>
        </div>
      </div>
    </div>
  )
}

