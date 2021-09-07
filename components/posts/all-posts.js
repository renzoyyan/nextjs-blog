import PostGrid from "./post-grid";

export default function AllPost({ posts }) {
  return (
    <section className="bg-gray-400">
      <div className="w-[90%] max-w-[60rem] py-8 mx-auto">
        <h1 className="font-bold text-4xl text-center my-4 text-gray-800 md:text-[4rem]">
          All Posts
        </h1>
        <PostGrid posts={posts} />
      </div>
    </section>
  );
}
