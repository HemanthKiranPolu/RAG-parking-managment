import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { MapPin, Car, CreditCard, FileText, Megaphone, Eye, Target, Info } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CSUSB-NewsSlide-WildSong_Library_0.jpg-rEEjXCPmYNmYIo4be6iBEQVxAmkh1i.webp"
          alt="CSUSB Library and Wild Song Statue"
          width={1920}
          height={500}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to CSUSB Parking Management</h1>
            <p className="text-xl mb-8">Simplifying your campus parking experience</p>
            <div className="flex justify-center space-x-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/availability">Check Availability</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/permits">Purchase Permit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Real-Time Parking Availability</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Lot C', spaces: 1047, total: 1200 },
            { name: 'Lot D', spaces: 808, total: 1000 },
            { name: 'Lot F', spaces: 367, total: 500 },
            { name: 'Lot G and H', spaces: 804, total: 1000 },
            { name: 'Lot N', spaces: 1057, total: 1200 },
            { name: 'Parking Garage West', spaces: 690, total: 800 },
            { name: 'Parking Garage East', spaces: 715, total: 850 },
          ].map((lot) => (
            <Card key={lot.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="flex items-center p-4">
                <MapPin className="mr-2 h-5 w-5 text-blue-500" />
                <span className="font-semibold">{lot.name}</span>
                <span className="ml-auto font-bold text-green-500">{lot.spaces} / {lot.total}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-4 text-sm text-gray-600">* Parking availability updates in real-time</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Car className="h-8 w-8 text-blue-500" />}
          title="Real-Time Availability"
          description="View live parking space counts and find the best spot on campus."
        />
        <FeatureCard
          icon={<CreditCard className="h-8 w-8 text-blue-500" />}
          title="Online Permits"
          description="Purchase and manage your parking permits with ease."
        />
        <FeatureCard
          icon={<FileText className="h-8 w-8 text-blue-500" />}
          title="Citation Management"
          description="Pay or appeal citations online through our user-friendly portal."
        />
      </section>

      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Megaphone className="mr-2 h-6 w-6 text-blue-500" />
          Latest Announcements
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
            New EV charging stations now available in Lot A
          </li>
          <li className="flex items-start">
            <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
            Spring semester parking permits on sale now
          </li>
          <li className="flex items-start">
            <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
            Upcoming maintenance: Lot C closed on July 15-16
          </li>
        </ul>
      </section>

      <section className="relative h-[300px] overflow-hidden rounded-lg">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CSUSB-NewsSlide-WildSong_Library_0.jpg-rEEjXCPmYNmYIo4be6iBEQVxAmkh1i.webp"
          alt="CSUSB Campus"
          width={1200}
          height={300}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white text-center">General Parking Information</h2>
        </div>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="mr-2 h-6 w-6 text-blue-500" />
              Important Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Parking permits are required seven days a week.</li>
              <li>Parking permits continue to be required for any vehicle parked on campus overnight.</li>
              <li>Parking enforcement will continue at all times for disabled parking, service vehicle/other specially marked spaces, and fire zones.</li>
              <li>A special permit/decal is required to park in carpool spaces and residential spaces.</li>
              <li>Carpool permits require registration with the Transportation Services Department.</li>
            </ul>
            <p className="mt-4">The Transportation Services Department can be reached at (909) 537-7433 or rideshare@csusb.edu.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Parking and Transportation Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Contact Information:</p>
                <p>Email: <a href="mailto:parking@csusb.edu" className="text-blue-600 hover:underline">parking@csusb.edu</a></p>
                <p>Phone: <a href="tel:9095375912" className="text-blue-600 hover:underline">(909) 537-5912</a></p>
                <p>Location: University Hall Room 039</p>
              </div>
              <div>
                <p className="font-semibold">Office Hours:</p>
                <p>Monday - Friday: 8:00 am - 5:00 pm</p>
                <p>Saturday - Sunday: Closed</p>
                <p className="mt-2 font-semibold">Information Center Hours:</p>
                <p>Academic Year: Monday-Friday 7am-7pm</p>
                <p>Summer Session: Monday-Thursday 7am-5:30pm</p>
              </div>
            </div>
            <p className="mt-4">After Hours: <a href="tel:9095377777" className="text-blue-600 hover:underline">(909) 537-7777</a></p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

