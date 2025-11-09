"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { db } from "@/app/lib/firebaseConfig"; // optional: save user to Firestore
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

/**
 * Development-only fake OTP login page.
 * - Generates a random 6-digit code and shows it in UI (or console).
 * - Verifies code client-side.
 * - Creates a Firestore user doc (optional).
 *
 * IMPORTANT: This is NOT secure. Replace with Firebase phone auth before production.
 */

export default function LoginPageDevFakeOtp() {
  const [phone, setPhone] = useState(""); // accept number like "9876543210" or "+919876543210"
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [userPhone, setUserPhone] = useState<string | null>(null);

  // Helper: generate 6-digit OTP
  const genOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Send (fake) OTP
  const handleSendOtp = async () => {
    if (!phone || phone.trim().length < 6) {
      setStatus("Enter a valid phone number (dev-only).");
      return;
    }

    setLoading(true);
    setStatus(null);

    // Generate OTP
    const otp = genOtp();
    setGeneratedOtp(otp);
    setOtpSent(true);

    // For dev: log it and show a small hint in UI (you can remove console.log in production)
    console.log(`[DEV OTP] for ${phone}: ${otp}`);

    // Optionally: store a short-lived record or show the OTP in the UI for convenience:
    // We'll show it on the UI in a small paragraph (DEV ONLY).
    setStatus(`(DEV) OTP for ${phone} → ${otp}`);

    setLoading(false);
  };

  // Verify OTP (fake)
  const handleVerifyOtp = async () => {
    if (!generatedOtp) {
      setStatus("No OTP sent. Please request OTP first.");
      return;
    }
    setLoading(true);
    setStatus(null);

    if (enteredOtp.trim() === generatedOtp) {
      // Success — create a user record in Firestore OR use client state
      try {
        // OPTIONAL: Save user into Firestore under collection "users".
        // We don't have a Firebase uid (since this is fake). Use phone as doc id or a prefixed id.
        const userDocId = `dev_${phone.replace(/\D/g, "")}`; // e.g. dev_919876543210
        await setDoc(doc(db, "users", userDocId), {
          phone: phone.startsWith("+") ? phone : `+91${phone}`,
          createdAt: serverTimestamp(),
          devOnly: true,
        });

        setUserPhone(phone);
        setStatus("✅ Logged in (dev mode). User created in Firestore.");
      } catch (err) {
        console.error("Error saving dev user to Firestore:", err);
        setStatus("✅ Logged in (dev mode), but failed to save to Firestore (see console).");
        setUserPhone(phone);
      }
    } else {
      setStatus("❌ Invalid OTP. Try again.");
    }

    setLoading(false);
    // Clear OTP after verify
    setGeneratedOtp(null);
    setOtpSent(false);
    setEnteredOtp("");
  };

  const handleLogoutDev = () => {
    setUserPhone(null);
    setPhone("");
    setOtpSent(false);
    setGeneratedOtp(null);
    setEnteredOtp("");
    setStatus("Logged out (dev mode).");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800 pt-16 pb-12">
        <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">
          <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">Login with OTP (DEV)</h1>

          {userPhone ? (
            <div className="text-center">
              <p className="mb-4">You are logged in as <strong>{userPhone}</strong> (dev).</p>
              <button onClick={handleLogoutDev} className="px-4 py-2 rounded bg-red-500 text-white">
                Logout
              </button>
            </div>
          ) : (
            <>
              <label className="block mb-2 text-sm font-medium">Phone number (dev)</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9479880143 or +919479880143"
                className="w-full border rounded p-3 mb-3"
              />

              {!otpSent ? (
                <button
                  onClick={handleSendOtp}
                  disabled={loading}
                  className={`w-full py-2 rounded ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white`}
                >
                  {loading ? "Sending..." : "Send OTP (dev)"}
                </button>
              ) : (
                <>
                  <label className="block mt-4 mb-2 text-sm font-medium">Enter OTP</label>
                  <input
                    type="text"
                    value={enteredOtp}
                    onChange={(e) => setEnteredOtp(e.target.value)}
                    placeholder="6-digit OTP"
                    className="w-full border rounded p-3 mb-3"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleVerifyOtp}
                      disabled={loading}
                      className={`flex-1 py-2 rounded ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"} text-white`}
                    >
                      {loading ? "Verifying..." : "Verify OTP"}
                    </button>
                    <button
                      onClick={() => { setOtpSent(false); setGeneratedOtp(null); setEnteredOtp(""); setStatus("OTP cancelled."); }}
                      className="py-2 px-3 rounded border"
                    >
                      Cancel
                    </button>
                  </div>

                  {/* DEV helper: show the OTP on screen for fast testing */}
                  <p className="mt-3 text-sm text-gray-600">
                    <strong>DEV OTP:</strong> <span className="text-blue-700">{generatedOtp}</span>
                  </p>
                </>
              )}
            </>
          )}

          {status && <p className="mt-4 text-center text-sm">{status}</p>}

          <div className="mt-6 text-xs text-gray-500">
            <p><strong>Note:</strong> This page uses a fake OTP flow for development only. Replace with Firebase Phone Auth before production.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
