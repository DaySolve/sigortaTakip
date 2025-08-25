export default function Home() {
  return (
    <div className="grid gap-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-[url('/hero-insurance.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative grid gap-6 text-center md:text-left md:grid-cols-2 items-center px-6 py-16 md:px-12 bg-gradient-to-r from-blue-50/80 to-white/60">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Güvenceniz Bizimle
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Konut, araç, sağlık ve işletme sigortalarında hızlı teklif, geniş kapsam ve uygun fiyat.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="/iletisim" className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Hemen Teklif Al</a>
              <a href="/urunler" className="px-6 py-3 rounded-lg border hover:bg-gray-50">Ürünlerimizi İnceleyin</a>
            </div>
          </div>
          <div className="hidden md:block justify-self-end">
            <div className="rounded-xl border bg-white p-6 shadow-sm w-full max-w-md">
              <h3 className="font-semibold text-lg">Neden Sigorta A.Ş.?</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Hızlı teklif ve poliçe süreçleri</li>
                <li>• 7/24 destek ve danışmanlık</li>
                <li>• Geniş anlaşmalı kurum ağı</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Sigorta Çözümlerimiz</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Konut Sigortası", desc: "Evinizi yangın, hırsızlık ve doğal afetlere karşı korur." },
            { title: "Araç Sigortası", desc: "Kasko ve trafik sigortası ile güvenli sürüşler." },
            { title: "Sağlık Sigortası", desc: "Bireysel ve aile sağlık planları ile geniş kapsam." },
            { title: "İş Yeri Sigortası", desc: "İşletmenizi risklere karşı güvence altına alın." },
            { title: "DASK", desc: "Zorunlu deprem sigortası ile depreme karşı güvence." },
            { title: "Seyahat Sigortası", desc: "Yurt içi ve yurt dışı seyahatlerinizde içiniz rahat olsun." },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border p-6 bg-white hover:shadow-sm transition">
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-6">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Hakkımızda</h2>
          <p className="mt-3 text-gray-700 leading-7">
            Sigorta A.Ş. olarak müşteri odaklı yaklaşımımızla ihtiyaçlarınıza özel poliçeler sunuyoruz. 
            Uzman ekibimizle süreçlerinizi şeffaf ve hızlı şekilde yönetir, en uygun fiyatlarla en geniş kapsama ulaşmanızı sağlarız.
          </p>
          <div className="mt-4 flex gap-3 text-sm text-gray-700">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700">7/24 Destek</span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">Hızlı Teklif</span>
            <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700">Geniş Kapsam</span>
          </div>
        </div>
        <div className="rounded-xl border p-6 bg-white">
          <h3 className="font-semibold">Hızlı İletişim</h3>
          <p className="text-gray-600 text-sm mt-1">Sorularınız için bize hemen ulaşın.</p>
          <div className="mt-4 grid gap-2 text-sm">
            <a href="tel:+900000000000" className="inline-flex items-center gap-2 text-blue-700 hover:underline">Telefon: +90 000 000 00 00</a>
            <a href="mailto:info@ornek.com" className="inline-flex items-center gap-2 hover:underline">E-posta: info@ornek.com</a>
            <a href="/iletisim" className="inline-flex items-center gap-2 hover:underline">İletişim Formu</a>
            <a href="/iletisim#randevu" className="inline-flex items-center gap-2 hover:underline">Randevu Talebi</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-blue-600 text-white p-8 md:p-12 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Ücretsiz Teklif Alın</h2>
          <p className="mt-2 text-blue-50">İhtiyaçlarınıza en uygun poliçe için hemen iletişime geçin.</p>
        </div>
        <div className="justify-self-end">
          <a href="/iletisim" className="px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50">İletişime Geç</a>
        </div>
      </section>
    </div>
  );
}
