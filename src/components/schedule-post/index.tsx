"use client";

import React, { useReducer } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import DateSelector from "./date-selector";
import { Button } from "../ui/button";
import TextInputs from "./text-inputs";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { PostCreateValidator } from "@/lib/validators/PostCreate";
import { useRouter } from "next/navigation";

interface SchedulePostProps {
  booked: Date[];
}

type State = {
  currPage: number;
  date: Date | undefined;
  name: string;
  text: string;
};

type Action =
  | { type: "nextPage" }
  | { type: "prevPage" }
  | { type: "setDate"; payload: Date }
  | { type: "setName"; payload: string }
  | { type: "setText"; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "nextPage":
      return {
        ...state,
        currPage: state.currPage < 2 ? state.currPage + 1 : state.currPage,
      };
    case "prevPage":
      return {
        ...state,
        currPage: state.currPage > 0 ? state.currPage - 1 : state.currPage,
      };
    case "setDate":
      return { ...state, date: action.payload };
    case "setName":
      return { ...state, name: action.payload };
    case "setText":
      return { ...state, text: action.payload };
    default:
      return state;
  }
}

const defaultState: State = {
  currPage: 0,
  date: undefined,
  name: "",
  text: "",
};

const descriptions = [
  "Pick a day when message should be posted",
  "Add friendly name and post text",
  "Confirm request",
];

const SchedulePost = ({ booked }: SchedulePostProps) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const router = useRouter();

  const { mutate: createPost, isLoading } = api.post.create.useMutation({
    onSuccess: () => {
      toast.success("Post was successfully scheduled!");
      router.refresh();
      router.push("/dashboard");
    },
    onError: (data) => {
      toast.error(data.message);
    },
  });

  const updateText = (payload: string) =>
    dispatch({ type: "setText", payload });
  const updateName = (payload: string) =>
    dispatch({ type: "setName", payload });
  const setDate = (payload: Date) => dispatch({ type: "setDate", payload });

  const { success } = PostCreateValidator.safeParse({
    text: state.text,
    date: state.date,
    name: state.name,
  });

  return (
    <Card className="mt-1 w-full sm:w-fit sm:min-w-[500px]">
      <CardHeader>
        <CardTitle>Schedule Post</CardTitle>
        <CardDescription>{descriptions[state.currPage]}</CardDescription>
        <CardContent className="flex flex-col items-center justify-center pt-8">
          {state.currPage === 0 && (
            <DateSelector
              booked={booked}
              setDate={setDate}
              selectedDate={state.date}
            />
          )}
          {state.currPage === 1 && (
            <TextInputs
              name={state.name}
              text={state.text}
              updateText={updateText}
              updateName={updateName}
            />
          )}
          {state.currPage === 2 && (
            <p className="text-center">
              Are you sure you want to schedule this post? <br />
              <span className="text-destructive">
                This process is irreversable!
              </span>
            </p>
          )}
        </CardContent>
        <CardFooter className="grid w-full grid-cols-2 gap-2">
          <Button
            variant="outline"
            onClick={() => {
              if (state.currPage === 0) return router.push("/dashboard");
              return dispatch({ type: "prevPage" });
            }}
          >
            {state.currPage === 0 ? "Back to List" : "Back"}
          </Button>
          <Button
            onClick={() => {
              if (state.currPage < 2) return dispatch({ type: "nextPage" });
              if (state.currPage === 2)
                return createPost({
                  date: state.date!,
                  name: state.name,
                  text: state.text,
                });
            }}
            disabled={isLoading || (state.currPage === 2 && !success)}
          >
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}{" "}
            {state.currPage === 2 ? "Schedule" : "Next"}
          </Button>
        </CardFooter>
      </CardHeader>
    </Card>
  );
};

export default SchedulePost;
