"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const EMPTY = { name: "", service: "", experience: "", rating: "5.0", jobs_done: "0", initials: "" };

export default function AdminWorkers() {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(EMPTY);
  const [adding, setAdding] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => { fetchWorkers(); }, []);

  async function fetchWorkers() {
    setLoading(true);
    const res = await fetch("/api/admin/workers");
    const data = await res.json();
    setWorkers(data);
    setLoading(false);
  }

  async function addWorker(e) {
    e.preventDefault();
    setAdding(true);
    await fetch("/api/admin/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, rating: parseFloat(form.rating), jobs_done: parseInt(form.jobs_done) }),
    });
    setForm(EMPTY);
    setShowForm(false);
    setAdding(false);
    fetchWorkers();
  }

  async function deleteWorker(id) {
    if (!confirm("Remove this worker?")) return;
    await fetch("/api/admin/workers", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setWorkers((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <main className="min-h-screen bg-[#1f3a34] text-white">
      <div className="bg-[#172e29] border-b border-white/10 px-6 py-3 flex items-center gap-4">
        <Link href="/admin" className="text-white/40 hover:text-white text-sm transition-colors">← Dashboard</Link>
        <span className="text-white/20">/</span>
        <span className="text-white text-sm font-medium">Workers</span>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Workers</h1>
            <p className="text-white/40 text-sm mt-1">{workers.length} professionals</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#4ecca3] text-[#1a3330] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#3ab890] transition-colors"
          >
            + Add worker
          </button>
        </div>

        {/* Add form */}
        {showForm && (
          <form onSubmit={addWorker} className="bg-white/5 border border-[#4ecca3]/20 rounded-xl p-6 mb-6 grid sm:grid-cols-3 gap-4">
            {[
              { key: "name", placeholder: "Full name", label: "Name *" },
              { key: "service", placeholder: "e.g. Plumber", label: "Service *" },
              { key: "experience", placeholder: "e.g. 5 years experience", label: "Experience" },
              { key: "initials", placeholder: "e.g. RK", label: "Initials" },
              { key: "rating", placeholder: "4.9", label: "Rating" },
              { key: "jobs_done", placeholder: "50", label: "Jobs done" },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-white/50 text-xs mb-1 block">{f.label}</label>
                <input
                  value={form[f.key]}
                  onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                  placeholder={f.placeholder}
                  className="w-full bg-white/10 border border-white/15 rounded-lg px-3 py-2 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#4ecca3]/60"
                />
              </div>
            ))}
            <div className="sm:col-span-3 flex gap-3">
              <button type="submit" disabled={adding} className="bg-[#4ecca3] text-[#1a3330] font-semibold text-sm px-5 py-2 rounded-lg hover:bg-[#3ab890] transition-colors disabled:opacity-60">
                {adding ? "Saving..." : "Save worker"}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="text-white/40 hover:text-white text-sm px-4 py-2 border border-white/10 rounded-lg">
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Workers grid */}
        {loading ? (
          <div className="text-white/40 text-sm py-12 text-center">Loading workers...</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {workers.map((w) => (
              <div key={w.id} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white text-sm font-semibold">
                    {w.initials || w.name?.slice(0, 2).toUpperCase()}
                  </div>
                  <button onClick={() => deleteWorker(w.id)} className="text-white/20 hover:text-red-400 text-xs transition-colors">
                    Remove
                  </button>
                </div>
                <div className="text-white font-medium text-sm">{w.name}</div>
                <div className="text-[#4ecca3] text-xs mt-0.5">{w.service}</div>
                <div className="text-white/40 text-xs mt-0.5">{w.experience}</div>
                <div className="flex gap-3 mt-3">
                  <span className="text-xs text-white/60">⭐ {w.rating}</span>
                  <span className="text-xs text-white/60">{w.jobs_done}+ jobs</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}