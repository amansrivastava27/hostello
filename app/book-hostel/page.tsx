import { Suspense } from "react";
import HostelBookingForm from "./BookHostelContent";

export default function BookHostelPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-lg text-gray-500">Loading...</div>}>
      <HostelBookingForm />
    </Suspense>
  );
}
