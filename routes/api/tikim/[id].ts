/// <reference lib="deno.unstable"

import { type Handlers } from "$fresh/server.ts";

const keyPrefix = "tikim";

export const handler: Handlers =  {
  async POST(_req, ctx) {
    const id = ctx.params.id
    const kv = await Deno.openKv();

    const key = [keyPrefix, id]

    await kv.set(key, true);
    return Response.json({ result: "ok" });
  },
    async GET(_req, ctx) {
      const id = ctx.params.id
      const kv = await Deno.openKv();

      const key = [keyPrefix, id]
      const { value } = await kv.get(key);
      if (!value) {
        return Response.json({ result: false })
      }
      return Response.json({ result: value })
  },
};
