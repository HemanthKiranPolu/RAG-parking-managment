import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Citations() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Citation Information</h1>

      <Card>
        <CardHeader>
          <CardTitle>About Parking Citations</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Parking citations are issued to those vehicles violating sections of the California Vehicle Code related to parking, and/or the University's Ordinances.</p>
          <p className="mt-4 font-bold">Please Note: Parking citations are issued to the vehicle, not to a person.</p>
          <p className="mt-4">Parking citations must be paid or appealed within 21 days of issuance, or the following may occur:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Late penalties will be assessed.</li>
            <li>Student hold on campus, affecting registration, grades, and graduation in accordance with CSU Executive Order 145.</li>
            <li>DMV Registration hold</li>
            <li>Lien placed upon Federal and State income tax returns.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pay A Citation</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Need to pay a citation? For your convenience, Parking Services offers the following payment options:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Pay citation online here, <Link href="/pay-citation" className="text-blue-600 hover:underline">Pay Citation</Link>.</li>
            <li>In person at the Student Financial Services located in University Hall (UH-35)</li>
            <li>By mail. Please make checks payable to CSUSB. Our mailing address is:
              <address className="mt-2 ml-4">
                Parking Services (UH-039)<br />
                5500 University Parkway<br />
                San Bernardino, CA 92407
              </address>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Appeal Citation</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Parking citations must be appealed within 21 calendar days of the date of citation issuance.</p>
          <p className="mt-2">For more information on the citation appeal process, visit our <Link href="/appeal" className="text-blue-600 hover:underline">Appeal Page</Link>.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Student Holds</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Have a student hold for parking citations?</p>
          <p className="mt-2">Citations must be paid in order for a student hold to be removed. Once payment is made, please submit a request to remove your student hold by completing a <Link href="/hold-removal" className="text-blue-600 hover:underline">Student Hold Removal Request Form</Link>.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Plans Available</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Pursuant to California Vehicle Code and CSU Systemwide policy, payment plans are available for those with multiple unpaid parking citations or at least $200 owed.</p>
          <p className="mt-2">If you meet the criteria mentioned above, you may request a payment plan by completing a <Link href="/payment-plan" className="text-blue-600 hover:underline">Citation Payment Plan Request</Link>.</p>
          <p className="mt-4">For more information, please visit Parking & Transportation Services in University Hall, room 039 or contact us at by email at <a href="mailto:parking@csusb.edu" className="text-blue-600 hover:underline">parking@csusb.edu</a> or by phone at <a href="tel:9095375912" className="text-blue-600 hover:underline">909.537.5912</a>.</p>
        </CardContent>
      </Card>
    </div>
  )
}

