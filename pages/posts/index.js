import Head from "next/head";
import AllPost from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/posts-util";

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

export default function AllBlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>Renz | All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPost posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
