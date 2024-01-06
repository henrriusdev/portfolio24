
import { client } from "$lib/server/client";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
  

const clientHandler: Handle=async ({event, resolve}) => {
  event.locals.svelxios = client;

  return await resolve (event)
}

const trackers: Handle=async ({event, resolve}) => {
  return await resolve (event)
}

export const handle = sequence(clientHandler, trackers);
  