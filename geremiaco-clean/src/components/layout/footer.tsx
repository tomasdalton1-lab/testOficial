export function Footer() {
  return (
    <footer className="w-full py-6 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Geremiaco. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {/* Social links will be added here in the future */}
          </div>
        </div>
      </div>
    </footer>
  )
}
