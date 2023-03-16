import Post from "./Post";
import Share from "./Share";

export default function Feed() {
  return (
    <div className="feed">
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
