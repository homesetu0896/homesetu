import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, location, service, message } = body;

    // Validation
    if (!name || !phone || !service) {
      return Response.json(
        { success: false, message: "Name, phone, and service are required." },
        { status: 400 }
      );
    }

    // 1. Save booking to Supabase
    const { error: dbError } = await supabase.from("bookings").insert([
      {
        name,
        phone,
        location: location || null,
        service,
        message: message || null,
        status: "pending",
      },
    ]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      // Don't block the user — still try WhatsApp
    }

    // 2. Send WhatsApp notification (from Phase 3 — unchanged)
    const text = [
      "🏠 *New HomeSetu Booking*",
      "",
      `👤 *Name:* ${name}`,
      `📞 *Phone:* ${phone}`,
      `📍 *Location:* ${location || "Not provided"}`,
      `🔧 *Service:* ${service}`,
      `💬 *Message:* ${message || "None"}`,
      "",
      `🕐 *Time:* ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
    ].join("\n");

    const encodedText = encodeURIComponent(text);
    const apiKey = process.env.CALLMEBOT_API_KEY;
    const waNumber = process.env.WHATSAPP_NUMBER;

    if (apiKey && waNumber) {
      const url = `https://api.callmebot.com/whatsapp.php?phone=${waNumber}&text=${encodedText}&apikey=${apiKey}`;
      await fetch(url).catch((e) => console.error("WhatsApp error:", e));
    }

    return Response.json({
      success: true,
      message: "Booking received! We'll call you back within 30 minutes.",
    });
  } catch (err) {
    console.error("book-service error:", err);
    return Response.json(
      { success: false, message: "Something went wrong. Please try WhatsApp directly." },
      { status: 500 }
    );
  }
}