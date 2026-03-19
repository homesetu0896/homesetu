export default function WorkerCard({ name, skill, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 text-center">

      <img
        src={image}
        className="w-20 h-20 mx-auto rounded-full object-cover"
      />

      <h3 className="mt-4 font-semibold">{name}</h3>

      <p className="text-gray-500 text-sm">{skill}</p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Book Now
      </button>

    </div>
  );
}