import Link from 'next/link'

export function Header() {
  return (
    <header className="w-full py-4 bg-black">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Geremiaco
        </Link>
        <nav className="hidden md:flex space-x-6">
          {/* Navigation items will be added here in the future */}
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button will be added here in the future */}
        </div>
      </div>
    </header>
  )
}
