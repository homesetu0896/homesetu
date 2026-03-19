"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function AdminDashboardClient() {
  const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0 });

  useEffect(() => {
    fetch("/api/admin/bookings")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setStats({
            total: data.length,
            pending: data.filter((b) => b.status === "pending").length,
            completed: data.filter((b) => b.status === "completed").length,
          });
        }
      });
  }, []);

  return (
    <main className="min-h-screen bg-[#1f3a34] text-white">
      {/* Top bar */}
      <div className="bg-[#172e29] border-b border-white/10 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#4ecca3] flex items-center justify-center">
            <span className="text-[#1a3330] font-bold text-xs">HS</span>
          </div>
          <span className="text-white font-semibold text-sm">HomeSetu Admin</span>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="text-white/50 hover:text-white text-sm transition-colors border border-white/20 px-3 py-1.5 rounded-lg hover:border-white/40"
        >
          Sign out
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
        <p className="text-white/40 text-sm mb-8">Manage your bookings, workers, and services</p>

        {/* Live stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-white">{stats.total}</div>
            <div className="text-white/40 text-xs mt-1">Total bookings</div>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-yellow-400">{stats.pending}</div>
            <div className="text-yellow-400/60 text-xs mt-1">Pending</div>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-green-400">{stats.completed}</div>
            <div className="text-green-400/60 text-xs mt-1">Completed</div>
          </div>
        </div>

        {/* Nav cards */}
        <div className="grid md:grid-cols-3 gap-5">
          <Link href="/admin/requests">
            <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4ecca3]/40 rounded-2xl p-6 transition-all cursor-pointer">
              <div className="text-3xl mb-3">📋</div>
              <h2 className="text-white font-semibold text-base mb-1">Bookings</h2>
              <p className="text-white/40 text-sm">View and update service requests</p>
            </div>
          </Link>
          <Link href="/admin/workers">
            <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4ecca3]/40 rounded-2xl p-6 transition-all cursor-pointer">
              <div className="text-3xl mb-3">👷</div>
              <h2 className="text-white font-semibold text-base mb-1">Workers</h2>
              <p className="text-white/40 text-sm">Add or remove professionals</p>
            </div>
          </Link>
          <Link href="/admin/services">
            <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4ecca3]/40 rounded-2xl p-6 transition-all cursor-pointer">
              <div className="text-3xl mb-3">🔧</div>
              <h2 className="text-white font-semibold text-base mb-1">Services</h2>
              <p className="text-white/40 text-sm">View your service offerings</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}