import { Outlet, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <img src="/vite.svg" alt="Logo" className="h-8 w-8 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-lg">Kenan Aslan Sigortam</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={({ isActive }) => `link-underline hover:text-blue-600 ${isActive ? 'text-blue-700 font-semibold' : ''}`}>Ana Sayfa</NavLink>
            <NavLink to="/appointment" className={({ isActive }) => `link-underline hover:text-blue-600 ${isActive ? 'text-blue-700 font-semibold' : ''}`}>Randevu</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `link-underline hover:text-blue-600 ${isActive ? 'text-blue-700 font-semibold' : ''}`}>İletişim</NavLink>
          </nav>
          <button className="md:hidden p-2 rounded hover:bg-slate-100" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6.75c0-.414.336-.75.75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 6a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" /></svg>
          </button>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <nav className="rounded-xl border p-4 bg-white">
                <h3 className="text-sm font-semibold text-slate-600 mb-3">Sayfalar</h3>
                <ul className="space-y-2">
                  <li>
                    <NavLink to="/" end className={({ isActive }) => `block rounded-md px-3 py-2 transition-colors ${isActive ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-slate-50'}`}>Ana Sayfa</NavLink>
                  </li>
                  <li>
                    <NavLink to="/appointment" className={({ isActive }) => `block rounded-md px-3 py-2 transition-colors ${isActive ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-slate-50'}`}>Randevu</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={({ isActive }) => `block rounded-md px-3 py-2 transition-colors ${isActive ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-slate-50'}`}>İletişim</NavLink>
                  </li>
                </ul>
              </nav>
              <div className="rounded-xl border p-5 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <h4 className="font-semibold">Hızlı Teklif</h4>
                <p className="text-sm text-white/90 mt-1">2 dakikada ücretsiz teklif alın.</p>
                <a href="/appointment" className="mt-4 inline-flex rounded-md bg-white text-blue-700 px-4 py-2 font-medium hover:bg-blue-50">Randevu Al</a>
              </div>
            </div>
          </aside>
          <section>
            <Outlet />
          </section>
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-2">Kenan Aslan Sigortam</h3>
            <p className="text-sm text-slate-600">Güvenilir sigorta çözümleri ve müşteri odaklı hizmet.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Hızlı Bağlantılar</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li><a className="hover:text-blue-600" href="/">Ana Sayfa</a></li>
              <li><a className="hover:text-blue-600" href="/appointment">Randevu</a></li>
              <li><a className="hover:text-blue-600" href="/contact">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">İletişim</h3>
            <p className="text-sm text-slate-600">Telefon: +90 (000) 000 00 00</p>
            <p className="text-sm text-slate-600">Email: info@sigortam.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Bülten</h3>
            <form className="mt-2 flex gap-2">
              <input type="email" placeholder="E-posta adresiniz" className="flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <button className="rounded-md bg-blue-600 text-white px-3 py-2 hover:bg-blue-700">Abone Ol</button>
            </form>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 py-4">© {new Date().getFullYear()} Kenan Aslan Sigortam</div>
      </footer>
    </div>
  )
}

export default App
