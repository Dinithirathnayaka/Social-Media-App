import { MoreVert } from "@material-ui/icons";
import { Users } from "../DummyData";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/1.png" alt="" />
            <img className="heartIcon" src="/assets/2.png" alt="" />
            <span className="postlikeCounter">{post.like} People Like it</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments </span>
          </div>
        </div>
      </div>
    </div>
  );
}
