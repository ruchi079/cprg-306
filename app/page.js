import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2" className="text-blue-500 hover:underline">
          Go to Week 2 Assignment
        </Link>
      </p>
    </main>
  );
}
