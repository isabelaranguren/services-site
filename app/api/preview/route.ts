import { NextRequest, NextResponse } from "next/server";
import { getPostBySlug } from "@/lib/api";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // Parse the request URL
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");
  const id = searchParams.get("id");

  // Check the secret and id
  if (!secret || secret !== process.env.WORDPRESS_PREVIEW_SECRET || !id) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    // Look up the post/page
    let previewPost = await getPostBySlug(`${id}`);
    let type = "post";

    // If not found as post, try as page
    if (!previewPost) {
      previewPost = await getPageBySlug(`${id}`);
      type = "page";

      // If still not found, return 404
      if (!previewPost) {
        return NextResponse.json(
          { message: "Content not found" },
          { status: 404 }
        );
      }
    }

    // Set preview data in cookies
    cookies().set("wordpress_preview", "true", {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60, // 1 hour
    });

    // Redirect to the post or page
    const slug = previewPost.slug;
    const previewUrl = type === "post" ? `/posts/${slug}` : `/${slug}`;

    // Use redirect instead of NextResponse.redirect
    return NextResponse.redirect(new URL(previewUrl, request.url));
  } catch (error) {
    console.error("Preview error:", error);
    return NextResponse.json(
      { message: "Error setting up preview" },
      { status: 500 }
    );
  }
}
