/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Calendar, Eye } from "lucide-react";
// import { movies } from "@/lib/movies";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";

export default function MoviesPage() {
  const router = useRouter();
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleViewMovie = (movieId: string) => {
    router.push(`/movies/${movieId}`);
  };

  const handleViewShowtimes = (movieId: string) => {
    router.push(`/movies/${movieId}?scrollToShowtimes=true`);
  };

  const getMoviesFromAPI = async () => {
    setLoading(true);
    await axiosInstance
      .get("movies/movies/")
      .then((response) => {
        setMovies(response.data);
      })
      .catch(() => {
        setMovies([]);
        // console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getMoviesFromAPI();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-[1400px] mx-auto py-16 px-4 md:px-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          All Movies
        </h1>

        <span>ndjio</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {movies.map((movie: any) => (
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
                      className="text-[#0f0f0f] border-white hover:bg-gray-900 hover:text-white"
                      onClick={() => handleViewMovie(movie.id)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Movie
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-[#0f0f0f] border-white hover:bg-gray-900 hover:text-white"
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
