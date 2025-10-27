import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-blue-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                +90 (532) 123 45 67
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                info@kenanaslansigortam.net
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span>Her An Yanınızda</span>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900 leading-none">KENAN ASLAN SIGORTA</span>
                <span className="text-xs text-blue-600 font-medium">Her An Yanınızda</span>
              </div>
            </a>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">ANASAYFA</a>
              <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">ÜRÜNLERİMİZ</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">BİZ KİMİZ</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">HAKKIMIZDA</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">İLETİŞİM</a>
            </nav>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" 
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6.75c0-.414.336-.75.75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 6a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-white py-4">
              <nav className="flex flex-col space-y-3">
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1">ANASAYFA</a>
                <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1">ÜRÜNLERİMİZ</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1">BİZ KİMİZ</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1">HAKKIMIZDA</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1">İLETİŞİM</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">KENAN ASLAN SIGORTA</span>
                <span className="text-xs text-blue-400 font-medium">Her An Yanınızda</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Tüm sigorta ihtiyaçlarınız tek çatı altında, kapsamlı ürün seçenekleriyle 
              çözüm sunuyoruz.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+90 (532) 123 45 67</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-blue-400">Hızlı Menü</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Anasayfa</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Ürünlerimiz</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">İletişim</a></li>
              <li><a href="/appointment" className="text-gray-300 hover:text-white transition-colors">Randevu</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-blue-400">İletişim Bilgileri</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-gray-300">
                  Sektörün lider sigorta şirketleriyle iş birliği yaparak en iyi fiyat ve hizmet 
                  garantisini sağlıyoruz.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-gray-300">info@kenanaslansigortam.net</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Kenan Aslan Sigorta. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
