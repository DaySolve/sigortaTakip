import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sigorta A.Ş.",
  description: "Güvenilir sigorta çözümleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-10">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg">Sigorta A.Ş.</Link>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-blue-600">Anasayfa</Link>
              <Link href="/hakkimizda" className="hover:text-blue-600">Hakkımızda</Link>
              <Link href="/urunler" className="hover:text-blue-600">Ürünler</Link>
              <Link href="/iletisim" className="hover:text-blue-600">İletişim</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
        <footer className="mt-12 border-t py-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} Sigorta A.Ş.</footer>
      </body>
    </html>
  );
}
