import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching services:", error);
    // Fallback to hardcoded list so site never breaks
    return Response.json([
      "AC Repair", "Carpentry", "Electrical", "Painting", "Plumbing", "Waterproofing",
    ]);
  }

  return Response.json(data);
}