"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const hostels = [
    {
        id: 1,
        name: "Blue Horizon Hostel",
        address: "12 MG Road, Bangalore, India",
        price: 1200,
        roomType: "Shared (4 beds)",
        rating: 4.5,
        image: "/hostels/hostel1.jpg",
        description:
            "A cozy and modern hostel near MG Road with high-speed WiFi, laundry, and cafeteria facilities. Perfect for students and working professionals.",
    },
    {
        id: 2,
        name: "Green Stay PG",
        address: "45 Sector 21, Gurugram, India",
        price: 1500,
        roomType: "Private Room",
        rating: 4.2,
        image: "/hostels/hostel2.jpg",
        description:
            "Spacious rooms with attached washrooms, air conditioning, and daily housekeeping. Located close to corporate offices.",
    },
    {
        id: 3,
        name: "Urban Nest Hostel",
        address: "Near City Center, Delhi, India",
        price: 1800,
        roomType: "AC Shared (3 beds)",
        rating: 4.8,
        image: "/hostels/hostel3.jpg",
        description:
            "A vibrant hostel in the heart of Delhi offering AC rooms, common lounge, and 24/7 security. Ideal for travelers and students.",
    },
    {
        id: 4,
        name: "Comfort PG & Hostel",
        address: "Opp. Tech Park, Pune, India",
        price: 1100,
        roomType: "Non-AC Shared (4 beds)",
        rating: 4.1,
        image: "/hostels/hostel4.jpg",
        description:
            "Affordable accommodation with essential amenities, located near major tech parks. Great for interns and entry-level professionals.",
    },
    {
        id: 5,
        name: "Cozy Haven Hostel",
        address: "Main Street, Hyderabad, India",
        price: 1350,
        roomType: "Private AC Room",
        rating: 4.6,
        image: "/hostels/hostel5.jpg",
        description:
            "Comfortable private rooms with AC, WiFi, and a communal kitchen. Situated in a lively neighborhood with easy access to public transport.",
    },
    {
        id: 6,
        name: "Elite Living Hostel",
        address: "Near University Road, Chennai, India",
        price: 1000,
        roomType: "Shared (6 beds)",
        rating: 4.0,
        image: "/hostels/hostel7.jpg",
        description:
            "Budget-friendly shared accommodation with all basic facilities. Close to universities and educational institutions.",
    },
];

export default function HostelDetails() {
    const { id } = useParams();
    const router = useRouter();
    const hostel = hostels.find((h) => h.id === Number(id));

    if (!hostel)
        return (
            <div className="text-center text-red-600 font-semibold mt-20">
                Hostel not found.
            </div>
        );

    return (
        <>
            <Navbar />

            {/* Hero Section with Blurred Background */}
            <main
                className="relative min-h-screen flex items-center justify-center py-24 px-6"
                style={{
                    backgroundImage: `url(${hostel.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* White blur overlay */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg"></div>

                {/* Main content */}
                <div className="relative z-10 max-w-6xl w-full">
                    <div className="flex flex-col md:flex-row gap-10 bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl p-6 border border-white/40">
                        <div className="relative w-full md:w-1/2 h-80 rounded-lg overflow-hidden shadow-md">
                            <Image
                                src={hostel.image}
                                alt={hostel.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex-1 space-y-4">
                            <h1 className="text-3xl font-bold text-blue-700">
                                {hostel.name}
                            </h1>
                            <p className="text-gray-700">{hostel.address}</p>

                            <p className="text-gray-800">{hostel.description}</p>

                            <p className="text-lg font-medium text-gray-800">
                                Room Type:{" "}
                                <span className="text-gray-600">{hostel.roomType}</span>
                            </p>

                            <div className="flex items-center justify-between mt-4">
                                <p className="text-2xl font-bold text-green-700">
                                    ₹{hostel.price}/month
                                </p>
                                <p className="text-yellow-500 font-semibold text-lg">
                                    ⭐ {hostel.rating}
                                </p>
                            </div>

                            <button
                                onClick={() =>
                                    router.push(
                                        `/book-hostel?hostelName=${encodeURIComponent(
                                            hostel.name
                                        )}`
                                    )
                                }
                                className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
