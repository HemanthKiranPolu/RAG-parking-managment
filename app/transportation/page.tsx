import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Bus, Car, CreditCard } from 'lucide-react'

export default function Transportation() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold mb-4">Transportation Services</h1>
        <p className="text-xl">Connecting you to campus and beyond</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Metrolink/IE Commuter</CardTitle>
            </CardHeader>
            <CardContent>
              <p>90 Days Free Rides for Faculty and Staff</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Amtrak</CardTitle>
            </CardHeader>
            <CardContent>
              <p>15% Discount for Students</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Commuter Portal</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Are you looking for a better way to get to campus? You've come to the right place! When you share the ride, everyone benefits; your community, the environment, your car, and your wallet! CSUSB Transportation Services is here to help you get started with our exclusive Commuter Website Portal.</p>
          <p className="mt-4">Your customized-commute starts here:</p>
          <Button asChild className="mt-4">
            <Link href="#commuter-portal">Commuter Portal</Link>
          </Button>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Transportation Options</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Vanpool', 'Electric', 'Bike', 'Walk', 'Bus', 'Carpool'].map((option) => (
            <Card key={option}>
              <CardContent className="p-4 text-center">{option}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Mass Transit Partners</h2>
        <p className="mb-4 text-center text-xl">Students, Faculty and Staff ride FREE!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Omni-Trans</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Serving San Bernardino</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Victor Valley Transit Authority</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Connecting the High Desert Region to CSUSB</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sunline</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Commuter 10 and HAUL Pass - Connecting CSUSB and PDC</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Metrolink</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Serving Southern California - Current programs and promotions available for CSUSB students!</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Car className="mr-2 h-6 w-6 text-blue-500" />
              CSUSB Vanpool Program
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Savings - up to $6,000* per year, $400 monthly subsidy plus additional incentives through CSUSB, full coverage insurance, maintenance and 24/7 roadside assistance, month-to-month flexibility and a guaranteed ride home program, all while making a significant reduction to your carbon footprint.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bus className="mr-2 h-6 w-6 text-blue-500" />
              Walk and Bike to Campus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Walking and biking to campus can save you thousands in reduced and eliminated costs but, perhaps most important of all, it is the greatest way that you can help CSUSB reduce harmful emissions.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Car className="mr-2 h-6 w-6 text-blue-500" />
              CSUSB Carpool Matching Program
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Save time riding in the HOV lanes, reduce monthly fuel and maintenance expenses, save wear-and-tear on your vehicle and do your part to reduce harmful emissions. Let CSUSB help you match with rideshare partners.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">EV Charging Program</h2>
        <p className="mb-4 text-center">Driving an Electric Vehicle is a great way to help the planet, while saving you money! Check out the details below, on how our EV Charging Program has already achieved big results for CSUSB students, faculty and staff, and made a significant impact for Southern California and the Inland Empire!</p>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="mr-2 h-6 w-6 text-blue-500" />
              EV Program Estimates as of January 2024
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>30 Days</TableHead>
                  <TableHead>365 Days</TableHead>
                  <TableHead>Lifetime</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Energy Dispensed</TableCell>
                  <TableCell>9,515kWh</TableCell>
                  <TableCell>211,209kWh</TableCell>
                  <TableCell>753,737kWh</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Greenhouse Gas Emissions Reduced</TableCell>
                  <TableCell>7,187kg</TableCell>
                  <TableCell>150,809kg</TableCell>
                  <TableCell>461,315kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Charging Sessions</TableCell>
                  <TableCell>653 sessions</TableCell>
                  <TableCell>17,750 sessions</TableCell>
                  <TableCell>79,898 sessions</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Vehicle Miles (at 4 miles per kWh)</TableCell>
                  <TableCell>38,061 miles</TableCell>
                  <TableCell>844,835 miles</TableCell>
                  <TableCell>3,014,947 miles</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fuel Costs Saved (at $4.25/gallon)</TableCell>
                  <TableCell>$7,353</TableCell>
                  <TableCell>$163,207</TableCell>
                  <TableCell>$582,433</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Why choose Alternative Transportation Options?</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>Enjoy significant savings - Save up to $6,000 dollars per year! Share costs with; ridesharing, free transit passes and free EV charging!</li>
          <li>Save time - Enjoy access to the HOV lanes with; Vanpool, Carpool and Mass Transit</li>
          <li>Reclaim lost time and reduce stress - Commuting is stressful! Sit back and relax while professional drivers, Drive Captains or turn-based scheduled drivers take the wheel.</li>
          <li>Do your part to reduce pollution and harmful emissions - Help the CSUSB community save up to an average of 4.6 TONS of carbon dioxide per year, for every vehicle we take off the road! (Source: EPA)</li>
        </ul>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Value of Benefits Courtesy of Parking and Transportation Services</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Carrier/Benefit</TableHead>
                <TableHead>Daily</TableHead>
                <TableHead>Monthly</TableHead>
                <TableHead>Annual</TableHead>
                <TableHead>Serving / Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>OmniTrans GoSmart</TableCell>
                <TableCell>-</TableCell>
                <TableCell>$60.00</TableCell>
                <TableCell>$720.00</TableCell>
                <TableCell>San Bernardino and Connections</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sunline - 10 Commuter Link</TableCell>
                <TableCell>-</TableCell>
                <TableCell>$150.00</TableCell>
                <TableCell>$1,800.00</TableCell>
                <TableCell>CSUSB - Palm Desert Campus</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sunline - HAUL Pass</TableCell>
                <TableCell>-</TableCell>
                <TableCell>$34.00</TableCell>
                <TableCell>$408.00</TableCell>
                <TableCell>Coachella Valley</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>VVTA - 15 Commuter Link / Howling Xpress</TableCell>
                <TableCell>$13.00</TableCell>
                <TableCell>$403.00</TableCell>
                <TableCell>$4,836.00</TableCell>
                <TableCell>CSUSB - High Desert</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>VVTA - Local Service</TableCell>
                <TableCell>-</TableCell>
                <TableCell>$45.00</TableCell>
                <TableCell>$540.00</TableCell>
                <TableCell>High Desert</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Subsidized Electric Vehicle Charging</TableCell>
                <TableCell>$4.50</TableCell>
                <TableCell>$139.00</TableCell>
                <TableCell>$1,668.00</TableCell>
                <TableCell>CSUSB, PDC</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Totals</TableCell>
                <TableCell>-</TableCell>
                <TableCell>$831.00</TableCell>
                <TableCell>$9,972.00</TableCell>
                <TableCell>Free to CSUSB Students, Faculty and Staff - Courtesy of Parking and Transportation Services</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

