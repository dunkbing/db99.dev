import { define } from "../../../utils.ts";

const keyPrefix = "tikim:restore-allowed";

export const handler = define.handlers({
  async POST(ctx) {
    console.log("[tikim], syncing restore allowed status");
    const body = await ctx.req.json() as { restoreAllowed: boolean };
    const restoreAllowed = Boolean(body?.restoreAllowed);
    const kv = await Deno.openKv();

    const key = [keyPrefix];

    await kv.set(key, restoreAllowed);
    return Response.json({ result: "ok" });
  },
  async GET() {
    console.log("[tikim], getting restore allowed status");
    const kv = await Deno.openKv();

    const key = [keyPrefix];
    const { value } = await kv.get(key);
    if (!value) {
      return Response.json({ result: false });
    }
    return Response.json({ result: value });
  },
});
