"use client";

import React, { useState } from "react";
import { Table, TableCaption } from "./ui/table";
import { Ghost, XCircle } from "lucide-react";
import { Switch } from "./ui/switch";
import { api } from "@/trpc/react";
import { Loader2 } from "lucide-react";
import EventsTable from "./events-table";

const EventList = () => {
  const { data, isLoading } = api.post.getEvents.useQuery();
  const [onlyUpcomingEvents, setOnlyUpcomingEvents] = useState(false);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" /> Loading posts...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <XCircle className="h-8 w-8 text-red-300" /> There was an error fetching
        posts... <br />
        Please try again later.
      </div>
    );
  }

  const events = !onlyUpcomingEvents
    ? data
    : data.filter((event) => !event.processed);

  return (
    <Table>
      <TableCaption>
        <div className="flex items-center justify-center gap-2">
          {events.length > 0 ? (
            <div className="flex flex-col items-center gap-2">
              <p className="">
                A list of your{" "}
                <span className="underline">{`${
                  onlyUpcomingEvents ? "upcoming" : "all"
                }`}</span>{" "}
                posts.
              </p>
              <Switch
                checked={onlyUpcomingEvents}
                onCheckedChange={(e) => setOnlyUpcomingEvents(e)}
              />
            </div>
          ) : (
            <>
              <Ghost />
              <span>Pretty empty out here</span>
            </>
          )}
        </div>
      </TableCaption>
      <EventsTable events={events} />
    </Table>
  );
};

export default EventList;
