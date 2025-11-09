"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useSearchParams } from "next/navigation";
import { db } from "@/app/lib/firebaseConfig";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export default function HostelBookingForm() {
  const searchParams = useSearchParams();
  const selectedHostel = searchParams.get("hostelName") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    hostelName: selectedHostel,
    roomType: "",
    checkIn: "",
    checkOut: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; msg: string }>({
    type: "",
    msg: "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, hostelName: selectedHostel }));
  }, [selectedHostel]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      const emailQuery = query(collection(db, "bookings"), where("email", "==", formData.email));
      const phoneQuery = query(collection(db, "bookings"), where("phone", "==", formData.phone));

      const emailSnap = await getDocs(emailQuery);
      const phoneSnap = await getDocs(phoneQuery);

      if (!emailSnap.empty) {
        setStatus({ type: "error", msg: "Email already used for a booking!" });
        setLoading(false);
        return;
      }

      if (!phoneSnap.empty) {
        setStatus({ type: "error", msg: "Phone number already registered!" });
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "bookings"), {
        ...formData,
        createdAt: new Date(),
      });

      setStatus({ type: "success", msg: "✅ Booking successful!" });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        hostelName: selectedHostel,
        roomType: "",
        checkIn: "",
        checkOut: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting booking:", err);
      setStatus({ type: "error", msg: "Something went wrong. Please try again!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4 text-gray-800">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
            Hostel Room Booking Form 🏠
          </h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Hostel Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Hostel Name</label>
              <input
                type="text"
                name="hostelName"
                value={formData.hostelName}
                disabled
                className="border p-3 rounded-md w-full bg-gray-100 cursor-not-allowed text-gray-600"
              />
            </div>

            {/* Room Type */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Room Type</label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
                className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Room Type</option>
                <option value="Single">Single</option>
                <option value="Double">Double Sharing</option>
                <option value="Triple">Triple Sharing</option>
              </select>
            </div>

            {/* Check-in/out */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Check-In Date</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Check-Out Date</label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Additional Requests</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`py-3 rounded-md font-semibold text-white md:col-span-2 transition ${
                loading
                  ? "bg-gray-400"
                  : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
              }`}
            >
              {loading ? "Processing..." : "Book Now"}
            </button>
          </form>

          {status.msg && (
            <p
              className={`text-center mt-5 font-medium ${
                status.type === "success" ? "text-green-600" : "text-red-500"
              }`}
            >
              {status.msg}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
