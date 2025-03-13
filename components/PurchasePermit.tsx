'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

export default function PurchasePermit() {
  const [permitType, setPermitType] = useState('')
  const [duration, setDuration] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send data to backend)
    console.log('Permit purchase submitted:', { permitType, duration })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="permitType">Permit Type</Label>
        <Select onValueChange={setPermitType} value={permitType}>
          <SelectTrigger id="permitType">
            <SelectValue placeholder="Select permit type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="faculty">Faculty</SelectItem>
            <SelectItem value="staff">Staff</SelectItem>
            <SelectItem value="visitor">Visitor</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="duration">Duration</Label>
        <Select onValueChange={setDuration} value={duration}>
          <SelectTrigger id="duration">
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Day Pass</SelectItem>
            <SelectItem value="week">Weekly</SelectItem>
            <SelectItem value="month">Monthly</SelectItem>
            <SelectItem value="semester">Semester</SelectItem>
            <SelectItem value="year">Annual</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="licensePlate">License Plate</Label>
        <Input id="licensePlate" placeholder="Enter your license plate number" />
      </div>
      <Button type="submit">Purchase Permit</Button>
    </form>
  )
}

