import { define } from "../../../utils.ts";

export const handler = define.handlers({
  async POST(ctx) {
    try {
      const body = await ctx.req.json() as {
        topic: string;
        text: string;
        user: unknown;
      };

      if (!body.topic || !body.text) {
        return Response.json(
          { error: "Topic and text are required" },
          { status: 400 },
        );
      }

      console.log("[feedback] Received feedback:", {
        topic: body.topic,
        text: body.text,
        user: body.user,
        timestamp: new Date().toISOString(),
      });

      // Store feedback in KV store
      const kv = await Deno.openKv();
      const feedbackKey = ["feedback", crypto.randomUUID()];

      await kv.set(feedbackKey, {
        topic: body.topic,
        text: body.text,
        user: body.user,
        timestamp: new Date().toISOString(),
      });

      return Response.json({ result: "ok" });
    } catch (error) {
      console.error("[feedback] Error processing feedback:", error);
      return Response.json(
        { error: "Internal server error" },
        { status: 500 },
      );
    }
  },
});
