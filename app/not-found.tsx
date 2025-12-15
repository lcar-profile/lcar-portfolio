"use client";

import Link from "next/link";
import { Meh, Angry } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NotFound() {
  const [isMehClicked, setIsMehClicked] = useState(false);

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div
        className="hover:cursor-pointer"
        onClick={() => setIsMehClicked(true)}
      >
        {isMehClicked ? (
          <Angry size={128} strokeWidth={1} />
        ) : (
          <Meh size={128} strokeWidth={1} />
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-accent font-semibold text-2xl">404 Not Found</h1>
        <p>Hmm... what are you doing here?</p>
        <Button variant="outline" className="mt-8" asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
