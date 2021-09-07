import Link from "next/link";
import Image from "next/image";

export default function PostItem(props) {
  const { image, title, date, excerpt, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className="text-center bg-gray-800 shadow-md">
      <Link href={`/posts/${slug}`}>
        <a className="text-gray-100">
          <div className="max-h-80">
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h3 className="my-3 text-2xl font-bold">{title}</h3>
            <time className="italic text-gray-300">{formattedDate}</time>
            <p className="leading-6">{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
