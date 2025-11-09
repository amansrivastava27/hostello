import React from "react";

const feedbacks = [
    {
        name: "Aman Verma",
        feedback:
            "Hostello made my hostel search so smooth! The verified tag really helped me trust the listings.",
    },
    {
        name: "Priya Sharma",
        feedback:
            "Clean UI, easy to book, and everything works flawlessly. Great job Hostello team!",
    },
    {
        name: "Ravi Kumar",
        feedback:
            "Finally, a hostel booking site that actually works for students. Loved the simplicity!",
    },
];

export default function FeedbackSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                    What Our Users Say
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {feedbacks.map((f, i) => (
                        <div
                            key={i}
                            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
                        >
                            <p className="text-gray-600 italic mb-4">“{f.feedback}”</p>
                            <h4 className="text-blue-600 font-semibold">{f.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
