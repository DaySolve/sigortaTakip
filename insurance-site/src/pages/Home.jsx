export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Neden
                <br />
                <span className="text-blue-200">Kenan Aslan</span>
                <br />
                Sigorta?
              </h1>
              <div className="w-16 h-1 bg-blue-300"></div>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Geniş Sigorta Portföyü</h3>
                  <p className="text-blue-100 text-sm">Tüm sigorta ihtiyaçlarınız tek çatı altında, kapsamlı ürün seçenekleriyle çözüm sunuyoruz.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Çözüm Ortakları</h3>
                  <p className="text-blue-100 text-sm">Sektörün lider sigorta şirketleriyle iş birliği yaparak en iyi fiyat ve hizmet garantisini sağlıyoruz.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/appointment" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Randevu Al
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                İletişim
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-white/10 rounded-2xl ring-1 ring-white/20 backdrop-blur-sm p-8 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Insurance consultation" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-300 rounded-full opacity-30"></div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Araç, konut, sağlık ve daha fazlası için size özel sigorta teklifleri. 
              Müşteri memnuniyeti odaklı hizmet anlayışımızla yanınızdayız.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                title: 'Trafik ve Kasko', 
                desc: 'Araçlarınız için kapsamlı koruma ve güvence.',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                )
              },
              { 
                title: 'Konut Sigortası', 
                desc: 'Evinizi ve eşyalarınızı güvence altına alın.',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                )
              },
              { 
                title: 'Sağlık Sigortası', 
                desc: 'Size ve ailenize sağlık güvencesi sağlıyoruz.',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
                  </svg>
                )
              },
              { 
                title: 'İş Yeri Sigortası', 
                desc: 'İşletmeniz için risk yönetimi ve güvence.',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                )
              },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-6">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Neden Bizi Tercih Etmelisiniz?
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                <p className="text-lg text-gray-600">
                  Yılların deneyimi ve güvenilir hizmet anlayışımızla sizin için en iyi sigorta çözümlerini sunuyoruz.
                </p>
              </div>
              
              <div className="grid gap-6">
                {[
                  { title: 'Hızlı Teklif ve Poliçe Düzenleme', desc: 'Anında teklif alın, hızlı poliçe düzenleme işlemleri.' },
                  { title: 'Deneyimli ve Uzman Ekip', desc: 'Alanında uzman ekibimizle profesyonel danışmanlık hizmeti.' },
                  { title: 'Uygun Fiyat ve Geniş Kapsam', desc: 'En uygun fiyatlarla geniş kapsamlı sigorta seçenekleri.' },
                  { title: '7/24 Destek Hizmeti', desc: 'İhtiyacınız olan her an yanınızda olan destek hizmeti.' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Hızlı İletişim</h3>
                <p className="text-blue-100 mb-6">
                  Bize hemen ulaşın ve ihtiyacınıza uygun çözümleri birlikte belirleyelim. 
                  Uzman ekibimiz size en uygun sigorta seçeneklerini sunar.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span>+90 (532) 123 45 67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span>info@kenanaslansigortam.net</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="/contact" className="flex-1 bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold text-center hover:bg-blue-50 transition-colors">
                    İletişim
                  </a>
                  <a href="/appointment" className="flex-1 border-2 border-white text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-white/10 transition-colors">
                    Randevu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

