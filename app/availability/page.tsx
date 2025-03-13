'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin } from 'lucide-react'

const ParkingMap = dynamic(() => import('@/components/ParkingMap'), { ssr: false });
export default function Availability() {
  const [parkingLots, setParkingLots] = useState([
    { id: 1, name: 'Lot C', available: 1047, total: 1200, lat: 34.1825, lng: -117.3235 },
    { id: 2, name: 'Lot D', available: 808, total: 1000, lat: 34.1830, lng: -117.3240 },
    { id: 3, name: 'Lot F', available: 367, total: 500, lat: 34.1835, lng: -117.3245 },
    { id: 4, name: 'Lot G and H', available: 804, total: 1000, lat: 34.1840, lng: -117.3250 },
    { id: 5, name: 'Lot N', available: 1057, total: 1200, lat: 34.1845, lng: -117.3255 },
    { id: 6, name: 'Parking Garage West', available: 690, total: 800, lat: 34.1850, lng: -117.3260 },
    { id: 7, name: 'Parking Garage East', available: 715, total: 850, lat: 34.1855, lng: -117.3265 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setParkingLots(prevLots => 
        prevLots.map(lot => ({
          ...lot,
          available: Math.floor(Math.random() * (lot.total - 50) + 50) // Random number between 50 and total
        }))
      )
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Real-Time Parking Availability</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {parkingLots.map((lot) => (
          <Card key={lot.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="flex items-center p-4">
              <MapPin className="mr-2 h-5 w-5 text-blue-500" />
              <span className="font-semibold">{lot.name}</span>
              <span className="ml-auto font-bold text-green-500">{lot.available} / {lot.total}</span>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <ParkingMap parkingLots={parkingLots} />
      
      <p className="text-center mt-4 text-sm text-gray-600">* Parking availability updates in real-time every 5 seconds</p>
    </div>
  )
}

