"use client";
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebaseAuth";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut(auth)}
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
    >
      Logout
    </button>
  );
}
