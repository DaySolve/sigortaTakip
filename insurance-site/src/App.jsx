import { Outlet, NavLink } from 'react-router-dom'
import WhatsAppButton from './components/WhatsAppButton.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="hidden md:block bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+900000000000" className="hover:underline flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M1.5 4.5A3 3 0 0 1 4.5 1.5h1.372a1.5 1.5 0 0 1 1.415 1.041l.79 2.37a1.5 1.5 0 0 1-.46 1.62l-1.11 1.11a16.5 16.5 0 0 0 7.093 7.093l1.11-1.11a1.5 1.5 0 0 1 1.62-.46l2.37.79A1.5 1.5 0 0 1 22.5 18.128V19.5a3 3 0 0 1-3 3h-.75C9.335 22.5 1.5 14.665 1.5 4.5V3.75Z"/></svg>
              +90 (000) 000 00 00
            </a>
            <a href="mailto:info@sigortam.com" className="hover:underline flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5A2.25 2.25 0 0 1 22.5 6.75v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Zm2.036-.75 8.203 6.402a.75.75 0 0 0 .922 0L20.864 6H3.536Z"/></svg>
              info@sigortam.com
            </a>
          </div>
          <div className="flex items-center gap-3 opacity-90">
            <a href="#" aria-label="Instagram" className="hover:opacity-100 opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10c1.667 0 3 1.333 3 3v10c0 1.667-1.333 3-3 3H7c-1.667 0-3-1.333-3-3V7c0-1.667 1.333-3 3-3zm11 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-100 opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82v-9.294H9.692V11.08h3.128V8.41c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.793.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.59l-.467 3.626h-3.123V24h6.127C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
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

      <WhatsAppButton />

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
