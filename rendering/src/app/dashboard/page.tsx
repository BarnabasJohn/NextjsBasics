"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");

  console.log("this the dashboard page")

  return (
    <div>
      <h1>Dashboard page</h1>
      <input className="text-black" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}
