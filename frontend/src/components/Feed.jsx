import { useEffect, useState } from "react";
import Post from "./Post";
import Share from "./Share";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/6419e8b766b93c78ec7bbe21");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        {" "}
        <Share />
        {posts.map((p) => (
          <Post post={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
