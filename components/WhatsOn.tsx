/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import { movies } from "@/lib/movies";
import axiosInstance from "@/lib/axios";

export function WhatsOn() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showAll, setShowAll] = useState(false);
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const displayedMovies = showAll ? movies : movies.slice(0, 6);
  const router = useRouter();

  const getMoviesFromAPI = async () => {
    setLoading(true);
    await axiosInstance
      .get("movies/movies/")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setMovies([]);
        setLoading(false);
        console.error("No movies found because of: ", error);
      });
  };

  useEffect(() => {
    getMoviesFromAPI();
  }, []);

  return (
    <section className="bg-gray-900">
      <div className="max-w-[1400px] mx-auto py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          What&apos;s On
        </h2>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[450px] gap-4 p-4 mx-4 lg:mx-10">
          {displayedMovies.map((movie, index) => {
            const gridClass =
              movie.size === "large"
                ? "col-span-1 sm:col-span-2 row-span-1"
                : "col-span-1 row-span-1";

            return (
              <div key={index} className={`relative ${gridClass}`}>
                <Image src={movie.image} alt={movie.title} fill className="object-cover" priority={index === 0} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 p-8 flex flex-col justify-end">
                  <span className="text-cyan-400 text-sm font-medium mb-2">
                    {movie.highlight}
                  </span>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {movie.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{movie.description}</p>

                  <Button
                    variant="outline"
                    className="w-full md:w-auto text-[#0f0f0f] border-white hover:text-white hover:bg-gray-900 transition-colors"
                    onClick={() => router.push(`/movies/${movie.id}`)}
                  >

                    Book Now
                  </Button>
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
            className="text-black border-white hover:bg-white hover:text-white hover:bg-gray-900"
          >

            View All Movies
          </Button>
        </div>
      </div>
    </section>
  );
}
