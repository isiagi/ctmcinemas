"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const slides = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_.jpg",
    alt: "Movie 1",
    title: "Moana",
    description: "Experience the action-packed adventure of the year!",
    route: "/movies/moana",
  },
  {
    image:

      "https://res.cloudinary.com/isiagi/image/upload/v1738801024/m4st2smiuudiql3rjadq.jpg",

    alt: "Movie 2",

    title: "Captain America: Brave New World",

    description: "Fall in love with the most heartwarming story of the season.",
    route: "/movies/captain-america-brave-new-world",
  },
  {
    image:
      "https://res.cloudinary.com/isiagi/image/upload/v1738801026/t9vztgetn74d0suovsny.jpg",
    alt: "Movie 3",
    title: "Mufasa: The Lion King",
    description: "Journey to the unknown in this mind-bending space odyssey.",
    route: "/movies/mufasa-the-lion-king",
  },
];

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Only render the current slide instead of mapping through all slides
  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={currentSlideData.image || "/placeholder.svg"}
          alt={currentSlideData.alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {currentSlideData.title}
            </h2>
            <p className="text-lg mb-8">{currentSlideData.description}</p>
            <Button
              onClick={() => {
                console.log("Routing to:", currentSlideData.route); // Debug log
                router.push(currentSlideData.route);
              }}
              size="lg"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>

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
  );
}
