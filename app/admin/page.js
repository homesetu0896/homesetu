import Navbar from "../../components/Navbar";

export default function AdminDashboard() {

  return (
    <main>

      <Navbar />

      <section className="p-10">

        <h1 className="text-3xl font-bold mb-8">
          HomeSetu Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <a href="/admin/requests">
            <div className="p-6 border rounded-lg shadow">
              View Service Requests
            </div>
          </a>

          <a href="/admin/workers">
            <div className="p-6 border rounded-lg shadow">
              Manage Workers
            </div>
          </a>

          <a href="/admin/services">
            <div className="p-6 border rounded-lg shadow">
              Manage Services
            </div>
          </a>

        </div>

      </section>

    </main>
  );

}