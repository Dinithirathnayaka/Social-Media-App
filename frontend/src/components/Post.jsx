import { MoreVert } from "@material-ui/icons";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="postUsername">Dinithi Rathnayake</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! It's my first post :</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/1.png" alt="" />
            <img className="heartIcon" src="/assets/2.png" alt="" />
            <span className="postlikeCounter">32 People Like it</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText">9 Comments </span>
          </div>
        </div>
      </div>
    </div>
  );
}
