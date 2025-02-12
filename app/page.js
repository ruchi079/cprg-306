import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link href="/week-2" className="text-blue-500 hover:underline">
            Go to Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-3" className="text-blue-500 hover:underline">
            Week 3
          </Link>
        </li>
        <li>
          <Link href="/week-3]4" className="text-blue-500 hover:underline">
            Week 4
          </Link>
        </li>
      </ul>
    </main>
  );
}
