import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Post from "./components/Post/Post";
import { Introduction } from "./components/Profile/Introduction";
import ProfileHeader from "./components/Profile/Header";

function App() {
  return (
    <>
      <ProfileHeader></ProfileHeader>
      <Introduction></Introduction>
    </>
  );
}

export default App;
