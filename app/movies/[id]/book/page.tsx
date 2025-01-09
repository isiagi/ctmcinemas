"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface Seat {
  id: string;
  row: string;
  number: number;
  status: "available" | "booked" | "selected";
  price: number;
}

// This would typically come from an API
const generateSeats = (selectedSeats: string[]): Seat[] => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const seatsPerRow = 10;
  return rows.flatMap((row) =>
    Array.from({ length: seatsPerRow }, (_, i) => {
      const seatId = `${row}${i + 1}`;
      let status: "available" | "booked" | "selected" = "available";
      if (selectedSeats.includes(seatId)) {
        status = "selected";
      } else if (Math.random() > 0.8) {
        // 20% chance of being booked
        status = "booked";
      }
      return {
        id: seatId,
        row,
        number: i + 1,
        status,
        price: 10.0, // Fixed price for simplicity
      };
    })
  );
};

export default async function BookPage() {
  const { userId } = auth();

  if (!userId) {
    redirect(
      "/sign-in?redirectUrl=" + encodeURIComponent(window.location.href)
    );
  }
  const searchParams = useSearchParams();
  const router = useRouter();
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const movieId = searchParams.get("id");
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const initialSelectedSeats = searchParams.get("seats")?.split(",") || [];

  useEffect(() => {
    const generatedSeats = generateSeats(initialSelectedSeats);
    setSeats(generatedSeats);
    setSelectedSeats(initialSelectedSeats);
  }, []);

  const toggleSeat = (seatId: string) => {
    const seat = seats.find((s) => s.id === seatId);
    if (seat && seat.status !== "booked") {
      const updatedSeats = seats.map((s) =>
        s.id === seatId
          ? { ...s, status: s.status === "selected" ? "available" : "selected" }
          : s
      );
      setSeats(updatedSeats);
      setSelectedSeats((prev) =>
        prev.includes(seatId)
          ? prev.filter((id) => id !== seatId)
          : [...prev, seatId]
      );
    }
  };

  const handleReserve = () => {
    const selectedSeatsParam = selectedSeats.join(",");
    router.push(
      `/movies/${movieId}/summary?date=${date}&time=${time}&seats=${selectedSeatsParam}`
    );
  };

  const totalPrice = selectedSeats.length * 10.0; // Assuming $10 per seat

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Select Your Seats</h1>
      <p className="mb-4">
        Movie: {movieId}, Date: {date}, Time: {time}
      </p>

      <div className="mb-8">
        <div className="w-full h-8 bg-gray-300 rounded-t-lg mb-4 text-center text-sm leading-8">
          Screen
        </div>
        <div className="grid grid-cols-10 gap-2">
          {seats.map((seat) => (
            <button
              key={seat.id}
              className={`w-8 h-8 rounded-md text-sm font-bold ${
                seat.status === "booked"
                  ? "bg-gray-300 cursor-not-allowed"
                  : seat.status === "selected"
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              onClick={() => toggleSeat(seat.id)}
              disabled={seat.status === "booked"}
            >
              {seat.row}
              {seat.number}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div>
          <p>Selected Seats: {selectedSeats.join(", ")}</p>
          <p className="font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
        <Button
          onClick={handleReserve}
          disabled={selectedSeats.length === 0}
          className="mt-4 sm:mt-0"
        >
          Reserve Seat{selectedSeats.length > 1 ? "s" : ""}
        </Button>
      </div>

      <div className="flex justify-center space-x-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded-sm mr-2"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 rounded-sm mr-2"></div>
          <span>Selected</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-300 rounded-sm mr-2"></div>
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
}
