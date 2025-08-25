import Reveal from '../components/Reveal.jsx'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden text-white bg-gradient-animated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid gap-8 md:grid-cols-2 items-center">
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
              <div className="aspect-[4/3] bg-white/10 rounded-xl ring-1 ring-white/20 backdrop-blur-sm flex items-center justify-center animated-gradient">
                <span className="text-white/80">Sigorta görseli</span>
              </div>
            </div>
          </Reveal>
        </div>
        <svg className="absolute -bottom-12 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity="0.1" d="M0 24l60 10.7c60 10.3 180 32.3 300 26.6 120-5.3 240-42.3 360-64C840 0 960 0 1080 10.7 1200 21.3 1320 42.7 1380 53.3l60 10.7V120H0V24z"/></svg>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold mb-8">Hizmetlerimiz</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
    </div>
  )
}

