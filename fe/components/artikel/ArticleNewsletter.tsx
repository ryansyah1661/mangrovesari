"use client";

import { useState } from "react";

export default function ArticleNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="w-full">
      {submitted ? (
        <div className="p-3 rounded-xl bg-emerald-900 border border-emerald-700 text-emerald-200 text-xs text-center font-medium">
          ✓ Terima kasih! Email Anda telah terdaftar.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nama@pemuda-kreatif.com"
            required
            className="w-full px-4 py-2.5 rounded-xl bg-white text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition flex items-center justify-center gap-1 shadow-2xs">
            <span>Langganan Gratis</span>
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </form>
      )}
    </div>
  );
}
