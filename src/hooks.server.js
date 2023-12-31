import { pb } from "$lib";

export async function handle({ event, resolve }) {
  pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  if (pb.authStore.isValid) {
    try {
      await pb.collection("users").authRefresh();
    } catch (_) {
      pb.authStore.clear();
    }
  }

  event.locals.pb = pb;
  event.locals.user = structuredClone(pb.authStore.model);

  const response = await resolve(event);

  // after
  response.headers.set(
    "set-cookie",
    pb.authStore.exportToCookie({ httpOnly: false }),
  );

  return response;
}
