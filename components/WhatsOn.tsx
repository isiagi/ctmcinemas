'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'

const movies = [
  {
    title: "The Adventure Begins",
    image: "/placeholder.svg?height=600&width=600&text=Movie+1",
    description: "An epic journey through uncharted territories.",
    size: "large"
  },
  {
    title: "Love in Paris",
    image: "/placeholder.svg?height=300&width=300&text=Movie+2",
    description: "A romantic tale set in the city of lights.",
    size: "small"
  },
  {
    title: "Galactic Odyssey",
    image: "/placeholder.svg?height=300&width=600&text=Movie+3",
    description: "Explore the far reaches of the universe in this sci-fi epic.",
    size: "wide"
  },
  {
    title: "The Last Stand",
    image: "/placeholder.svg?height=600&width=300&text=Movie+4",
    description: "One hero's fight against impossible odds.",
    size: "tall"
  },
  {
    title: "Laugh Out Loud",
    image: "/placeholder.svg?height=300&width=300&text=Movie+5",
    description: "The comedy event of the year.",
    size: "small"
  },
  {
    title: "Mystery Manor",
    image: "/placeholder.svg?height=300&width=300&text=Movie+6",
    description: "Uncover the secrets within.",
    size: "small"
  }
]

export function WhatsOn() {
  const [showAll, setShowAll] = useState(false)
  const displayedMovies = showAll ? movies : movies.slice(0, 4)

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What's On</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-[repeat(4,minmax(150px,auto))] gap-4 mb-8">
          {displayedMovies.map((movie, index) => {
            const gridClasses = {
              large: "md:col-span-3 md:row-span-2",
              wide: "md:col-span-4 md:row-span-1",
              tall: "md:col-span-2 md:row-span-2",
              small: "md:col-span-2 md:row-span-1"
            }[movie.size]

            return (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-xl group ${gridClasses}`}
              >
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                    <p className="mb-4 text-sm text-gray-200">{movie.description}</p>
                    <Button variant="secondary" size="sm">Book Now</Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {!showAll && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="gap-2"
            >
              Load More Movies
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

