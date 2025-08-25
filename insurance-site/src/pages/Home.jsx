import Reveal from '../components/Reveal.jsx'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-blue-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid gap-8 md:grid-cols-2 items-center">
          <Reveal>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Güvenilir Sigorta Çözümleri</h1>
              <p className="mt-4 text-white/90">Araç, konut, sağlık ve daha fazlası için size özel sigorta teklifleri. Müşteri memnuniyeti odaklı hizmet.</p>
              <div className="mt-6 flex gap-3">
                <a href="/appointment" className="inline-flex items-center justify-center rounded-md bg-white text-blue-700 px-4 py-2 font-medium hover:bg-blue-50">Randevu Al</a>
                <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-white/30 px-4 py-2 font-medium hover:bg-white/10">İletişim</a>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl ring-1 ring-white/20 backdrop-blur-sm overflow-hidden">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2070&auto=format&fit=crop" alt="Sigorta hizmetleri" />
              </div>
            </div>
          </Reveal>
        </div>
        <svg className="absolute -bottom-12 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity="0.1" d="M0 24l60 10.7c60 10.3 180 32.3 300 26.6 120-5.3 240-42.3 360-64C840 0 960 0 1080 10.7 1200 21.3 1320 42.7 1380 53.3l60 10.7V120H0V24z"/></svg>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold mb-8">Hizmetlerimiz</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { title: 'Trafik ve Kasko', desc: 'Araçlarınız için kapsamlı koruma.' },
            { title: 'Konut', desc: 'Evinizi ve eşyalarınızı güvence altına alın.' },
            { title: 'Sağlık', desc: 'Size ve ailenize sağlık güvencesi.' },
            { title: 'İş Yeri', desc: 'İşletmeniz için risk yönetimi ve güvence.' },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="rounded-xl border p-6 card-hover">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-8 md:grid-cols-2 items-center">
          <Reveal>
            <div>
              <h2 className="text-2xl font-semibold">Neden Bizi Tercih Etmelisiniz?</h2>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                <li>Hızlı teklif ve poliçe düzenleme</li>
                <li>Deneyimli ve uzman ekip</li>
                <li>Uygun fiyat ve geniş kapsam</li>
                <li>7/24 destek</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="rounded-xl border p-6 bg-white">
              <h3 className="font-semibold">Hızlı İletişim</h3>
              <p className="text-sm text-slate-600">Bize hemen ulaşın ve ihtiyacınıza uygun çözümleri birlikte belirleyelim.</p>
              <a href="/contact" className="mt-4 inline-flex rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">İletişim</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h3 className="text-center text-sm uppercase tracking-wide text-slate-500">Çalıştığımız Sigorta Şirketleri</h3>
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 items-center">
            {['Allianz', 'AXA', 'Anadolu', 'Mapfre', 'HDI', 'Sompo'].map((brand) => (
              <div key={brand} className="h-8 md:h-10 grayscale opacity-70 hover:opacity-100 transition flex items-center justify-center border rounded-md bg-slate-50 px-2">
                <span className="text-slate-500 text-xs md:text-sm">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold text-center">Müşteri Yorumları</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[1,2,3].map((i) => (
              <Reveal key={i}>
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <p className="text-slate-700">Hızlı ve ilgili hizmet aldım. Teklifler kısa sürede geldi, tavsiye ederim.</p>
                  <div className="mt-4 text-sm text-slate-500">Müşteri {i}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-xl font-semibold">Sigortanız için en uygun teklifi şimdi alın</h3>
          <a href="/appointment" className="inline-flex rounded-md bg-blue-600 text-white px-5 py-3 hover:bg-blue-700">Ücretsiz Teklif Al</a>
        </div>
      </section>
    </div>
  )
}

