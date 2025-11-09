"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import React, { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        setSuccess(false);

        // Simulate 3-second fake API process
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setEmail("");

            // Hide success message after 4s
            setTimeout(() => setSuccess(false), 4000);
        }, 3000);
    };

    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-10">
                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">Hostelle</h2>
                    <p className="text-gray-400 mb-4">
                        Your trusted platform to find and book verified hostels across India.
                        Comfort, safety, and convenience — all in one place.
                    </p>
                    <div className="flex space-x-4 mt-3">
                        <Link href="#" className="hover:text-blue-500"><Facebook size={20} /></Link>
                        <Link href="#" className="hover:text-blue-400"><Twitter size={20} /></Link>
                        <Link href="#" className="hover:text-pink-500"><Instagram size={20} /></Link>
                        <Link href="#" className="hover:text-blue-600"><Linkedin size={20} /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link href="/" className="hover:text-white">Home</Link></li>
                        <li><Link href="/hostels" className="hover:text-white">hostels</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        <li><Link href="/about" className="hover:text-white">About</Link></li>
                    </ul>
                </div>

                {/* Company Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link href="#" className="hover:text-white">About Us</Link></li>
                        <li><Link href="#" className="hover:text-white">Careers</Link></li>
                        <li><Link href="#" className="hover:text-white">Blog</Link></li>
                        <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Subscribe</h3>
                    <p className="text-gray-400 mb-4">
                        Subscribe to our newsletter to get updates about new verified hostels and offers.
                    </p>

                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-3 py-2 rounded-md w-full text-white focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-4 py-2 rounded-md text-white font-medium transition w-full sm:w-auto ${loading
                                    ? "bg-gray-600 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >
                            {loading ? "Subscribing..." : "Subscribe"}
                        </button>
                    </form>

                    {/* Success Message */}
                    {success && (
                        <p className="mt-3 text-green-400 text-sm font-medium animate-fade-in">
                            ✅ Subscription successful! Thanks for joining Hostelle.
                        </p>
                    )}
                </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} <span className="font-semibold text-white">Hostelle</span>. All rights reserved.
            </div>
        </footer>
    );
}
