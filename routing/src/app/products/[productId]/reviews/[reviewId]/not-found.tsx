import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Review not found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href="/products">Home</Link>
      </p>
    </div>
  );
}
