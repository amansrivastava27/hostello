import Image from "next/image";
import React from "react";

export default function VerifiedHostels() {
    const hostels = [
        { name: "Sunrise Hostel", city: "Delhi", rating: 4.5 },
        { name: "GreenStay Hostel", city: "Bangalore", rating: 4.8 },
        { name: "BlueSky Hostel", city: "Mumbai", rating: 4.7 },
    ];

    return (
        <section id="hostels" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Text + Cards */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Our Verified Hostels
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Every hostel listed on <span className="font-semibold text-blue-600">Hostello</span> is verified by our team for safety, comfort, and cleanliness.
                    </p>

                    <div className="space-y-4">
                        {hostels.map((h, i) => (
                            <div
                                key={i}
                                className="p-4 bg-white rounded-xl shadow hover:shadow-md transition"
                            >
                                <h3 className="text-lg font-semibold text-gray-800">{h.name}</h3>
                                <p className="text-sm text-gray-500">{h.city}</p>
                                <p className="text-yellow-500 font-medium">⭐ {h.rating}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Image */}
                <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/hostels/hostel6.jpg"
                        alt="Verified Hostels"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
