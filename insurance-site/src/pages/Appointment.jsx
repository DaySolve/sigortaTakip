import { useState } from 'react'

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
    setTimeout(() => setSubmitted(false), 5000)
  }

  // Get tomorrow's date as minimum date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  const services = [
    { value: 'Trafik ve Kasko', label: 'Trafik ve Kasko Sigortası', icon: '🚗' },
    { value: 'Konut', label: 'Konut Sigortası', icon: '🏠' },
    { value: 'Sağlık', label: 'Sağlık Sigortası', icon: '🏥' },
    { value: 'İş Yeri', label: 'İş Yeri Sigortası', icon: '🏢' },
    { value: 'Hayat', label: 'Hayat Sigortası', icon: '👨‍👩‍👧‍👦' },
    { value: 'Seyahat', label: 'Seyahat Sigortası', icon: '✈️' },
  ]

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Randevu Al</h1>
            <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Uygun olduğunuz zamanı seçin, uzman ekibimiz sizi arayarak 
              ihtiyaçlarınıza en uygun sigorta çözümlerini sunsun.
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Form */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            
            {/* Info Section */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Randevu Avantajları</h2>
                
                <div className="space-y-4">
                  {[
                    { title: 'Ücretsiz Danışmanlık', desc: 'Uzman ekibimizden ücretsiz sigorta danışmanlığı alın.' },
                    { title: 'Karşılaştırmalı Teklif', desc: 'Farklı sigorta şirketlerinden karşılaştırmalı teklifler.' },
                    { title: 'Hızlı İşlem', desc: 'Poliçe düzenleme işlemlerinizi hızlı bir şekilde tamamlayın.' },
                    { title: 'Kişisel Hizmet', desc: 'Size özel çözümler ve kişiselleştirilmiş hizmet.' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">
                        ✓
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact Card */}
              <div className="bg-blue-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Acil Durum?</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Hemen konuşmak istiyorsanız direkt olarak arayabilirsiniz.
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="font-semibold">+90 (532) 123 45 67</span>
                </div>
                <p className="text-blue-100 text-xs">
                  Pazartesi - Cuma: 09:00 - 18:00
                </p>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Randevu Formu</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid gap-6 md:grid-cols-2">
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
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon *</label>
                      <input 
                        name="phone" 
                        value={formState.phone} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors" 
                        placeholder="05xx xxx xx xx"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">E-posta</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formState.email} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors" 
                      placeholder="ornek@mail.com"
                    />
                  </div>
                  
                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Hangi sigorta konusunda görüşmek istiyorsunuz? *</label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {services.map((service) => (
                        <label key={service.value} className="cursor-pointer">
                          <input
                            type="radio"
                            name="service"
                            value={service.value}
                            checked={formState.service === service.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`p-4 rounded-lg border-2 transition-colors ${
                            formState.service === service.value 
                              ? 'border-blue-600 bg-blue-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}>
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{service.icon}</span>
                              <span className="font-medium text-gray-900">{service.label}</span>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Date and Time */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Tarih *</label>
                      <input 
                        type="date" 
                        name="date" 
                        value={formState.date} 
                        onChange={handleChange} 
                        min={minDate}
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Saat *</label>
                      <select 
                        name="time" 
                        value={formState.time} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      >
                        <option value="">Saat seçin</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Ek Notlar</label>
                    <textarea 
                      name="notes" 
                      value={formState.notes} 
                      onChange={handleChange} 
                      rows={4} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none" 
                      placeholder="Var ise mevcut poliçeleriniz, tercih ettiğiniz sigorta şirketleri veya özel isteklerinizi belirtebilirsiniz..."
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Randevu Oluştur
                  </button>
                  
                  {/* Success Message */}
                  {submitted && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <p className="text-green-800 font-medium">Teşekkürler! Randevu talebinizi aldık.</p>
                      </div>
                      <p className="text-green-600 text-sm mt-1">
                        En kısa sürede sizi arayarak randevunuzu onaylayacağız.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

