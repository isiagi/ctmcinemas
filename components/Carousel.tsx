'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: '/placeholder.svg?height=600&width=1200&text=Movie+1',
    alt: 'Movie 1',
    title: 'Blockbuster Hit',
    description: 'Experience the action-packed adventure of the year!',
  },
  {
    image: '/placeholder.svg?height=600&width=1200&text=Movie+2',
    alt: 'Movie 2',
    title: 'Romantic Comedy',
    description: 'Fall in love with the most heartwarming story of the season.',
  },
  {
    image: '/placeholder.svg?height=600&width=1200&text=Movie+3',
    alt: 'Movie 3',
    title: 'Sci-Fi Thriller',
    description: 'Journey to the unknown in this mind-bending space odyssey.',
  },
]

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl mb-8">{slide.description}</p>
              <Button size="lg">Book Now</Button>
            </div>
          </div>
        </div>
      ))}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </Button>
    </div>
  )
}

