"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

interface Hostel {
    id: number;
    name: string;
    address: string;
    price: number;
    roomType: string;
    rating: number;
    image: string;
}

export default function HostelsPage() {
    const router = useRouter();

    const [hostels] = useState<Hostel[]>([
        {
            id: 1,
            name: "Blue Horizon Hostel",
            address: "12 MG Road, Bangalore, India",
            price: 1200,
            roomType: "Shared (4 beds)",
            rating: 4.5,
            image: "/hostels/hostel1.jpg",
        },
        {
            id: 2,
            name: "Green Stay PG",
            address: "45 Sector 21, Gurugram, India",
            price: 1500,
            roomType: "Private Room",
            rating: 4.2,
            image: "/hostels/hostel2.jpg",
        },
        {
            id: 3,
            name: "Urban Nest Hostel",
            address: "Near City Center, Delhi, India",
            price: 1800,
            roomType: "AC Shared (3 beds)",
            rating: 4.8,
            image: "/hostels/hostel3.jpg",
        },
        {
            id: 4,
            name: "Comfort PG & Hostel",
            address: "Opp. Tech Park, Pune, India",
            price: 1100,
            roomType: "Non-AC Shared (4 beds)",
            rating: 4.1,
            image: "/hostels/hostel4.jpg",
        },
        {
            id: 5,
            name: "Cozy Haven Hostel",
            address: "Main Street, Hyderabad, India",
            price: 1350,
            roomType: "Private AC Room",
            rating: 4.6,
            image: "/hostels/hostel5.jpg",
        },
        {
            id: 6,
            name: "Elite Living Hostel",
            address: "Near University Road, Chennai, India",
            price: 1000,
            roomType: "Shared (6 beds)",
            rating: 4.0,
            image: "/hostels/hostel7.jpg",
        },
    ]);

    // Function to navigate to booking page
    const handleBook = (hostelName: string) => {
        router.push(`/book-hostel?hostelName=${encodeURIComponent(hostelName)}`);
    };

    // Function to open the hero/details page
    const handleImageClick = (id: number) => {
        router.push(`/hostels/${id}`);
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50 pt-20 pb-10">
                <section className="max-w-7xl mx-auto px-6">
                    <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
                        Verified Hostels Near You 🏠
                    </h1>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {hostels.map((hostel) => (
                            <div
                                key={hostel.id}
                                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-transform hover:scale-[1.02]"
                            >
                                <div
                                    className="relative h-48 w-full cursor-pointer group"
                                    onClick={() => handleImageClick(hostel.id)}
                                >
                                    <Image
                                        src={hostel.image}
                                        alt={hostel.name}
                                        fill
                                        className="object-cover group-hover:opacity-90 transition"
                                    />
                                </div>

                                <div className="p-5">
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {hostel.name}
                                    </h2>
                                    <p className="text-gray-500 text-sm">{hostel.address}</p>

                                    <div className="flex justify-between items-center mt-3">
                                        <p className="text-blue-600 font-semibold">
                                            ₹{hostel.price}/month
                                        </p>
                                        <p className="text-yellow-500 font-medium">
                                            ⭐ {hostel.rating}
                                        </p>
                                    </div>

                                    <p className="mt-2 text-sm text-gray-600">
                                        Type: {hostel.roomType}
                                    </p>

                                    <button
                                        onClick={() => handleBook(hostel.name)}
                                        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
