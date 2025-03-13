import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Car, CreditCard, FileText, Bus, Shield } from 'lucide-react'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  return (
    <header className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/communityIcon_k0pmqjapfzic1-epVeZfyE9t6kngxclNrFZEcK5HPKGF.png"
              alt="CSUSB Wolf Logo"
              width={48}
              height={48}
              className="mr-2"
            />
            CSUSB Parking
          </Link>
          <nav className="hidden md:flex space-x-4">
            <NavLink href="/availability" icon={<Car className="w-4 h-4" />}>Availability</NavLink>
            <NavLink href="/permits" icon={<CreditCard className="w-4 h-4" />}>Permits</NavLink>
            <NavLink href="/citations" icon={<FileText className="w-4 h-4" />}>Citations</NavLink>
            <NavLink href="/transportation" icon={<Bus className="w-4 h-4" />}>Transportation</NavLink>
            <NavLink href="/police" icon={<Shield className="w-4 h-4" />}>University Police</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button variant="secondary">Login</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children, icon }) {
  return (
    <Link href={href} className="flex items-center hover:text-blue-200 transition-colors">
      {icon}
      <span className="ml-1">{children}</span>
    </Link>
  )
}

