import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

const isManagerRoute = createRouteMatcher(["/roles(.*)"]); 

export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims } = await auth();

  if (isAdminRoute(req)) {
    await auth.protect();

    const role = sessionClaims?.metadata?.role;
    
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (isManagerRoute(req)) {
    await auth.protect();

    const role = sessionClaims?.metadata?.role;

    if (role !== "admin" && role !== "manager") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};