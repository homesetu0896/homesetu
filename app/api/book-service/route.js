export async function POST(req) {

  const body = await req.json();

  const { name, phone, location, service, message } = body;

  console.log("New Service Request:", body);

  return Response.json({
    success: true,
    message: "Service request received"
  });

}