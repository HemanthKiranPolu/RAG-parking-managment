import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/accessibility">Accessibility</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li><Link href="/rules">Parking Rules</Link></li>
              <li><Link href="/events">Special Event Parking</Link></li>
              <li><Link href="/ev-charging">EV Charging</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Connect</h3>
            <p>California State University, San Bernardino</p>
            <p>5500 University Parkway</p>
            <p>San Bernardino, CA 92407</p>
            <p>Phone: (909) 537-5000</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 CSUSB Parking Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

