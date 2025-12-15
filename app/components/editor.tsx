"use client";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
  FileText,
  Minus,
  Plus,
  Maximize2,
  Minimize2,
  X,
  RotateCcw,
  Trash2,
  LucideIcon,
} from "lucide-react";
import { useState } from "react";

interface EditorProps {
  text?: string;
}

interface EditorButtonProps {
  title: string;
  Icon: LucideIcon;
}

function WindowButton({
  Icon,
  className,
  ...props
}: EditorButtonProps & React.ComponentProps<"button">) {
  return (
    <Button
      className={cn(
        "bg-transparent text-foreground rounded-none hover:bg-slate-400 hover:dark:bg-neutral-900",
        className
      )}
      {...props}
    >
      <Icon />
    </Button>
  );
}

function EditorButton({
  Icon,
  className,
  ...props
}: EditorButtonProps & React.ComponentProps<"button">) {
  return (
    <Button
      className={cn(
        "bg-transparent text-foreground rounded-none hover:bg-transparent hover:text-hyperlink",
        className
      )}
      {...props}
    >
      <Icon />
    </Button>
  );
}

export default function Editor({ text }: EditorProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [textField, setTextField] = useState(text);

  return (
    <div className="flex flex-col w-full items-center">
      {isClosed && <File />}
      <div
        className={`shadow-sm ${
          isClosed
            ? "hidden"
            : `flex overflow-hidden ${isOpen ? "min-h-[356px]" : "min-h-fit"} ${
                isFullscreen
                  ? "z-50 fixed inset-0 w-screen h-full rounded-none"
                  : "z-0 w-full h-fit rounded-md"
              }`
        }`}
      >
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex flex-col flex-grow"
        >
          <div className="flex flex-row bg-slate-300 dark:bg-neutral-800 h-[36px] flex-shrink-0 bg-muted items-center justify-between overflow-hidden text-foreground">
            <div className="flex flex-row gap-1 ml-4 items-center">
              <FileText size={16} />
              <div className="text-sm">welcome.txt</div>
            </div>
            <div className="flex flex-row">
              <WindowButton
                title={isOpen ? "Collapse" : "Expand"}
                Icon={isOpen ? Minus : Plus}
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsFullscreen(false);
                }}
              />
              <WindowButton
                title={isFullscreen ? "Minimise" : "Maximise"}
                Icon={isFullscreen ? Minimize2 : Maximize2}
                onClick={() => {
                  if (!isOpen) setIsOpen(true);
                  setIsFullscreen(!isFullscreen);
                }}
              />
              <WindowButton
                title="Close"
                Icon={X}
                className="hover:bg-destructive hover:dark:bg-destructive"
                onClick={() => setIsClosed(true)}
              />
            </div>
          </div>
          <CollapsibleContent
            className={`flex flex-col h-full p-4 gap-4 bg-slate-200 dark:bg-neutral-700 overflow-auto data-[state=open]:animate-[slideDown_50ms_ease-out] data-[state=closed]:animate-[slideUp_50ms_ease-out]`}
          >
            <textarea
              value={textField}
              onChange={(e) => setTextField(e.target.value)}
              className="bg-transparent w-full h-full resize-none text-left outline-none text-sm font-google-sans-code"
              spellCheck={false}
            />
            <div className="flex flex-row items-center justify-end">
              <EditorButton
                title="Reset"
                Icon={RotateCcw}
                onClick={() => setTextField(text)}
              />
              <EditorButton
                title="Clear"
                Icon={Trash2}
                onClick={() => setTextField("")}
                className="hover:text-destructive"
              />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );

  function File() {
    return (
      <div
        className="flex flex-col w-fit items-center gap-1 p-3 hover:bg-foreground/10 hover:cursor-pointer rounded-sm"
        onClick={() => setIsClosed(false)}
      >
        <FileText size={36} />
        <div className="text-xs text-muted-foreground">welcome.txt</div>
      </div>
    );
  }
}
