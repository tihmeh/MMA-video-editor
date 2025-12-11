import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const clips = formData.getAll("clips");
    const configRaw = formData.get("config");

    if (!clips.length || !configRaw) {
      return NextResponse.json(
        { error: "Missing clips or configuration" },
        { status: 400 }
      );
    }

    console.log("Received clips:", clips.length);
    console.log("Config:", configRaw);

    // Simulate processing delay
    await new Promise((res) => setTimeout(res, 1500));

    return NextResponse.json({
      videoUrl: "https://example.com/your-generated-highlight.mp4",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to generate highlight" },
      { status: 500 }
    );
  }
}
