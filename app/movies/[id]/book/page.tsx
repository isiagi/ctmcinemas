"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axiosInstance from "@/lib/axios";

interface Seat {
  id: string;
  row: string;
  number: number;
  isAvailable: boolean;
  price: number;
}

const generateSeats = (basePrice: number = 10.0) => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const seats: any = [];

  rows.forEach((row, rowIndex) => {
    if (rowIndex === 0) {
      for (let pair = 0; pair < 5; pair++) {
        for (let seatInPair = 0; seatInPair < 2; seatInPair++) {
          const seatNumber = pair * 2 + seatInPair + 1;
          seats.push({
            id: `${row}${seatNumber}`,
            row,
            number: seatNumber,
            isAvailable: true,
            price: basePrice,
          });
        }
      }
    } else if (rowIndex < 8) {
      for (let seatNumber = 1; seatNumber <= 7; seatNumber++) {
        seats.push({
          id: `${row}${seatNumber}`,
          row,
          number: seatNumber,
          isAvailable: true,
          price: basePrice,
        });
      }
    } else {
      for (let seatNumber = 1; seatNumber <= 7; seatNumber++) {
        seats.push({
          id: `${row}${seatNumber}`,
          row,
          number: seatNumber,
          isAvailable: true,
          price: basePrice,
        });
      }
    }
  });

  return seats;
};

export default function BookPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();
  const [seats, setSeats] = useState(generateSeats());
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [takenSeats, setTakenSeats] = useState<string[]>([]);
  const [loadingSeats, setLoadingSeats] = useState(true);

  const movieId = params.id as string;
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const editSeats = searchParams.get("seats");

  const toggleSeat = (seatId: string) => {
    const seat = seats.find((s: any) => s.id === seatId);
    if (seat && seat.isAvailable && !takenSeats.includes(seatId)) {
      setSelectedSeats((prev) =>
        prev.includes(seatId)
          ? prev.filter((id) => id !== seatId)
          : [...prev, seatId]
      );
    }
  };

  useEffect(() => {
    const fetchMovieShowtimes = async () => {
      try {
        const response = await axiosInstance.get(
          `showings/showings/movie/${movieId}/`
        );

        console.log(response.data, "response.data");

        const basePrice = response.data[0].price
          ? Number.parseFloat(response.data[0].price)
          : 10.0;
        const generatedSeats = generateSeats(basePrice);
        setSeats(generatedSeats);
      } catch (error) {
        console.log(error);
        setSeats(generateSeats());
      }
    };

    const movie_orders = () => {
      const show_id = localStorage.getItem("show_id");
      axiosInstance
        .get(`orders/orders/booked-seats/${show_id}`)
        .then((response) => {
          setLoadingSeats(false);
          setTakenSeats(response.data.booked_seats);
        })
        .catch(() => {
          setLoadingSeats(false);
          setTakenSeats([]);
        });
    };

    fetchMovieShowtimes();
    movie_orders();

    if (editSeats) {
      setSelectedSeats(editSeats.split(","));
    }
  }, [movieId, time, editSeats]);

  const handleReserve = () => {
    const selectedSeatsParam = selectedSeats.join(",");
    router.push(
      `/movies/${movieId}/eats?date=${date}&time=${time}&seats=${selectedSeatsParam}`
    );
  };

  const totalPrice = selectedSeats.reduce((total, seatId) => {
    const seat = seats.find((s: any) => s.id === seatId);
    return total + (seat?.price || 0);
  }, 0);

  const seatsByRow = seats.reduce((acc: any, seat: any) => {
    if (!acc[seat.row]) {
      acc[seat.row] = [];
    }
    acc[seat.row].push(seat);
    return acc;
  }, {} as Record<string, Seat[]>);

  if (loadingSeats) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Select Your Seats</h1>
      <p className="mb-4">
        Movie: {movieId}, Date: {date}, Time: {time}
      </p>

      <div className="mb-8 overflow-x-auto">
        <div className="w-full h-8 bg-gray-300 rounded-t-lg mb-12 text-center text-sm leading-8">
          Screen
        </div>

        <div className="space-y-4 min-w-max">
          {Object.entries(seatsByRow).map(([row, rowSeats]: any): any => (
            <div key={row} className="flex items-center">
              <div className="w-8 text-center font-bold">{row}</div>

              <div
                className={cn(
                  "flex",
                  row === "A" ? "justify-center" : "justify-start"
                )}
              >
                <div className="flex gap-2">
                  {rowSeats.map((seat: any, index: any) => {
                    const isEndOfPair =
                      (row === "A" &&
                        (index + 1) % 2 === 0 &&
                        index < rowSeats.length - 1) ||
                      (row !== "A" && (index + 1) % 2 === 0 && index < 6);

                    if (["I", "J"].includes(row) && seat.number === 4) {
                      return (
                        <div
                          key={seat.id}
                          className={cn("inline-flex", isEndOfPair && "mr-4")}
                        >
                          <div key={seat.id} className="w-8 h-8 rounded-t-lg" />
                        </div>
                      );
                    }

                    return (
                      <div
                        key={seat.id}
                        className={cn("inline-flex", isEndOfPair && "mr-4")}
                      >
                        <SeatButton
                          seat={seat}
                          isSelected={selectedSeats.includes(seat.id)}
                          isBooked={takenSeats.includes(seat.id)}
                          onToggle={toggleSeat}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div>
          <p>Selected Seats: {selectedSeats.join(", ")}</p>
          <p className="font-bold">Total Price: {totalPrice.toFixed(2)} UGX</p>
        </div>
        <Button
          onClick={handleReserve}
          disabled={selectedSeats.length === 0}
          className="mt-4 sm:mt-0"
        >
          Reserve Seat{selectedSeats.length > 1 ? "s" : ""}
        </Button>
      </div>

      <div className="flex justify-center space-x-8">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded-t-sm mr-2"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 rounded-t-sm mr-2"></div>
          <span>Selected</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-300 rounded-t-sm mr-2"></div>
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
}

interface SeatButtonProps {
  seat: Seat;
  isSelected: boolean;
  isBooked: boolean;
  onToggle: (seatId: string) => void;
}

function SeatButton({ seat, isSelected, onToggle, isBooked }: SeatButtonProps) {
  return (
    <button
      className={cn(
        "w-8 h-8 rounded-t-lg text-sm font-bold transition-colors",
        !seat.isAvailable && "bg-gray-300 cursor-not-allowed",
        seat.isAvailable && isSelected && "bg-green-500 text-white",
        seat.isAvailable &&
          !isSelected &&
          "bg-blue-500 text-white hover:bg-blue-600",
        isBooked && "bg-gray-300 cursor-not-allowed hover:bg-gray-300"
      )}
      onClick={() => onToggle(seat.id)}
      disabled={!seat.isAvailable || isBooked}
    >
      {seat.number}
    </button>
  );
}
