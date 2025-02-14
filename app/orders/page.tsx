/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import Image from "next/image";

interface Order {
  id: string;
  user: string;
  showing: string;
  showing_details: {
    movie: string;
    date: string;
    time: string;
    poster_path?: string; // Add poster path to the interface
  };
  seats: string[];
  eats: string;
  movie_image: string;
  total_price: number;
  created_at: string;
  updated_at: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("access_token");

      if (!token) {
        setError("No authentication token found");
        setIsLoading(false);
        return;
      }

      const response = await axiosInstance.get<{ data: Order[] }>("orders/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrders(response.data || []);
      console.log(response.data);
    } catch (err) {
      setError("Failed to fetch orders");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteOrder = async (orderId: string) => {
    try {
      const token = localStorage.getItem("access_token");

      if (!token) {
        setError("No authentication token found");
        return;
      }

      await axiosInstance.delete(`orders/${orderId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchOrders();
    } catch (err) {
      console.error("Failed to delete order:", err);
    }
  };

  const parseEats = (eatsString: string) => {
    if (!eatsString) return [];
    return eatsString.split(",").map((item) => {
      const [name, quantity] = item.split(":");
      return { name, quantity: parseInt(quantity, 10) };
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "UGX",
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">
          {error === "No authentication token found"
            ? "Please log in to view your orders"
            : "Failed to load orders"}
        </h1>
        <Link href="/login">
          <Button>Log In</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-[#111827]">Your Orders</h1>
      {orders.length === 0 ? (
        <p>You haven&apos;t made any orders yet.</p>
      ) : (
        <div className="space-y-8">
          {orders.map((order: Order) => (
            <div
              key={order.id}
              className="bg-white shadow-md rounded-lg p-6 relative flex gap-6"
            >
              {/* Movie Poster */}
              <div className="flex-shrink-0 w-32 h-48 relative">
                {
                  <Image
                    src={order.movie_image}
                    alt={`${order.showing_details.movie} poster`}
                    fill
                    className="object-cover rounded-md"
                  />
                }
              </div>

              {/* Order Details */}
              <div className="flex-grow">
                <Button
                  variant="ghost"
                  className="absolute top-4 right-4 text-red-600 hover:text-red-800 hover:bg-red-100"
                  onClick={() => handleDeleteOrder(order.id)}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
                <h2 className="text-xl font-semibold mb-4">
                  {order.showing_details.movie}
                </h2>
                <p>
                  Date:{" "}
                  {new Date(order.showing_details.date).toLocaleDateString()}
                </p>
                <p>Time: {order.showing_details.time}</p>
                <p>Seats: {order.seats.join(", ")}</p>
                <p>
                  Eats:{" "}
                  {parseEats(order.eats)
                    .map((item) => `${item.name} (${item.quantity})`)
                    .join(", ")}
                </p>
                <p className="font-bold mt-2 text-[#111827]">
                  Total Price: {currencyFormatter.format(order.total_price)}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Ordered on: {new Date(order.created_at).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
