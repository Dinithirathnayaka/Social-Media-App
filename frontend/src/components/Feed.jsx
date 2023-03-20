import Post from "./Post";
import Share from "./Share";
import { Posts } from "../DummyData";

export default function Feed() {
  return (
    <div className="feed">
      <Share />
      {Posts.map((p) => (
        <Post post={p} key={p.id} />
      ))}
    </div>
  );
}
