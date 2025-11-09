"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [notice, setNotice] = useState<{ type: "success" | "error" | ""; text: string }>({
        type: "",
        text: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // basic front-end validation
        if (!form.name || !form.email || !form.message) {
            setNotice({ type: "error", text: "Please fill name, email, and message." });
            return;
        }

        setLoading(true);
        setNotice({ type: "", text: "" });

        // fake processing (simulate network / backend work)
        setTimeout(() => {
            setLoading(false);
            setNotice({ type: "success", text: "✅ Message sent successfully! We'll get back to you soon." });
            // clear form
            setForm({ name: "", email: "", phone: "", subject: "", message: "" });

            // hide notice after 5s
            setTimeout(() => setNotice({ type: "", text: "" }), 5000);
        }, 2000);
    };

    return (
        <>
            <Navbar />
            <main className="bg-gray-50 text-gray-800 min-h-screen pt-16">
                <section className="max-w-6xl mx-auto px-4 py-12">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold">Contact Hostelle</h1>
                        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                            Reach out for support, partnership inquiries or anything related to verified hostels & bookings.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left: Contact Details */}
                        <div className="lg:col-span-1 bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
                            <h2 className="text-xl font-semibold text-gray-800">Contact Details</h2>
                            <p className="text-gray-600">
                                <span className="font-medium text-gray-700">Address:</span>
                                <br />
                                42 Hostelle Lane, Connaught Place, New Delhi, India
                            </p>

                            <p className="text-gray-600">
                                <span className="font-medium text-gray-700">Phone:</span>
                                <br />
                                +91 98765 43210
                            </p>

                            <p className="text-gray-600">
                                <span className="font-medium text-gray-700">Email:</span>
                                <br />
                                support@Hostelle.example
                            </p>

                            <p className="text-gray-600">
                                <span className="font-medium text-gray-700">Support Hours:</span>
                                <br />
                                Mon — Sat: 9:00 AM — 8:00 PM
                            </p>

                            <div className="mt-4">
                                <h3 className="text-sm font-medium text-gray-700 mb-2">Follow Us</h3>
                                <div className="flex gap-3">
                                    <a className="text-gray-500 hover:text-blue-600" href="#" aria-label="Twitter">Twitter</a>
                                    <a className="text-gray-500 hover:text-pink-500" href="#" aria-label="Instagram">Instagram</a>
                                    <a className="text-gray-500 hover:text-blue-700" href="#" aria-label="LinkedIn">LinkedIn</a>
                                </div>
                            </div>
                        </div>

                        {/* Middle + Right: Form and Map */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Contact Form */}
                            <div className="bg-white rounded-2xl shadow p-6">
                                <h3 className="text-lg font-semibold mb-4">Send a Message</h3>

                                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-sm text-gray-700 mb-1 block">Name</label>
                                            <input
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                className="w-full border rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-blue-300"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm text-gray-700 mb-1 block">Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="you@domain.com"
                                                className="w-full border rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-blue-300"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-sm text-gray-700 mb-1 block">Phone (optional)</label>
                                            <input
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+91 9XXXXXXXXX"
                                                className="w-full border rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-blue-300"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm text-gray-700 mb-1 block">Subject</label>
                                            <input
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                placeholder="Subject"
                                                className="w-full border rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-blue-300"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm text-gray-700 mb-1 block">Message</label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={5}
                                            placeholder="Tell us how we can help..."
                                            className="w-full border rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-blue-300"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`mt-2 py-3 rounded-md font-semibold text-white w-full ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                                            }`}
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>

                                    {notice.text && (
                                        <p
                                            className={`mt-3 text-sm font-medium ${notice.type === "success" ? "text-green-600" : "text-red-500"
                                                }`}
                                        >
                                            {notice.text}
                                        </p>
                                    )}
                                </form>
                            </div>

                            {/* Map */}
                            <div className="bg-white rounded-2xl shadow overflow-hidden">
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">Our Office Location</h3>
                                    <p className="text-gray-600 mb-3">Visit us or check the area on the map below.</p>
                                </div>

                                {/* expressive map - embed (no API key required for simple query). Centered on New Delhi */}
                                <div className="w-full h-64 md:h-full">
                                    <iframe
                                        title="Hostelle Location"
                                        src="https://www.google.com/maps?q=Connaught+Place+New+Delhi&output=embed"
                                        loading="lazy"
                                        className="w-full h-full border-0"
                                    />
                                </div>

                                <div className="p-4 text-sm text-gray-600">
                                    <p><span className="font-medium text-gray-700">Note:</span> Map is for reference. For precise directions, open in Google Maps.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
