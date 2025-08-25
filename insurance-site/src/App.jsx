import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
            <span className="font-semibold text-lg">Kenan Aslan Sigortam</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="hover:text-blue-600">Ana Sayfa</a>
            <a href="/appointment" className="hover:text-blue-600">Randevu</a>
            <a href="/contact" className="hover:text-blue-600">İletişim</a>
          </nav>
          <button className="md:hidden p-2 rounded hover:bg-slate-100" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6.75c0-.414.336-.75.75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 6a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" /></svg>
          </button>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-2">Kenan Aslan Sigortam</h3>
            <p className="text-sm text-slate-600">Güvenilir sigorta çözümleri ve müşteri odaklı hizmet.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">İletişim</h3>
            <p className="text-sm text-slate-600">Telefon: +90 (000) 000 00 00</p>
            <p className="text-sm text-slate-600">Email: info@sigortam.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-sm text-slate-600">İstanbul, Türkiye</p>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 py-4">© {new Date().getFullYear()} Kenan Aslan Sigortam</div>
      </footer>
    </div>
  )
}

export default App
