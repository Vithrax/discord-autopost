"use client";
import React from "react";
import { Calendar } from "../ui/calendar";
import { MAX_DATE_DISTANCE_MONTHS } from "@/config";

interface DateSelectorProps {
  booked: Date[];
  selectedDate: Date | undefined;
  setDate: (date: Date) => void;
}

const bookedStyle = { border: "2px solid currentColor" };

const DateSelector = ({ booked, selectedDate, setDate }: DateSelectorProps) => {
  const today = new Date();
  const endDate = new Date();
  endDate.setMonth(today.getMonth() + MAX_DATE_DISTANCE_MONTHS);

  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      // @ts-expect-error type issue with react-day-picker
      onSelect={setDate}
      className="w-fit rounded-md border"
      modifiers={{ booked }}
      modifiersStyles={{ booked: bookedStyle }}
      disabled={booked}
      fromDate={new Date()}
      toDate={endDate}
    />
  );
};

export default DateSelector;
