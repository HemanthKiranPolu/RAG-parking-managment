'use client'

import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

const getMarkerColor = (available: number, total: number) => {
  const ratio = available / total
  if (ratio > 0.5) return 'green'
  if (ratio > 0.2) return 'yellow'
  return 'red'
}

const customIcon = (color: string) => new Icon({
  iconUrl: `/markers/${color}-marker.png`,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

interface ParkingLot {
  id: number
  name: string
  available: number
  total: number
  lat: number
  lng: number
}

interface ParkingMapProps {
  parkingLots: ParkingLot[]
}

export default function ParkingMap({ parkingLots }: ParkingMapProps) {
  const [selectedLot, setSelectedLot] = useState<ParkingLot | null>(null)

  return (
    <div className="h-[600px] w-full">
      <MapContainer
        center={[34.1825, -117.3235]} // Fixed center location
        zoom={16} // Zoom level, you can adjust for more or less zoom
        style={{ height: '100%', width: '100%' }}
        zoomControl={true} // Allow zoom controls
        minZoom={14} // Minimum zoom level to avoid too much zoom out
        maxZoom={18} // Maximum zoom level to avoid too much zoom in
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {parkingLots.map((lot) => (
          <Marker
            key={lot.id}
            position={[lot.lat, lot.lng]}
            icon={customIcon(getMarkerColor(lot.available, lot.total))}
            eventHandlers={{
              click: () => setSelectedLot(lot),
            }}
          >
            <Popup>
              <h3>{lot.name}</h3>
              <p>{lot.available} / {lot.total} spaces available</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {selectedLot && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h3 className="text-lg font-bold">{selectedLot.name}</h3>
          <p>{selectedLot.available} / {selectedLot.total} spaces available</p>
          <p>Status: {getMarkerColor(selectedLot.available, selectedLot.total)}</p>
        </div>
      )}
    </div>
  )
}
