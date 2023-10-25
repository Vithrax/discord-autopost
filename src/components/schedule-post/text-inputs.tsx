import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { TEXT_MAX_LENGTH } from "@/config";
import { cn } from "@/lib/utils";

interface TextInputsProps {
  text: string;
  name: string;
  updateName: (payload: string) => void;
  updateText: (payload: string) => void;
}

const TextInputs = ({
  name,
  text,
  updateName,
  updateText,
}: TextInputsProps) => {
  const length = text.length;

  return (
    <div className="w-full">
      <Label htmlFor="name">Post friendly name</Label>
      <Input
        id="name"
        value={name}
        type="text"
        onChange={(e) => updateName(e.target.value)}
        placeholder="friendly name..."
        className="mb-4"
        maxLength={40}
      />
      <Label htmlFor="text">Post text</Label>
      <Textarea
        id="text"
        placeholder="text here..."
        value={text}
        onChange={(e) => updateText(e.target.value)}
        maxLength={TEXT_MAX_LENGTH}
        className="mb-2 h-[250px]"
      />
      <p
        className={cn("text-end text-sm text-muted-foreground", {
          "text-red-500": length === TEXT_MAX_LENGTH,
        })}
      >
        {length + "/" + TEXT_MAX_LENGTH}
      </p>
    </div>
  );
};

export default TextInputs;
