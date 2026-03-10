export async function GET() {

  const services = [
    "Carpenter",
    "Plumber",
    "Electrician",
    "AC Repair",
    "Painting",
    "Waterproofing"
  ];

  return Response.json(services);

}