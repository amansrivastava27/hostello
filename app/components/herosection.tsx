"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/hostels/hostel1.jpg",
    "/hostels/hostel2.jpg",
    "/hostels/hostel3.jpg",
    "/hostels/hostel4.jpg",
    "/hostels/hostel5.jpg",
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    // Auto-slide logic
    useEffect(() => {
        if (paused) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [paused]);

    // Manual controls
    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    return (
        <section
            className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Image Slides */}
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Hostel ${index + 1}`}
                        fill
                        
                        priority={index === 0}
                        className="object-contain md:object-cover   "
                    />
                </div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4 z-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Hostello</h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">
                    Find and book verified hostels easily — trusted by students & travelers.
                </p>
                <a
                    href="#hostels"
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-semibold transition"
                >
                    Explore Hostels
                </a>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-30"
            >
                <ChevronLeft size={28} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-30"
            >
                <ChevronRight size={28} />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                {images.map((_, index) => (
                    <div
                        key={index}
                        
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition ${index === current ? "bg-white" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
