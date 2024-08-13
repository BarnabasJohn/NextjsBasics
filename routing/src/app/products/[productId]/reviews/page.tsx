import Link from "next/link";
export default function Reviews() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href="reviews/1">Review 1</Link>
      </h2>
      <h2>
        <Link href="reviews/2">Review 2</Link>
      </h2>
      <h2>
        <Link href="reviews/3">Review 3</Link>
      </h2>
    </>
  );
}
