import React from "react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 animate-fadeIn">
         Admin Dashboard is Live!
      </h1>

      {/* Admin Login Button */}
      <a
        href="/admin"
        className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 animate-bounce"
      >
        Go to Admin Login
      </a>
    </div>
  );
}
