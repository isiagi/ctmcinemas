"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Calendar, Eye } from "lucide-react";

const allMovies = [
  {
    id: "nosferatu",
    title: "Nosferatu",
    image:
      "https://assets.voxcinemas.com/posters/P_HO00011813_1734505897702.jpg",
    description: "Succumb to the Darkness",
  },
  {
    id: "mufasa",
    title: "Mufasa: The Lion King",
    image:
      "https://assets.voxcinemas.com/posters/P_HO00011415_1734002132521.jpg",
    description: "The story of an orphan who would be king",
  },
  {
    id: "sonic-3",
    title: "Sonic 3",
    image:
      "https://assets.voxcinemas.com/posters/P_HO00011450_1724997905981.jpg",
    description: "Speed has no limits",
  },
];

export default function MoviesPage() {
  const router = useRouter();

  const handleViewMovie = (movieId: string) => {
    router.push(`/movies/${movieId}`);
  };

  const handleViewShowtimes = (movieId: string) => {
    router.push(`/movies/${movieId}?scrollToShowtimes=true`);
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-[1400px] mx-auto py-16 px-4 md:px-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          All Movies
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allMovies.map((movie) => (
            <div key={movie.id} className="relative aspect-[2/3] group">
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                  <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                  <p className="mb-6 text-lg">{movie.description}</p>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-white border-white hover:bg-white hover:text-black"
                      onClick={() => handleViewMovie(movie.id)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Movie
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-white border-white hover:bg-white hover:text-black"
                      onClick={() => handleViewShowtimes(movie.id)}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      View Showtimes
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
