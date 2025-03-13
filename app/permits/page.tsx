import PurchasePermit from '@/components/PurchasePermit'

export default function Permits() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Parking Permits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Purchase a Permit</h2>
          <PurchasePermit />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Permit Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Student permits are valid for the entire semester</li>
            <li>Faculty and staff permits are available on a monthly or annual basis</li>
            <li>Visitor permits can be purchased for daily or weekly use</li>
            <li>All permits are virtual and linked to your license plate</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

