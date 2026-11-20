"use client";

import React, { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="w-full max-w-md mt-2">
      {submitted ? (
        <div className="p-3 rounded-full bg-emerald-900/90 border border-emerald-600 text-emerald-200 text-xs text-center font-medium">
          ✓ Terima kasih! Anda akan menerima pembaruan warta berita terbaru.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email Anda..."
            required
            className="px-4 py-3 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-white text-sm placeholder-emerald-300/60 focus:outline-none focus:border-amber-400 flex-1"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition shrink-0 shadow-sm">
            Berlangganan
          </button>
        </form>
      )}
    </div>
  );
}
