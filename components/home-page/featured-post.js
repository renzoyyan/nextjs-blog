import PostGrid from "../posts/post-grid";

export default function FeaturedPost({ posts }) {
  return (
    <section className="bg-gray-400 ">
      <div className="max-w-7xl w-[90%] py-7 mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 semibold md:text-5xl">
          Featured Posts
        </h2>
        <PostGrid posts={posts} />
      </div>
    </section>
  );
}
