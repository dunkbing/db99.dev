/// <reference lib="deno.unstable"

import { type Handlers } from "$fresh/server.ts";

const keyPrefix = "tikim:restore-allowed";

export const handler: Handlers = {
  async POST(req) {
    console.log("[tikim], syncing pro status");
    const body = await req.json() as { restoreAllowed: boolean };
    const restoreAllowed = Boolean(body?.restoreAllowed);
    const kv = await Deno.openKv();

    const key = [keyPrefix];

    await kv.set(key, restoreAllowed);
    return Response.json({ result: "ok" });
  },
  async GET(_req) {
    console.log("[tikim], getting pro status");
    const kv = await Deno.openKv();

    const key = [keyPrefix];
    const { value } = await kv.get(key);
    if (!value) {
      return Response.json({ result: false });
    }
    return Response.json({ result: value });
  },
};
