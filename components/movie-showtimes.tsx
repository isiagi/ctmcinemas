"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  Play,
  Calendar,
  Clock,
  Popcorn,
  LogIn,
} from "lucide-react";
import { type MovieDetails, MovieDay } from "@/types/movie";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useAuth, SignInButton } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface MovieShowtimesProps {
  movie: MovieDetails | null;
}

export default function MovieShowtimes({ movie }: MovieShowtimesProps) {
  const [selectedDay, setSelectedDay] = useState<string | null>(
    movie?.days[0]?.date || null
  );
  const [showTrailer, setShowTrailer] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const showtimesRef = useRef<HTMLDivElement>(null);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (searchParams.get("scrollToShowtimes") === "true") {
      scrollToShowtimes();
    }
  }, [searchParams]);

  if (!movie) {
    return <div className="text-center py-8">Loading movie details...</div>;
  }

  const selectedDayData = movie.days.find((day) => day.date === selectedDay);

  const handleBookNow = (showtime: string) => {
    if (!isSignedIn) {
      setShowAuthDialog(true);
      return;
    }
    router.push(
      `/movies/${movie.id}/book?date=${selectedDay}&time=${showtime}`
    );
  };

  const scrollToShowtimes = () => {
    showtimesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
              className="text-white"
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
          <h2 className="text-2xl font-bold mb-4">About the Movie</h2>
          <p className="text-gray-700 mb-4">{movie.longDescription}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold">Director</h3>
              <p>{movie.director}</p>
            </div>
            <div>
              <h3 className="font-semibold">Cast</h3>
              {/* actor: [ 'James Earl Jones', 'Jeremy Irons', 'Matthew Broderick' ], */}
              <p>{movie.actor.join(",")}</p>

            </div>
            <div>
              <h3 className="font-semibold">Genre</h3>
              <p>{movie.genre.join(", ")}</p>
            </div>
            <div>
              <h3 className="font-semibold">Release Date</h3>
              <p>{movie.days[0].date}</p>
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
        <div ref={showtimesRef}>
          <h2 className="text-2xl font-bold mb-4">Showtimes</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.days.map((day) => (
              <Button
                key={day.date}
                variant={selectedDay === day.date ? "default" : "outline"}
                onClick={() => setSelectedDay(day.date)}
              >
                {day.displayDate}
              </Button>
            ))}
          </div>
          {selectedDayData && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedDayData.showtimes.map((showtime, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg bg-white hover:shadow-md transition-shadow"
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
                      {showtime.type.includes("3D") && (
                        <span className="mr-1">3D</span>
                      )}
                      {showtime.type.includes("Popcorn") && (
                        <Popcorn className="h-4 w-4 ml-1" />
                      )}
                    </span>
                    <Button
                      size="sm"
                      onClick={() => handleBookNow(showtime.time)}
                    >
                      <Clock className="mr-2 h-4 w-4" /> Book Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
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
              height="auto"
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
