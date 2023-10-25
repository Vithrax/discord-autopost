import { env } from "@/env.mjs";

export async function sendMessage(content: string) {
  // build message here
  const message = {
    content: "@everyone\n" + content,
  };

  try {
    const response = await fetch(env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    if (response.ok) {
      console.log("Message sent successfully.");
    } else {
      console.error(
        `Failed to send message. HTTP status code: ${response.status}`,
      );
    }
  } catch (error) {
    console.error("Error sending the message:", error);
  }
}
