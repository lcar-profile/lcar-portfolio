import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full flex flex-row justify-between px-10 py-4">
      <div>Lai Carson</div>
      <ul className="flex flex-row gap-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
