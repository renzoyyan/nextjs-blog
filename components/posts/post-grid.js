import PostItem from "./post-item";

export default function PostGrid({ posts }) {
  return (
    <ul className="grid content-center gap-6 py-8 grid-cols-posts-grid">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
