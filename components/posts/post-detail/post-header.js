import Image from "next/image";

export default function PostHeader({ image, title }) {
  return (
    <header className="flex flex-col-reverse items-center justify-between gap-4 pb-8 my-4 border-b-8 border-indigo-100 md:my-8 md:flex-row md:items-end">
      <h1 className="md:text-[4rem] md:text-left text-6xl text-indigo-500 text-center font-bold">
        {title}
      </h1>
      <Image
        src={image}
        alt={title}
        width={200}
        height={150}
        objectFit="cover"
      />
    </header>
  );
}
