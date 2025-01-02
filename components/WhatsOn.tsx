"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const movies = [
  {
    title: "Nosferatu",
    image:
      "https://images.unsplash.com/photo-1729277789546-27ea8b64c0e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D",
    description: "Succumb to the Darkness",
    size: "large",
  },
  {
    title: "Mufasa",
    image:
      "https://images.unsplash.com/photo-1733468221794-dd3344c6015e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D",
    description: "The Lion King Returns",
    size: "small",
  },
  {
    title: "Sonic 3",
    image: "/api/placeholder/400/300",
    description: "Speed has no limits",
    size: "small",
  },
  {
    title: "Marco",
    image:
      "https://images.unsplash.com/photo-1727452274228-4fa1c56142db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",
    description: "A journey begins",
    size: "small",
  },
  {
    title: "Identity",
    image: "/api/placeholder/400/300",
    description: "Who can you trust?",
    size: "small",
  },
  {
    title: "The Last Stand",
    image: "/api/placeholder/800/600",
    description: "One final battle",
    size: "large",
  },
  {
    title: "The Last Stand",
    image: "/api/placeholder/800/600",
    description: "One final battle",
    size: "large",
  },
];

export function WhatsOn() {
  const [showAll, setShowAll] = useState(false);
  const displayedMovies = showAll ? movies : movies.slice(0, 6);

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white px-4">
          What's On
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[450px] gap-4 p-4 mx-4 lg:mx-10">
          {displayedMovies.map((movie, index) => {
            const gridClass =
              movie.size === "large"
                ? "col-span-1 sm:col-span-2 row-span-1"
                : "col-span-1 row-span-1";

            return (
              <div key={index} className={`relative ${gridClass}`}>
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                    <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                    <p className="mb-4 text-sm line-clamp-2">
                      {movie.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-white border-white hover:bg-white hover:text-black"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && movies.length > 6 && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="gap-2 text-white border-white hover:bg-white hover:text-black"
            >
              Load More Movies
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
