import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function PUT(request: NextRequest) {
  const secretKey = request.headers.get("X-Headless-Secret-Key");

  if (!secretKey || secretKey !== process.env.WORDPRESS_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { tags = [] } = body;

    if (!tags || !tags.length) {
      return NextResponse.json(
        { message: "No tags received" },
        { status: 400 }
      );
    }

    // Revalidate for each tag
    for (const tag of tags) {
      revalidateTag(tag);
    }

    return NextResponse.json({
      revalidated: true,
      message: `Revalidated tags: ${tags.join(", ")}`,
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
