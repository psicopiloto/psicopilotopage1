// components/GoogleReviews.jsx
import { useEffect, useState } from "react";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    fetch("/api/reviews")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <section className="py-16 bg-psicopiloto-sand-50">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-semibold mb-12 text-psicopiloto-blue-600">
          Lo que dicen quienes han confiado en mí
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col bg-white/70 p-6 rounded-lg shadow-lg border-l-4 border-psicopiloto-green-500 transition transform hover:-translate-y-1"
            >
              <p className="text-yellow-500 mb-2">{"⭐".repeat(review.rating)}</p>
              <blockquote className="italic text-psicopiloto-gray-700 mb-4 flex-grow text-sm md:text-base leading-relaxed">
                "{review.text}"
              </blockquote>
              <p className="font-bold text-right text-psicopiloto-gray-700">
                - {review.author_name}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="https://www.google.com/maps/place/?q=place_id:TU_PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-4 text-xl text-white rounded-2xl font-bold shadow-lg bg-psicopiloto-blue-500 hover:bg-psicopiloto-blue-600 transition"
          >
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
