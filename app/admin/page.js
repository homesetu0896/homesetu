"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/services")
      .then((r) => r.json())
      .then((data) => { setServices(data); setLoading(false); });
  }, []);

  return (
    <main className="min-h-screen bg-[#1f3a34] text-white">
      <div className="bg-[#172e29] border-b border-white/10 px-6 py-3 flex items-center gap-4">
        <Link href="/admin" className="text-white/40 hover:text-white text-sm transition-colors">← Dashboard</Link>
        <span className="text-white/20">/</span>
        <span className="text-white text-sm font-medium">Services</span>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Services</h1>
            <p className="text-white/40 text-sm mt-1">{services.length} active services</p>
          </div>
          <p className="text-white/30 text-xs">Edit via Supabase Table Editor</p>
        </div>

        {loading ? (
          <div className="text-white/40 text-sm py-12 text-center">Loading services...</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.id} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="text-white font-medium text-sm">{s.name}</div>
                <div className="text-white/40 text-xs mt-1 leading-relaxed">{s.description}</div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[#4ecca3] text-xs font-medium">Starting ₹{s.price_from}</span>
                  <Link href={`/services/${s.slug}`} target="_blank" className="text-white/30 hover:text-white text-xs transition-colors">
                    View page →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}