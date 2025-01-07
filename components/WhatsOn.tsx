"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// type Movie = {
//   title: string;
//   image: string;
//   description: string;
//   size: "large" | "small";
// };

const movies = [
  {
    title: "Nosferatu",
    image:
      "https://assets.voxcinemas.com/posters/P_HO00011813_1734505897702.jpg",
    description: "Succumb to the Darkness",
    size: "large",
  },
  {
    title: "Mufasa",
    image:
      "https://assets.voxcinemas.com/posters/P_HO00011415_1734002132521.jpg",
    description: "The Lion King Returns",
    size: "small",
  },
  {
    title: "Sonic 3",
    image:
      "https://assets.voxcinemas.com/posters/P_HO00011450_1724997905981.jpg",
    description: "Speed has no limits",
    size: "small",
  },
  {
    title: "Marco",
    image:
      "https://assets.voxcinemas.com/posters/P_HO00011837_1735283944255.jpg",
    description: "A journey begins",
    size: "small",
  },
  {
    title: "Identity",
    image:
      "https://assets.voxcinemas.com/posters/P_HO00011817_1734505836119.jpg",
    description: "Who can you trust?",
    size: "small",
  },
  {
    title: "The Last Stand",
    image:
      "https://assets.voxcinemas.com/posters/P_HO00011201_1724765243551.jpg",
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showAll, setShowAll] = useState(false);
  const displayedMovies = showAll ? movies : movies.slice(0, 6);
  const router = useRouter();

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white px-4">
          What&apos;s On
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
