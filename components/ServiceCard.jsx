export default function ServiceCard({ title, icon, link }) {
  return (
    <a href={link} className="bg-white shadow-md hover:shadow-xl border border-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <div className="text-blue-600">{icon}</div>

        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500 text-sm">
            Professional {title} services
          </p>
        </div>
      </div>
    </a>
  );
}