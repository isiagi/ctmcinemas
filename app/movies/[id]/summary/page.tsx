/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Edit2, Film, Calendar, Clock, Info, Utensils } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import PopupMessage from "@/components/popup";
import axiosInstance from "@/lib/axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface EatsItem {
  id: string;
  name: string;
  price: number;
}

interface PaymentResponse {
  status: string;
  transaction_id?: string;
  error?: string;
  phoneNumber?: string;
  provider?: string;
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onPaymentComplete: (response: PaymentResponse) => void;
}

const eatsItems: EatsItem[] = [
  { id: "popcorn", name: "Popcorn", price: 5000 },
  { id: "soda", name: "Soda", price: 3000 },
  { id: "nachos", name: "Nachos", price: 7000 },
  { id: "hotdog", name: "Hot Dog", price: 6000 },
];

export default function BookingSummaryPage() {
  const [popupMessage, setPopupMessage] = useState("");
  const [loader, setLoader] = useState(true);
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();
  const [movieDetails, setMovieDetails] = useState<any>({});
  const [selectedEats, setSelectedEats] = useState<Record<string, number>>({});
  const [color, setColor] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>({});
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const access_token = localStorage.getItem("access_token");
  const seats = searchParams.get("seats")?.split(",") || [];
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const movieId = params.id;
  const eats = searchParams.get("eats");

  const handlePayment = async () => {
    try {
      if (!user || !user.is_active) {
        setColor("error");
        setPopupMessage("You need to sign in to make your payment.");
        return;
      }

      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        setColor("error");
        setPopupMessage("You are not authenticated. Please sign in again.");
        return;
      }

      setShowPaymentModal(true);
    } catch (error: any) {
      console.log(error);

      setLoading(false);
      setColor("error");
      setPopupMessage("An error occurred. Please try again.");
    }
  };

  const handlePaymentComplete = async (paymentResponse: PaymentResponse) => {
    try {
      setLoading(true);

      const payload = {
        total_price: calculateTotal(),
        eats: eats,
        seats: seats,
        showing: movieDetails.showId,
        payment: {
          phone_number: paymentResponse.phoneNumber,
          provider: paymentResponse.provider?.toUpperCase(), // Ensure provider is uppercase for backend
        },
      };

      console.log("Sending payload:", payload);

      const response = await axiosInstance.post("orders/orders/", payload, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Response:", response.data);

      // Handle redirect URL from Flutterwave
      if (response.data?.payment?.instructions?.redirect) {
        // Open the redirect URL in a new window/tab
        window.open(response.data.payment.instructions.redirect, "_blank");

        // Start polling for payment verification
        if (response.data.order && response.data.order.id) {
          setColor("success");
          setPopupMessage(
            "Please complete the payment in the new window and wait for confirmation."
          );
          startPaymentVerification(response.data.order.id);
        }
      } else {
        throw new Error("No payment redirect URL received");
      }
    } catch (error: any) {
      console.error("Order creation error:", error);
      setColor("error");
      setPopupMessage(
        error.response?.data?.error ||
          "Payment initiation failed. Please try again."
      );
    } finally {
      setLoading(false);
      setShowPaymentModal(false);
    }
  };

  const startPaymentVerification = async (orderId: string) => {
    let attempts = 0;
    const maxAttempts = 20; // Increased attempts due to manual verification
    const interval = setInterval(async () => {
      try {
        const response = await axiosInstance.post(
          `orders/orders/${orderId}/verify_order_payment/`,
          {},
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        if (response.data.status === "Payment verified") {
          clearInterval(interval);
          setColor("success");
          setPopupMessage("Payment successful! Redirecting to orders...");
          setTimeout(() => router.push("/orders"), 2000);
        }
      } catch (error: any) {
        console.error("Payment verification error:", error);
        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(interval);
          setColor("error");
          setPopupMessage(
            "Payment verification timed out. Please check your order status in the orders page."
          );
          setTimeout(() => router.push("/orders"), 3000);
        }
      }
    }, 5000);
  };

  const getMovieDetails = async () => {
    try {
      const date = searchParams.get("date");
      const time = searchParams.get("time");

      const showResponse = await axiosInstance.get(
        `showings/showings/movie/${movieId}/`
      );
      const showData = showResponse.data;

      const movieResponse = await axiosInstance.get(
        `movies/movies/${movieId}/`
      );
      const movieData = movieResponse.data;

      const filteredShow = showData.find(
        (show: any) => show.date === date && show.time === time
      );

      const showDetails = filteredShow
        ? { ...filteredShow, showId: filteredShow.id }
        : {};

      delete showDetails.id;

      const combinedDetails = {
        ...movieData,
        ...showDetails,
      };

      setLoader(false);
      setMovieDetails(combinedDetails);
    } catch (err) {
      setMovieDetails({});
      console.error("Error fetching movie/showtime details:", err);
    }
  };

  const getUserProfile = () => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://cinema-vmbf.onrender.com/auth/profile/",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setUser({});
        console.log(error.response.data);
      });
  };

  // get movie details
  useEffect(() => {
    getMovieDetails();
    getUserProfile();
  }, [movieId]);

  useEffect(() => {
    if (eats) {
      const eatsObject = eats.split(",").reduce((acc, item) => {
        const [id, quantity] = item.split(":");
        acc[id] = Number.parseInt(quantity);
        return acc;
      }, {} as Record<string, number>);
      setSelectedEats(eatsObject);
    }
  }, [eats]);

  const handleEditSeats = () => {
    router.push(
      `/movies/${movieId}/book?date=${date}&time=${time}&seats=${seats.join(
        ","
      )}&editSeats=true`
    );
  };

  const handleEditEats = () => {
    router.push(
      `/movies/${movieId}/eats?date=${date}&time=${time}&seats=${seats.join(
        ","
      )}`
    );
  };

  const calculateTotal = () => {
    const seatsTotal = seats.length * movieDetails.price;
    const eatsTotal = Object.entries(selectedEats).reduce(
      (total, [itemId, quantity]) => {
        const item = eatsItems.find((i) => i.id === itemId);
        return total + (item?.price || 0) * quantity;
      },
      0
    );
    return seatsTotal + eatsTotal;
  };

  // const handlePaymentz = async () => {
  //   try {
  //     if (!user || !user.is_active) {
  //       setColor("success");
  //       setPopupMessage("You need to sign in to make your payment.");
  //       return;
  //     }

  //     const accessToken = localStorage.getItem("access_token");
  //     if (!accessToken) {
  //       setColor("error");
  //       setPopupMessage("You are not authenticated. Please sign in again.");
  //       return;
  //     }

  //     const payload = {
  //       user: user.id,
  //       total_price: calculateTotal(),
  //       eats,
  //       seats,
  //       showing: movieDetails.showId,
  //     };

  //     await axiosInstance.post("orders/orders/", payload, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     });

  //     setColor("success");
  //     setLoading(false);
  //     setPopupMessage("Order placed successfully!");
  //     router.push("/orders");
  //   } catch (error: any) {
  //     setLoading(false);
  //     console.error(
  //       "Error creating order:",
  //       error.response?.data || error.message
  //     );
  //     setColor("error");
  //     setPopupMessage("An error occurred. Please try again.");
  //     // alert(error.response?.data?.message || "An error occurred. Please try again.");
  //   }
  // };

  if (loader) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

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
              src={movieDetails.image || "/placeholder.svg"}
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
            <p className="text-gray-600">Highlight: {movieDetails.highlight}</p>
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

      {/* Eats Selection Section */}
      <div className="border-b py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Utensils className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-bold">EATS SELECTION</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={handleEditEats}>
            <Edit2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            {Object.entries(selectedEats).map(([itemId, quantity]) => {
              const item = eatsItems.find((i) => i.id === itemId);
              if (item && quantity > 0) {
                return (
                  <div
                    key={itemId}
                    className="flex justify-between items-center mb-2"
                  >
                    <span>
                      {item.name} x {quantity}
                    </span>
                    <span>{(item.price * quantity).toLocaleString()} UGX</span>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">ORDER SUMMARY</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Tickets ({seats.length})</span>
            <span>
              {(seats.length * movieDetails.price).toLocaleString()} UGX
            </span>
          </div>
          <div className="flex justify-between">
            <span>{movieDetails.includes_3d_glasses ? "3D Glasses" : ""}</span>
            <span>Included</span>
          </div>
          {Object.entries(selectedEats).map(([itemId, quantity]) => {
            const item = eatsItems.find((i) => i.id === itemId);
            if (item && quantity > 0) {
              return (
                <div key={itemId} className="flex justify-between">
                  <span>
                    {item.name} ({quantity})
                  </span>
                  <span>{(item.price * quantity).toLocaleString()} UGX</span>
                </div>
              );
            }
            return null;
          })}
          <div className="border-t pt-2 mt-4">
            <div className="flex justify-between font-bold">
              <span>Total Amount</span>
              <span>{calculateTotal().toLocaleString()} UGX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      {popupMessage && (
        <PopupMessage
          color={color}
          message={popupMessage}
          onClose={() => setPopupMessage("")}
        />
      )}
      <div className="mt-8 flex justify-end">
        <Button
          size="lg"
          className="w-full md:w-auto"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? "Processing....." : "Proceed to Payment"}
        </Button>
      </div>
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={calculateTotal()}
        onPaymentComplete={handlePaymentComplete}
      />
    </div>
  );
}

const PaymentModal = ({
  isOpen,
  onClose,
  amount,
  onPaymentComplete,
}: PaymentModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [provider, setProvider] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      onPaymentComplete({
        status: "success",
        phoneNumber,
        provider,
      });
    } catch (error: any) {
      console.log(error);

      onPaymentComplete({
        status: "error",
        error: "Payment failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mobile Money Payment</DialogTitle>
        </DialogHeader>
        <form onSubmit={handlePayment} className="space-y-4">
          <div className="space-y-2">
            <Select onValueChange={setProvider} value={provider}>
              <SelectTrigger id="provider">
                <SelectValue placeholder="Select provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MTN">MTN Mobile Money</SelectItem>
                <SelectItem value="AIRTEL">Airtel Money</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center">
            <span>Amount to Pay:</span>
            <span className="font-bold">{amount.toLocaleString()} UGX</span>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Processing..." : "Pay Now"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
