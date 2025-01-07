"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Edit2, Film, Calendar, Clock, Info } from "lucide-react";
import Image from "next/image";

interface MovieDetails {
  title: string;
  image: string;
  duration: string;
  rating: string;
  screen: string;
}

export default function BookingSummaryPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    title: "Nosferatu",
    image: "/placeholder.svg?height=200&width=150&text=Movie",
    duration: "2h 15m",
    rating: "PG-13",
    screen: "Standard",
  });

  const seats = searchParams.get("seats")?.split(",") || [];
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const movieId = searchParams.get("id");

  const handleEditSeats = () => {
    router.push(
      `/movies/${movieId}/book?date=${date}&time=${time}&seats=${seats.join(
        ","
      )}`
    );
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">BOOKING SUMMARY</h1>

      {/* Movie Details Section */}
      <div className="border-b py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Film className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-bold">MOVIE DETAILS</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={() => router.push("/")}>
            <Info className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-6">
          <div className="relative w-[150px] h-[200px]">
            <Image
              src={movieDetails.image}
              alt={movieDetails.title}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{movieDetails.title}</h3>
            <p className="text-gray-600 mb-1">
              Duration: {movieDetails.duration}
            </p>
            <p className="text-gray-600 mb-1">Rating: {movieDetails.rating}</p>
            <p className="text-gray-600">Screen: {movieDetails.screen}</p>
          </div>
        </div>
      </div>

      {/* Show Details Section */}
      <div className="border-b py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-bold">SHOW DETAILS</h2>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            <span>Please arrive 15 minutes before showtime</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Date: {date}</p>
            <p className="text-gray-600">Time: {time}</p>
          </div>
        </div>
      </div>

      {/* Seat Selection Section */}
      <div className="border-b py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Info className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-bold">SEAT SELECTION</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={handleEditSeats}>
            <Edit2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">Selected Seats:</p>
            <p className="text-lg">{seats.join(", ")}</p>
            <p className="text-sm text-gray-500 mt-2">
              Standard Seating • {seats.length} seat
              {seats.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">ORDER SUMMARY</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Tickets ({seats.length})</span>
            <span>${(seats.length * 10).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Booking Fee</span>
            <span>$2.00</span>
          </div>
          <div className="border-t pt-2 mt-4">
            <div className="flex justify-between font-bold">
              <span>Total Amount</span>
              <span>${(seats.length * 10 + 2).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <div className="mt-8 flex justify-end">
        <Button
          size="lg"
          className="w-full md:w-auto"
          onClick={() => alert("Proceeding to payment...")}
        >
          Continue to Payment
        </Button>
      </div>
    </div>
  );
}
