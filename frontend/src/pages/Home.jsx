import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}
