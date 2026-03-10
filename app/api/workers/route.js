export async function GET() {

  const workers = [
    { name: "Rajesh", service: "Carpenter" },
    { name: "Imran", service: "Electrician" },
    { name: "Mahesh", service: "Plumber" }
  ];

  return Response.json(workers);

}