import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link href="/week-2" className="text-blue-500 hover:underline">
            Week 2
          </Link>
        </li>
        <li>
          <Link href="/week-3" className="text-blue-500 hover:underline">
            Week 3
          </Link>
        </li>
        <li>
          <Link href="/week-4" className="text-blue-500 hover:underline">
            Week 4
          </Link>
        </li>
        <li>
          <Link href="/week-5" className="text-blue-500 hover:underline">
            Week 5
          </Link>
        </li>
        <li>
          <Link href="/week-6" className="text-blue-500 hover:underline">
            Week 6
          </Link>
        </li>
        <li>
          <Link href="/week-7" className="text-blue-500 hover:underline">
            Week 7
          </Link>
        </li>
        <li>
          <Link href="/week-8" className="text-blue-500 hover:underline">
            Week 8
          </Link>
        </li>
        <li>
          <Link href="/week-9" className="text-blue-500 hover:underline">
            Week 9
          </Link>
        </li>
      </ul>
    </main>
  );
}
