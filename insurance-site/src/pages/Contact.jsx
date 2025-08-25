import { useState } from 'react'

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
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
            <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Sorularınız ve teklif talepleriniz için bize yazabilirsiniz. 
              Uzman ekibimiz size en kısa sürede dönüş yapacaktır.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                      <p className="text-gray-600">+90 (532) 123 45 67</p>
                      <p className="text-sm text-gray-500">Pazartesi - Cuma: 09:00 - 18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
                      <p className="text-gray-600">info@kenanaslansigortam.net</p>
                      <p className="text-sm text-gray-500">24 saat içinde yanıt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                      <p className="text-gray-600">
                        Sektörün lider sigorta şirketleriyle iş birliği yaparak 
                        en iyi fiyat ve hizmet garantisini sağlıyoruz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact Card */}
              <div className="bg-blue-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Hızlı Randevu</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Hemen randevu alın ve uzman ekibimizle buluşun.
                </p>
                <a href="/appointment" className="inline-flex items-center justify-center w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Randevu Al
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Bize Ulaşın</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Ad Soyad *</label>
                    <input 
                      name="name" 
                      value={formState.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors" 
                      placeholder="Adınız Soyadınız" 
                    />
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">E-posta *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formState.email} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors" 
                        placeholder="ornek@mail.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon</label>
                      <input 
                        name="phone" 
                        value={formState.phone} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors" 
                        placeholder="05xx xxx xx xx" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mesajınız *</label>
                    <textarea 
                      name="message" 
                      value={formState.message} 
                      onChange={handleChange} 
                      required
                      rows={6} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none" 
                      placeholder="Nasıl yardımcı olabiliriz? Sigorta ihtiyaçlarınızı detaylandırın..." 
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                    Mesaj Gönder
                  </button>
                  
                  {submitted && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <p className="text-green-800 font-medium">Teşekkürler! Mesajınızı aldık.</p>
                      </div>
                      <p className="text-green-600 text-sm mt-1">En kısa sürede size dönüş yapacağız.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
          
          {/* Google Maps Section */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Konumumuz</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  title="Kenan Aslan Sigorta Konumu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

