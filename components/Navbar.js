export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold text-blue-600">HomeSetu</h1>

      <div className="space-x-6">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}