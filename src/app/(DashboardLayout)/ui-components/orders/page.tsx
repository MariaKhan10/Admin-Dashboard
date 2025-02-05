"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Trash2, Loader2 } from "lucide-react";
import Swal from "sweetalert2";

interface Order {
  _id: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  cartItems: { name: string; price: number; quantity: number }[];
  paymentMethod: string;
  totalAmount: number;
  status: string;
}

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const data = await client.fetch(`*[_type == "order"]`);
      setOrders(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      await client.patch(orderId).set({ status: newStatus }).commit();
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const deleteOrder = async (orderId: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });
  
    if (result.isConfirmed) {
      try {
        await client.delete(orderId);
        setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
        Swal.fire("Deleted!", "The order has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting order:", error);
        Swal.fire("Error!", "There was an issue deleting the order.", "error");
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">📦 Order Management</h2>

      {loading ? (
        <div className="flex justify-center">
          <Loader2 className="animate-spin text-gray-500 w-8 h-8" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.length === 0 ? (
            <p className="text-center text-gray-500">No orders available.</p>
          ) : (
            orders.map((order) => (
              <div key={order._id} className="p-6 bg-white shadow-lg rounded-lg border hover:shadow-2xl transition duration-300 relative">
                <button
                  onClick={() => deleteOrder(order._id)}
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition"
                  title="Delete Order"
                >
                  <Trash2 className="w-5 h-5" />
                </button>

                <h3 className="text-lg font-bold text-gray-800">{order.customerName}</h3>
                <p className="text-sm text-gray-600">📧 {order.email}</p>
                <p className="text-sm text-gray-600">📞 {order.phone}</p>
                <p className="text-sm text-gray-600">🏠 {order.address}</p>
                <p className="text-sm text-gray-700 font-semibold">💳 {order.paymentMethod}</p>
                <p className="text-md font-bold text-gray-900">💰 {order.totalAmount} PKR</p>

                <div className="mt-4">
                  <label className="text-sm font-semibold text-gray-700">Order Status:</label>
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                    className="ml-2 p-2 border rounded-md bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
