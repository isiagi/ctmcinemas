/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axios";
import { Calendar, Eye } from "lucide-react";
import Image from "next/image";
import React from "react";

function Page() {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchMovies = async () => {
      //   const response = await fetch(
      //     "http://127.0.0.1:8000/movies/movies/by_status/?status=NOW_SHOWING"
      //   );
      //   const data = await response.json();
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          "movies/movies/by_status/?status=Now_Showing"
        );
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleViewMovie = (movieId: string) => {
    window.location.href = `/movies/${movieId}`;
  };

  const handleViewShowtimes = (movieId: string) => {
    window.location.href = `/movies/${movieId}?scrollToShowtimes=true`;
  };

  return (
    <div>
      <div className="relative h-[300px] w-full">
        <Image
          src="https://nsdt.org.uk/wp-content/uploads/2021/05/Whats-on.png"
          alt="Coming Soon Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            What&apos;s On
          </h1>
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-12">
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
                    className="text-[#0f0f0f] border-white hover:text-white hover:bg-gray-900 transition-colors"
                    onClick={() => handleViewMovie(movie.id)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Movie
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#0f0f0f] border-white hover:text-white hover:bg-gray-900 transition-colors"
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
  );
}

export default Page;
