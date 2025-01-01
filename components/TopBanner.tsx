import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function TopBanner() {
  return (
    <div className="bg-gray-900 text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div>Open: Mon-Sun 10AM-11PM</div>
        <div>Contact: (123) 456-7890</div>
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={16} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={16} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

