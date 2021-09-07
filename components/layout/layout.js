import Head from "next/head";
import Navbar from "../global/navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main className="bg-gray-400">{children}</main>
    </>
  );
}
