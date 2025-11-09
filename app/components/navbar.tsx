"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
    user?: { name: string } | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
                <div className="flex items-center space-x-2">
                    <Image src="/favicon.ico" alt="Hostelle Logo" width={40} height={40} />
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        Hostelle
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/hostels">Hostels</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                </div>

                {/* Profile Section */}
                <div className="hidden md:block">
                    {user ? (
                        <Link
                            href="/profile"
                            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            {user.name}
                        </Link>
                    ) : (
                        <div className="space-x-3">
                            <Link
                                href="/login"
                                className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                            >
                                Signup
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-md hover:bg-gray-100 z-30 text-gray-700"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg border-t border-gray-200 absolute w-full z-40">
                    <div className="flex flex-col p-4 space-y-3 text-gray-700 font-medium">
                        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/hostels" onClick={() => setIsOpen(false)}>Hostels</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>

                        <div className="pt-2 border-t border-gray-200">
                            {user ? (
                                <Link
                                    href="/profile"
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-2 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700"
                                >
                                    {user.name}
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-2 rounded-md border border-blue-600 text-blue-600 text-center hover:bg-blue-50"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/signup"
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-2 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700 mt-2"
                                    >
                                        Signup
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
