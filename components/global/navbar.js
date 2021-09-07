import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-5 py-4 text-white bg-gray-900 font-poppins lg:px-0">
      <nav className="container flex justify-between mx-auto align-center">
        <div>
          <Link href="/">
            <a className="text-xl font-bold uppercase">Renz's Next Blog</a>
          </Link>
        </div>

        <div className="space-x-4">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
