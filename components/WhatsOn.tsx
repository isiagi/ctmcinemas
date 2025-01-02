"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const movies = [
  {
    title: "Nosferatu",
    image: "/placeholder.svg?height=800&width=400&text=Nosferatu",
    description: "Succumb to the Darkness",
    highlight: "Now Showing",
  },
  {
    title: "Mufasa: The Lion King",
    image: "/placeholder.svg?height=400&width=600&text=Mufasa",
    description: "The story of an orphan who would be king",
    highlight: "Exclusive Preview",
  },
  {
    title: "Sonic 3",
    image: "/placeholder.svg?height=400&width=300&text=Sonic",
    description: "Speed has no limits",
    highlight: "Coming Soon",
  },
  {
    title: "Marco",
    image: "/placeholder.svg?height=400&width=300&text=Marco",
    description: "Every hero has a dark side",
    highlight: "Book Now",
  },
  {
    title: "Identity",
    image: "/placeholder.svg?height=400&width=300&text=Identity",
    description: "Who can you trust?",
    highlight: "Final Week",
  },
  {
    title: "The Last Stand",
    image: "/placeholder.svg?height=300&width=300&text=LastStand",
    description: "One final battle awaits",
    highlight: "Coming Soon",
  },
];

export function WhatsOn() {
  const router = useRouter();

  return (
    <section className="bg-black">
      <div className="max-w-[1400px] mx-auto py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          What's On
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-[1000px]">
          {/* Large left section */}
          <div className="relative md:col-span-1 md:row-span-2 bg-gray-900">
            <Image
              src={movies[0].image}
              alt={movies[0].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 p-8 flex flex-col justify-end">
              <span className="text-cyan-400 text-sm font-medium mb-2">
                {movies[0].highlight}
              </span>
              <h3 className="text-4xl font-bold text-white mb-2">
                {movies[0].title}
              </h3>
              <p className="text-gray-300 mb-4">{movies[0].description}</p>
              <Button
                variant="outline"
                className="w-full md:w-auto text-white border-white hover:bg-white hover:text-black"
              >
                Book Now
              </Button>
            </div>
          </div>

          {/* Top right section */}
          <div className="relative md:col-span-2 md:row-span-1 bg-purple-900">
            <Image
              src={movies[1].image}
              alt={movies[1].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/90 p-6 flex flex-col justify-end">
              <span className="text-pink-400 text-sm font-medium mb-2">
                {movies[1].highlight}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                {movies[1].title}
              </h3>
              <p className="text-gray-300">{movies[1].description}</p>
            </div>
          </div>

          {/* Bottom right grid */}
          <div className="grid grid-cols-2 md:col-span-2 md:row-span-1 h-full">
            {/* Sonic 3 - Taller */}
            <div className="relative bg-blue-900 row-span-3">
              <Image
                src={movies[2].image}
                alt={movies[2].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90 p-4 flex flex-col justify-end">
                <span className="text-cyan-400 text-xs font-medium mb-1">
                  {movies[2].highlight}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {movies[2].title}
                </h3>
                <p className="text-gray-300 text-sm">{movies[2].description}</p>
              </div>
            </div>

            {/* Marco - Regular height */}
            <div className="relative bg-red-900">
              <Image
                src={movies[3].image}
                alt={movies[3].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900/90 p-4 flex flex-col justify-end">
                <span className="text-red-400 text-xs font-medium mb-1">
                  {movies[3].highlight}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {movies[3].title}
                </h3>
                <p className="text-gray-300 text-sm">{movies[3].description}</p>
              </div>
            </div>

            {/* Identity - Regular height */}
            <div className="relative bg-indigo-900">
              <Image
                src={movies[4].image}
                alt={movies[4].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/90 p-4 flex flex-col justify-end">
                <span className="text-indigo-400 text-xs font-medium mb-1">
                  {movies[4].highlight}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {movies[4].title}
                </h3>
                <p className="text-gray-300 text-sm">{movies[4].description}</p>
              </div>
            </div>

            {/* The Last Stand */}
            <div className="relative bg-green-900">
              <Image
                src={movies[5].image}
                alt={movies[5].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/90 p-4 flex flex-col justify-end">
                <span className="text-green-400 text-xs font-medium mb-1">
                  {movies[5].highlight}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {movies[5].title}
                </h3>
                <p className="text-gray-300 text-sm">{movies[5].description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.push("/movies")}
            className="text-white border-white hover:bg-white hover:text-black"
          >
            View All Movies
          </Button>
        </div>
      </div>
    </section>
  );
}
