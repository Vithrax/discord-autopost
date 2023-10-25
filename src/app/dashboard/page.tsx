import React from "react";
import EventList from "@/components/event-list";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center gap-10 pt-10 text-center">
      <EventList />
      <Link
        className={buttonVariants({ size: "lg", className: "mt-8 sm:mt-24" })}
        href="/dashboard/schedule"
      >
        Schedule a post
      </Link>
    </div>
  );
};

export default page;
