/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Calendar, Clock, Popcorn, LogIn } from "lucide-react";
// import { type MovieDetails } from "@/types/movie";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { SignInButton } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axiosInstance from "@/lib/axios";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

// interface MovieShowtimesProps {
//   movie: MovieDetails | null;
// }

export default function MovieShowtimes({ movie }: any) {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [showtimes, setShowtimes] = useState<any[]>([]);
  const [showTrailer, setShowTrailer] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const showtimesRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get("scrollToShowtimes") === "true") {
      scrollToShowtimes();
    }
  }, [searchParams]);

  useEffect(() => {
    if (movie) {
      fetchMovieShowtimes();
    }

    // console.log(movie, "movie");
  }, [movie]);

  const fetchMovieShowtimes = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `showings/showings/movie/${movie?.id}/`
      );
      const rawData = response.data;

      // Group showtimes by date
      const groupedShowtimes = rawData.reduce((acc: any, showtime: any) => {

        const { date, id, time, price, includes_3d_glasses, includes_popcorn } =
          showtime;

        const existingDate = acc.find((entry: any) => entry.date === date);

        if (existingDate) {
          existingDate.showtimes.push({
            id,
            time,
            price,
            includes_3d_glasses,
            includes_popcorn,
            // type: type || "",
          });
        } else {
          acc.push({
            date,
            showtimes: [
              {
                id,
                time,
                price,
                includes_3d_glasses,
                includes_popcorn,
                // type: type || "",
              },
            ],
          });
        }

        return acc;
      }, []);

      setShowtimes(groupedShowtimes);

      // console.log(showtimes, "showtimes");
    } catch (error) {
      console.error("Error fetching showtimes:", error);
      setShowtimes([]);
    } finally {
      setLoading(false);
    }
  };

  // const selectedDayData = showtimes.find((day) => day.date === selectedDay);
  const selectedDayData = showtimes.find((day) => day.date === selectedDay) || {
    showtimes: [],
  };

  const handleBookNow = (showtime: any) => {

    localStorage.setItem("show_id", showtime.id);

    router.push(
      `/movies/${movie?.id}/book?date=${selectedDay}&time=${showtime.time}`
    );
  };

  const scrollToShowtimes = () => {
    showtimesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!movie) {
    return <div className="text-center py-8">Loading movie details...</div>;
  }

  return (
    <div className="w-full bg-gray-100">
      {/* Banner Section */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src={movie.image || "/placeholder.svg"}
            alt={movie.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl font-bold text-white mb-2">{movie.title}</h1>
          <div className="flex items-center space-x-4 text-white">
            <span className="px-2 py-1 bg-white/20 rounded">
              {movie.language}
            </span>
            <span>{movie.duration}</span>
            <span>{movie.rating}</span>

            <Button
              variant="ghost"
              size="sm"
              className="text-white bg-gray-900"
              onClick={() => setShowTrailer(true)}
            >

              <Play className="h-4 w-4 mr-2" />
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Movie Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            About the Movie
          </h2>
          <p className="text-gray-700 mb-4">{movie.longDescription}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700">Director</h3>
              <p>{movie.director}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Cast</h3>
              <p>{movie.actor.join(", ")}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Genre</h3>
              <p>{movie.highlight}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Release Date</h3>
              <p>{movie.releaseDate}</p>
            </div>
          </div>
        </div>

        {/* Scroll to Showtimes Button */}
        <div className="text-center mb-8">
          <Button onClick={scrollToShowtimes}>
            <Calendar className="mr-2 h-4 w-4" /> View Showtimes
          </Button>
        </div>

        {/* Showtimes */}
        {/* Showtimes */}
        <div ref={showtimesRef}>
          <h2 className="text-2xl font-bold mb-4">Showtimes</h2>

          {/* Date Selection Buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {showtimes.map((day) => (
              <Button key={day.date} variant={selectedDay === day.date ? "default" : "outline"} onClick={() => setSelectedDay(day.date)}>
                {day.date}
              </Button>
            ))}
          </div>

          {/* Showtimes Display */}
          {loading && <p>Loading showtimes...</p>}
          {selectedDayData?.showtimes?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedDayData.showtimes.map((showtime: any, index: any) => (

                <div
                  key={index}
                  className="p-4 border rounded-lg group bg-white hover:shadow-md transition-shadow"
                >

                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">
                      {showtime.time}
                    </span>
                    <span className="text-gray-600">
                      {Number.parseInt(showtime.price).toLocaleString()} UGX
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 flex items-center">
                      {showtime.includes_3d_glasses && (
                        <span className="mr-1">3D</span>
                      )}
                      {showtime.includes_popcorn && (
                        <Popcorn className="h-4 w-4 ml-1" />
                      )}
                    </span>

                    <Button
                      className="group-hover:bg-blue-600 bg-blue-500 text-white"
                      size="sm"
                      onClick={() => handleBookNow(showtime)}
                    >

                      <Clock className="mr-2 h-4 w-4" /> Book Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              Select a date to see the time of the show.
            </p>
          )}
        </div>
      </div>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="w-full max-w-3xl">
            <ReactPlayer
              url={movie.trailerUrl}
              width="100%"
              height="480px"
              controls
            />
            <Button className="mt-4" onClick={() => setShowTrailer(false)}>
              Close Trailer
            </Button>
          </div>
        </div>
      )}

      {/* Auth Dialog */}
      <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign in required</DialogTitle>
            <DialogDescription>
              Please sign in to book movie tickets
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <SignInButton mode="modal">
              <Button>
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </SignInButton>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
