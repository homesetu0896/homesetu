"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STATUS_COLORS = {
  pending:     "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  confirmed:   "bg-blue-500/15 text-blue-400 border-blue-500/20",
  in_progress: "bg-purple-500/15 text-purple-400 border-purple-500/20",
  completed:   "bg-green-500/15 text-green-400 border-green-500/20",
  cancelled:   "bg-red-500/15 text-red-400 border-red-500/20",
};

const STATUSES = ["pending", "confirmed", "in_progress", "completed", "cancelled"];

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => { fetchBookings(); }, []);

  async function fetchBookings() {
    setLoading(true);
    const res = await fetch("/api/admin/bookings");
    const data = await res.json();
    setBookings(data);
    setLoading(false);
  }

  async function updateStatus(id, status) {
    await fetch("/api/admin/bookings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setBookings((prev) => prev.map((b) => b.id === id ? { ...b, status } : b));
  }

  const filtered = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);

  const counts = STATUSES.reduce((acc, s) => {
    acc[s] = bookings.filter((b) => b.status === s).length;
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-[#1f3a34] text-white">
      {/* Top bar */}
      <div className="bg-[#172e29] border-b border-white/10 px-6 py-3 flex items-center gap-4">
        <Link href="/admin" className="text-white/40 hover:text-white text-sm transition-colors">← Dashboard</Link>
        <span className="text-white/20">/</span>
        <span className="text-white text-sm font-medium">Bookings</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header + stats */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Bookings</h1>
            <p className="text-white/40 text-sm mt-1">{bookings.length} total requests</p>
          </div>
          <button onClick={fetchBookings} className="text-sm text-[#4ecca3] border border-[#4ecca3]/30 px-4 py-2 rounded-lg hover:bg-[#4ecca3]/10 transition-colors">
            Refresh
          </button>
        </div>

        {/* Stat pills */}
        <div className="flex gap-3 flex-wrap mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${filter === "all" ? "bg-white/15 border-white/30 text-white" : "border-white/10 text-white/40 hover:text-white"}`}
          >
            All ({bookings.length})
          </button>
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-colors capitalize ${filter === s ? `${STATUS_COLORS[s]} border-opacity-50` : "border-white/10 text-white/40 hover:text-white"}`}
            >
              {s.replace("_", " ")} ({counts[s] || 0})
            </button>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-white/40 text-sm py-12 text-center">Loading bookings...</div>
        ) : filtered.length === 0 ? (
          <div className="text-white/40 text-sm py-12 text-center">No bookings found.</div>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((b) => (
              <div key={b.id} className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 grid sm:grid-cols-4 gap-3">
                  <div>
                    <div className="text-xs text-white/40 mb-1">Customer</div>
                    <div className="text-white text-sm font-medium">{b.name}</div>
                    <div className="text-white/50 text-xs">{b.phone}</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-1">Service</div>
                    <div className="text-white text-sm">{b.service}</div>
                    <div className="text-white/50 text-xs">{b.location || "—"}</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-1">Message</div>
                    <div className="text-white/70 text-xs leading-relaxed">{b.message || "—"}</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-1">Date</div>
                    <div className="text-white/70 text-xs">
                      {new Date(b.created_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" })}
                    </div>
                  </div>
                </div>

                {/* Status selector */}
                <div className="flex-shrink-0">
                  <select
                    value={b.status}
                    onChange={(e) => updateStatus(b.id, e.target.value)}
                    className={`text-xs px-3 py-1.5 rounded-lg border bg-transparent cursor-pointer capitalize ${STATUS_COLORS[b.status]}`}
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s} className="bg-[#1f3a34] text-white capitalize">
                        {s.replace("_", " ")}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}