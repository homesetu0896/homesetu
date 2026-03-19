import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("workers")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching workers:", error);
    // Fallback so site never breaks
    return Response.json([
      { name: "Rajesh Kumar", service: "Carpenter" },
      { name: "Imran Sheikh", service: "Electrician" },
      { name: "Mahesh Patel", service: "Plumber" },
    ]);
  }

  return Response.json(data);
}