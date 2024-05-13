import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Post from "./components/Post/Post";
import { Introduction } from "./components/Profile/Introduction";
import ProfileHeader from "./components/Profile/Header";
import ProfileAlbum from "./components/Profile/Album";
import ProfileFriendList from "./components/Profile/FriendList";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <Profile />
    </>
  );
}

export default App;
