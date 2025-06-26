import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Only protect /shorten and its subpaths
const isProtectedRoute = createRouteMatcher(["/shorten(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

// Apply middleware only to relevant routes
export const config = {
  matcher: ["/shorten(.*)", "/api/(.*)"], // update if your APIs need auth
};
