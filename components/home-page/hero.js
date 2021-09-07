import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-8 text-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto ">
        <div className="w-[300px] h-[300px] m-auto">
          <Image
            src="/images/me.jpg"
            width={300}
            height={300}
            className="rounded-[50%] shadow-md"
          />
        </div>

        <h1 className="my-4 text-6xl font-bold text-gray-300">Hi, I'm Renz</h1>
        <p className="text-2xl text-gray-200 w-[90%] max-w-[40rem] m-auto">
          I blog about web development - especially frontend framework like
          React
        </p>
      </div>
    </section>
  );
}
