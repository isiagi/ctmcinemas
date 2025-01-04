'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

// This would typically come from an API
const generateSeats = () => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const seatsPerRow = 10
  return rows.flatMap(row => 
    Array.from({ length: seatsPerRow }, (_, i) => ({
      id: `${row}${i + 1}`,
      row,
      number: i + 1,
      isAvailable: Math.random() > 0.2, // 80% of seats are available
      price: 10.00 // Fixed price for simplicity
    }))
  )
}

export default function BookPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [seats, setSeats] = useState(generateSeats())
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  const movieId = searchParams.get('id')
  const date = searchParams.get('date')
  const time = searchParams.get('time')

  const toggleSeat = (seatId: string) => {
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    )
  }

  const handleReserve = () => {
    const selectedSeatsParam = selectedSeats.join(',')
    router.push(`/movies/${movieId}/summary?date=${date}&time=${time}&seats=${selectedSeatsParam}`)
  }

  const totalPrice = selectedSeats.length * 10.00 // Assuming $10 per seat

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Select Your Seats</h1>
      <p className="mb-4">Movie: {movieId}, Date: {date}, Time: {time}</p>

      <div className="mb-8">
        <div className="w-full h-8 bg-gray-300 rounded-t-lg mb-4 text-center text-sm leading-8">Screen</div>
        <div className="grid grid-cols-10 gap-2">
          {seats.map(seat => (
            <button
              key={seat.id}
              className={`w-8 h-8 rounded-md text-sm font-bold ${
                !seat.isAvailable 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : selectedSeats.includes(seat.id)
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              onClick={() => seat.isAvailable && toggleSeat(seat.id)}
              disabled={!seat.isAvailable}
            >
              {seat.row}{seat.number}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div>
          <p>Selected Seats: {selectedSeats.join(', ')}</p>
          <p className="font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
        <Button 
          onClick={handleReserve} 
          disabled={selectedSeats.length === 0}
          className="mt-4 sm:mt-0"
        >
          Reserve Seat{selectedSeats.length > 1 ? 's' : ''}
        </Button>
      </div>
    </div>
  )
}

