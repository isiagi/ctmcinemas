'use client'

import { useState } from 'react'
import { ChevronRight, Info } from 'lucide-react'
import { MovieDetails, MovieDay } from '@/types/movie'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/navigation'

interface MovieShowtimesProps {
  movie: MovieDetails | null
}

export default function MovieShowtimes({ movie }: MovieShowtimesProps) {
  const [selectedDay, setSelectedDay] = useState<string | null>(movie?.days[0]?.date || null)
  const router = useRouter()

  if (!movie) {
    return <div className="text-center py-8">Loading movie details...</div>
  }

  const selectedDayData = movie.days.find(day => day.date === selectedDay)

  const handleBookNow = (showtime: string) => {
    router.push(`/movies/${movie.id}/book?date=${selectedDay}&time=${showtime}`)
  }

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src={movie.bannerImage}
            alt={movie.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl font-bold text-white mb-2">{movie.title}</h1>
          <div className="flex items-center space-x-4 text-white">
            <span className="px-2 py-1 bg-white/20 rounded">{movie.language}</span>
            <span>{movie.duration}</span>
            <span>{movie.rating}</span>
            <Button variant="ghost" size="sm" className="text-white">
              <Info className="h-4 w-4 mr-2" />
              More Info
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">VIEW TIMES AND BOOK</h2>
          <Select defaultValue="recommended">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="time">Time</SelectItem>
              <SelectItem value="price">Price</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date Navigation */}
        <div className="flex space-x-4 overflow-x-auto pb-4 mb-8">
          {movie.days.map((day) => (
            <Button
              key={day.date}
              variant={selectedDay === day.date ? "default" : "outline"}
              onClick={() => setSelectedDay(day.date)}
              className="min-w-[120px]"
            >
              {day.displayDate}
            </Button>
          ))}
          <Button variant="ghost" className="min-w-[120px]">
            More dates
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* Movie Description */}
        <p className="text-gray-600 mb-8">
          {movie.description}
        </p>

        {/* Showtimes */}
        {selectedDayData && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedDayData.showtimes.map((showtime, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-white hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">{showtime.time}</span>
                  <span className="text-gray-600">{showtime.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{showtime.type}</span>
                  <Button size="sm" onClick={() => handleBookNow(showtime.time)}>Book Now</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

