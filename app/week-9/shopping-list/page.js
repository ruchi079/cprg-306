"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (!user) {
    return <p>Redirecting...</p>;
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <p>Your shopping items go here.</p>
      <a href="/week-9">Back to Home</a>
    </div>
  );
}
