export default function Home() {
  return (
    <div className="grid gap-12">
      <section className="grid gap-4 text-center py-16 bg-gradient-to-b from-blue-50 to-white rounded-xl">
        <h1 className="text-3xl md:text-5xl font-bold">Güvenceniz Bizimle</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Konut, araç, sağlık ve daha fazlası için kapsamlı ve uygun sigorta çözümleri.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="/urunler" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Ürünler</a>
          <a href="/iletisim" className="px-5 py-2.5 border rounded-lg hover:bg-gray-50">İletişim</a>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Konut Sigortası", desc: "Evinizi yangın, hırsızlık ve doğal afetlere karşı koruyun." },
          { title: "Araç Sigortası", desc: "Kasko ve trafik sigortası ile rahat sürüşler." },
          { title: "Sağlık Sigortası", desc: "Sizin ve ailenizin sağlığı için geniş kapsam." },
        ].map((c) => (
          <div key={c.title} className="rounded-lg border p-6 bg-white">
            <h3 className="font-semibold mb-2">{c.title}</h3>
            <p className="text-gray-600 text-sm">{c.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
