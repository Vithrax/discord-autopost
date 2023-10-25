import { MESSAGE_HOUR_POST } from "@/config";
import { sendMessage } from "@/lib/discord";
import { db } from "@/server/db";

// CRON job route, will send messages
export async function GET() {
  const currDate = new Date();

  // fetch only first post, we shouldn't post more anyway
  const post = await db.post.findFirst({
    where: {
      processed: false,
    },
    orderBy: {
      date: "asc",
    },
  });

  if (post) {
    const date = post.date;
    date.setHours(MESSAGE_HOUR_POST);

    if (date < currDate) {
      await sendMessage(post.text);

      await db.post.update({
        where: {
          id: post.id,
        },
        data: {
          processed: true,
        },
      });
    }

    return new Response("OK");
  } else {
    return new Response("Nothing to post.");
  }
}
