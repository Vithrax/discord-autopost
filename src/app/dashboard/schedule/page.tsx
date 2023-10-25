import SchedulePost from "@/components/schedule-post";
import { db } from "@/server/db";
import React from "react";

const page = async () => {
  const events = await db.post.findMany({ select: { date: true } });
  const booked = events.map((event) => event.date);

  return (
    <div className="mt-2 flex flex-col items-center">
      <SchedulePost booked={booked} />
    </div>
  );
};

export default page;
