"use client";

import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";
export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 text-gray-800 pt-16 pb-20">
        {/* Hero Section */}
        <section className="text-center px-6 py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Hostelle</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Simplifying Hostel Discovery & Booking — built for students, travelers, and working professionals.
          </p>
        </section>

        {/* Story Section */}
        <section className="max-w-6xl mx-auto px-6 mt-14">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">The Story Behind Hostelle</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hostelle, a blend of <strong>“Hostel + Lelo”</strong>, was born from a simple yet powerful idea — to make hostel discovery and booking seamless, transparent, and trustworthy.
            The platform was envisioned to help students, professionals, and travelers easily find verified hostels that match their needs without middlemen or scams.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The journey started when our founder noticed how difficult it was for newcomers in metro cities to find authentic, safe, and affordable hostels. From this pain point,
            Hostelle grew into a smart, digital-first platform that uses technology and verification to make accommodation hassle-free.
          </p>
        </section>

        {/* Founder Section */}
        <section className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Meet the Founder</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Aman Srivastava</strong> — the visionary behind Hostelle, is a developer, designer, and problem solver passionate about building tools that make life easier.
              With a background in software development and cloud computing, Rahul combined technical expertise and real-world empathy to build a system that redefines hostel booking.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Under his leadership, Hostelle evolved from a small prototype to a reliable ecosystem trusted by students and property owners alike.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/aman.png"
              alt="Founder"
              width={320}
              height={320}
              className="rounded-2xl shadow-lg w-80 h-80 object-cover border-4 border-blue-600"
            />
          </div>
        </section>

        {/* Idea & Inspiration Section */}
        <section className="max-w-6xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Behind the Idea</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            The idea of Hostelle emerged during university days, when students constantly faced challenges finding affordable accommodation in new cities.
            Lack of trusted listings, outdated photos, and unclear rent structures made the process stressful.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Hostelle aims to bridge that gap by combining verified listings, transparent reviews, and modern web technology — empowering users to make informed decisions instantly.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With Hostelle, every hostel owner can reach the right audience, and every seeker can find a verified place to stay — safely and confidently.
          </p>
        </section>

        {/* Sponsors & Partners Section */}
        <section className="max-w-6xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Sponsors & Partners</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We’re grateful for the trust and support from organizations and tech communities that helped shape Hostelle’s mission.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="bg-white shadow-md rounded-xl flex items-center justify-center p-6">
             <Image  src="/google.webp" width={200} height={150} alt="Google" className="h-10 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-xl flex items-center justify-center p-6">
             <Image  src="/microsoft.png" width={200} height={150} alt="Microsoft" className="h-10 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-xl flex items-center justify-center p-6">
             <Image  src="/aws.png" width={200} height={150} alt="AWS" className="h-10 object-contain" />
            </div>
            <div className="bg-white shadow-md rounded-xl flex items-center justify-center p-6">
             <Image  src="/lenovo.svg" width={200} height={150} alt="Lenovo" className="h-10 object-contain" />
            </div>
          </div>
        </section>

        {/* Mission & External Factors */}
        <section className="max-w-6xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Mission, Values & External Factors</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Hostelle, our mission is to make accommodation simpler and smarter — enabling every individual to find a place that feels like home.
            We value transparency, user trust, and safety above all.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are deeply influenced by real-world challenges — such as urban migration, student mobility, and the digital transformation of real estate.
            These external factors shaped Hostelle’s roadmap to focus not just on bookings, but on verified, reliable experiences.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In the future, Hostelle plans to integrate AI-based room matching, smart contracts for secure payments, and verified IoT integration for hostel owners.
          </p>
        </section>

        {/* Closing Section */}
        <section className="max-w-4xl mx-auto px-6 mt-20 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Hostelle envisions a future where finding the right accommodation is as simple as booking a movie ticket — fast, safe, and transparent.
            Whether you’re a student looking for a new start or a traveler exploring the unknown, Hostelle ensures your stay feels like home.
          </p>
          <p className="text-blue-600 font-semibold">#StaySmartWithHostelle</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
