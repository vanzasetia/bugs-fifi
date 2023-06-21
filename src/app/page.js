"use client";
import List from "@/components/List";
import data from "@/data";
import { useState } from "react";

export default function Home() {
  const [bugs, setBugs] = useState(data);
  const totalBugs = bugs.length;

  return (
    <main className="flow">
      <h1>Bugs FiFi</h1>
      <p>Automatically find and fix bugs with just one click.</p>
      <div className="card flow">
        <h2>{totalBugs} Bugs Found</h2>
        <List bugs={bugs} />
        <p>Bugs FiFi have fixed all the bugs.</p>
        <button type="button" onClick={() => setBugs([])}>
          Fix all bugs
        </button>
        <button type="button" onClick={() => setBugs(data)}>
          Find all bugs
        </button>
      </div>
    </main>
  );
}
