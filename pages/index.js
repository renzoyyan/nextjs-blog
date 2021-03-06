import Head from "next/head";
import FeaturedPost from "../components/home-page/featured-post";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../helpers/posts-util";

const DUMMY_DATA = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React Framwork for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React Framwork for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React Framwork for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React Framwork for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
];

export default function Homepage({ posts }) {
  return (
    <>
      <Head>
        <title>Renz | Next Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>

      <Hero />
      <FeaturedPost posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
