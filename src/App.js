import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Post from "./components/Post/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import { Home } from "./pages/Home";
import { Layout } from "./layout/Layout";
import { Components } from "./pages/Conponents";
import "@/assets/scss/app.scss";
import "@/assets/scss/master.scss";
import { Introduction } from "./components/Profile/Introduction";
import ProfileHeader from "./components/Profile/Header";
import ProfileAlbum from "./components/Profile/Album";
import ProfileFriendList from "./components/Profile/FriendList";
import Profile from "./components/Profile/Profile";
import CreatePost from "./components/Profile/CreatePost";
import DetailPost from "./components/Post/DetailPost";
import { PageLogin } from "./pages/PageLogin";
import { PageForgotPassword } from "./pages/PageForgotPassword";
import { PageRegister } from "./pages/PageRegister";
import { PageTermAndPolicy } from "./pages/PageTermAndPolicy";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import { PageResetPassword } from "./pages/PageResetPassword";import Introduce from "./components/Introduce/Introduce";
import FriendTab from "./components/FriendTab/FriendTab";
import AlbumTab from "./components/AlbumTab/AlbumTab";
import Chatbox from "./components/Chatbox/Chatbox";
import { PageChat } from "./pages/PageChat";
import { useEffect } from "react";
import Echo from "laravel-echo";
import io from 'socket.io-client';
import { useDispatch, useSelector } from "react-redux";
import { updateEcho } from "./app/echoSlice";
window.io = io;
function App() {
  const dispatch = useDispatch();
  const echoObject = useSelector(state => state.echo?.echoObject);
    useEffect(() => {
          // echoObject?.private(`room.1`)
          // .listen('MessagePosted', (e) => {
          //   console.log(e.message);
          //   // this.messages.push(e.message)
          //   // this.scrollToBottom(document.getElementById('shared_room'), true);
          // })  
          // // Tham gia phòng có tên là room1
          // echoObject?.join(`room.1`)
          // // Hiển thị các người dùng đang có trong phòng
          // .here((users) => {
          //   // console.log(users);
          // })
          // // Khi có người dùng mới tham gia vào phồng
          // .joining((user) => {
          // })
          // // Khi một người rời khỏi phòng
          // .leaving((user) => {
          //   console.log(user);
          // });
          echoObject.private(`room.1`).listen("MessagePosted", (data) => {
            console.log('Tin nhắn tới kìa bay', data);
          });
          return () => {
            
            // Hủy kết nối echoObject khi component unmount
            echoObject.leave(`room.1`);

            // echoObject?.disconnect();
          };
        }, []);
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
          <Route path="chat" element={<PageChat />}></Route>
        </Route>
        <Route path="auth/login" element={<PageLogin/>}> </Route>
        <Route path="auth/register" element={<PageRegister/>}> </Route>
        <Route path="auth/forgot-password" element={<PageForgotPassword/>}> </Route>
        <Route path="auth/reset-password" element={<PageResetPassword/>}> </Route>
        <Route path="terms-and-policy" element={<PageTermAndPolicy/>}> </Route>
      </Routes>        <NotificationContainer/>
    </BrowserRouter>
  );
}

export default App;
