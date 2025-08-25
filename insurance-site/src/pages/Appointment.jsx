import { useState } from 'react'

import Reveal from '../components/Reveal.jsx'

export default function Appointment() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Trafik ve Kasko',
    date: '',
    time: '',
    notes: '',
  })
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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Reveal>
        <h1 className="text-2xl font-semibold">Randevu Al</h1>
        <p className="mt-2 text-slate-600">Uygun olduğunuz zamanı seçin, sizi arayalım.</p>
      </Reveal>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Ad Soyad</label>
            <input name="name" value={formState.name} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" />
          </div>
          <div>
            <label className="block text-sm font-medium">Telefon</label>
            <input name="phone" value={formState.phone} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">E-posta</label>
            <input type="email" name="email" value={formState.email} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" />
          </div>
          <div>
            <label className="block text-sm font-medium">Hizmet</label>
            <select name="service" value={formState.service} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.15)]">
              {['Trafik ve Kasko', 'Konut', 'Sağlık', 'İş Yeri'].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Tarih</label>
            <input type="date" name="date" value={formState.date} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" />
          </div>
          <div>
            <label className="block text-sm font-medium">Saat</label>
            <input type="time" name="time" value={formState.time} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Notlar</label>
          <textarea name="notes" value={formState.notes} onChange={handleChange} rows={4} className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" placeholder="Örn: Tercih ettiğiniz sigorta şirketleri" />
        </div>
        <button type="submit" className="inline-flex rounded-md bg-blue-600 text-white px-5 py-2.5 hover:bg-blue-700 transition-transform active:scale-[0.98]">Randevu Oluştur</button>

        {submitted && (
          <p className="text-green-600 text-sm">Teşekkürler! Randevu talebinizi aldık.</p>
        )}
      </form>
    </div>
  )
}

