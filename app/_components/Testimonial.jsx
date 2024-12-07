"use client";
import React from 'react';
import { Star } from 'lucide-react';

const Testimonial = ({ name, rating, comment }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <h3 className="text-lg font-semibold mr-2">{name}</h3>
      <div className="flex">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
    </div>
    <p className="text-gray-600">{comment}</p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", rating: 5, comment: "Excellent service! The doctors are very professional and caring." },
    { name: "Jane Smith", rating: 5, comment: "Easy to book appointments and friendly staff. Highly recommended." },
    { name: "Mike Johnson", rating: 5, comment: "Top-notch medical care. I'm very satisfied with my experience." },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
