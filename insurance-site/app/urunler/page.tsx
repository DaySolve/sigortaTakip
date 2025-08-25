export default function UrunlerPage() {
  const products = [
    { name: "Konut Sigortası", desc: "Evinizi ve eşyalarınızı güvence altına alın." },
    { name: "Araç Sigortası", desc: "Kasko ve zorunlu trafik sigortası." },
    { name: "Sağlık Sigortası", desc: "Bireysel ve aile sağlık planları." },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.name} className="border rounded-lg p-6 bg-white">
          <h2 className="font-semibold">{p.name}</h2>
          <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}

