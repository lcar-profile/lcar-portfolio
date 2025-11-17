import Link from "next/link";
import { Meh } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center w-full">
      <Meh size={128} strokeWidth={1.5}></Meh>
      <h2>Hmm... there&apos;s nothing here</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
