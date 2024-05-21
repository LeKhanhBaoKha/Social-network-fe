import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Post from "./components/Post/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import { Home } from "./pages/Home";
import { Layout } from "./layout/Layout";
import { Components } from "./pages/Conponents";
import "@/assets/scss/master.scss";
import { Introduction } from "./components/Profile/Introduction";
import ProfileHeader from "./components/Profile/Header";
import ProfileAlbum from "./components/Profile/Album";
import ProfileFriendList from "./components/Profile/FriendList";
import Profile from "./components/Profile/Profile";
import CreatePost from "./components/Profile/CreatePost";
import DetailPost from "./components/Post/DetailPost";
import Introduce from "./components/Introduce/Introduce";
import FriendTab from "./components/FriendTab/FriendTab";
import AlbumTab from "./components/AlbumTab/AlbumTab";
import Chatbox from "./components/Chatbox/Chatbox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="components" element={<Components />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="about" element={<Introduce />}></Route>
          <Route path="friends" element={<FriendTab />}></Route>
          <Route path="album" element={<AlbumTab />}></Route>
          <Route path="chatbox" element={<Chatbox />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
