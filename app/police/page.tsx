import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function UniversityPolice() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">University Police Department</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Emergency Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Emergency:</strong> 911</p>
          <p><strong>Non-Emergency:</strong> (909) 537-5165</p>
          <p><strong>Anonymous Tip Line:</strong> (909) 537-7786</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Location and Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Address:</strong> 5500 University Parkway, San Bernardino, CA 92407</p>
          <p><strong>Location:</strong> University Police Department Building</p>
          <p><strong>Hours:</strong> 24 hours a day, 7 days a week</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Services</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Campus Patrol</li>
            <li>Crime Prevention Programs</li>
            <li>Safety Escorts</li>
            <li>Lost and Found</li>
            <li>Vehicle Assistance (jumpstarts, lockouts)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Parking Enforcement</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The University Police Department is responsible for enforcing parking regulations on campus. This includes:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Issuing citations for parking violations</li>
            <li>Monitoring permit compliance</li>
            <li>Ensuring fire lanes and disabled parking spaces are clear</li>
            <li>Managing special event parking</li>
          </ul>
          <p className="mt-4">For questions about parking citations or appeals, please visit our <Link href="/citations" className="text-blue-600 hover:underline">Citations page</Link>.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Safety Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Always be aware of your surroundings</li>
            <li>Use well-lit walkways and parking areas at night</li>
            <li>Report any suspicious activity to University Police</li>
            <li>Use the safety escort service when walking alone at night</li>
            <li>Keep your vehicle locked and valuables out of sight</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

