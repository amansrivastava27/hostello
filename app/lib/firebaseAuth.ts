// src/lib/firebaseAuth.ts
import { auth } from "./firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";

let verifier: RecaptchaVerifier | null = null;

export const setupRecaptcha = () => {
  if (typeof window === "undefined") return;

  if (!verifier) {
    verifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
      callback: () => {
        console.log("Recaptcha verified ✅");
      },
    });
  }
  return verifier;
};

export const sendOTP = async (phone: string): Promise<ConfirmationResult> => {
  if (typeof window === "undefined") throw new Error("Not in browser");

  const appVerifier = setupRecaptcha();
  const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`; // Default India 🇮🇳
  return await signInWithPhoneNumber(auth, formattedPhone, appVerifier!);
};
export { auth };

