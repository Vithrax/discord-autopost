import React from "react";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { cn } from "@/lib/utils";
import type { RouterOutputs } from "@/trpc/shared";

interface EventsTableProps {
  events: RouterOutputs["post"]["getEvents"];
}

const EventsTable = ({ events }: EventsTableProps) => {
  return (
    <>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="w-min text-right">Date Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event, index) => (
          <TableRow key={index}>
            <TableCell className="text-left font-medium">
              {event.name}
            </TableCell>
            <TableCell
              className={cn("text-right", {
                "text-green-500": event.processed,
                "text-orange-500": !event.processed,
              })}
            >
              {event.date.toLocaleDateString("pl-PL", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default EventsTable;
