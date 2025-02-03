"use client";

import axiosInstance from "@/lib/axios";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Order {
  id: string;
  showing_details: {
    movie: string;
    date: string;
    time: string;
  };
  seats: string[];
  eats: string;
  total_price: number;
  created_at: string;
}

export default function OrdersPage() {
  const [auth, setAuth] = useState<string>("")
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const date_format = new Date();
  const today = `${date_format.getFullYear()}-${date_format.getMonth() - 1}-${date_format.getDate()}`

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      setError("User is not authenticated.");
      setLoading(false);
      return;
    }
    setAuth(access_token)

    const getUserProfile = async () => {
      try {
        const response = await axiosInstance.get("/auth/profile/", {
          headers: { Authorization: `Bearer ${access_token}` },
        });
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getUserProfile();
  }, []);

  useEffect(() => {
    if (!user) return;

    const getUserOrders = async () => {
      try {
        const response = await axiosInstance.get(`/orders/orders/user-orders/${user.id}`, { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${auth}` } });
        setOrders(response.data);
      } catch (error) {
        // console.error("Error fetching orders:", error);
        setOrders([]);
      }
    };

    getUserOrders();
  }, [user]);

  const handleDelete = async (orderId: string) => {
    try {
      const permissionCheck = await axiosInstance.get(`/orders/orders/${orderId}/can-delete/`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${auth}`
        }
      });

      if (!permissionCheck.data.can_delete) {
        alert("You are not allowed to delete this order.");
        return;
      }

      // Confirm deletion 
      if (!window.confirm("Are you sure you want to delete this order?")) return;

      // Proceed with delete request
      await axiosInstance.delete(`/orders/orders/${orderId}/`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${auth}`
        }
      });

      // Remove order from state
      setOrders(orders.filter((order) => order.id !== orderId));

      alert("Order deleted successfully!");
    } catch (error) {
      // console.error("Error deleting order:", error);
      alert("Failed to delete the order. Please try again.");
    }
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">{error}</h1>
        <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Log In
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>

      {orders.length === 0 ? (
        <p>You haven&apos;t made any orders yet.</p>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold mb-4">
                  {order.showing_details.movie}
                </h2>
                <div className="flex gap-2">
                  {order.showing_details.date === today ?
                    <span className="text-green-700 font-bold">Showing Today</span>
                    : order.showing_details.date < today ?
                      <span className="text-red-700 font-bold">Out of cinema</span>
                      :
                      <span className="text-yellow-700 font-bold">Coming Soon</span>
                  }
                  <Trash2 className="text-red-600 text-sm cursor-pointer" onClick={() => handleDelete(order.id)} />
                </div>
              </div>
              <p>Date: {order.showing_details.date}</p>
              <p>Time: {order.showing_details.time} hrs</p>
              <p>Seats: {order.seats.join(", ")}</p>
              <p>
                Eats:{" "}
                {order.eats.split(",")
                  .map((item) => `${item.split(':')[0].toUpperCase()} ${item.split(":")[1]}`)
                  .join(", ")}
              </p>
              <p className="font-bold my-2">
                Total Price: {order.total_price.toLocaleString()} UGX
              </p>
              <span className="text-gray-400">Ordered on: {order.created_at.slice(0, 10)}, {order.created_at.slice(11, 19)} {order.created_at.slice(11, 19).slice(0, 2) === '00' || order.created_at.slice(11, 19).slice(0, 2) > '12' ? 'PM' : 'AM'}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
