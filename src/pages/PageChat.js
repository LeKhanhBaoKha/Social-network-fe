import { Chat } from "../components/Chat/Chat"
import Echo from 'laravel-echo';
import { useEffect } from "react";
// import io from 'socket.io-client';
// let usersOnline = [];
// let selectedUser;
// window.io = io;
export const PageChat = () => {
    // useEffect(() => {
    //     const echo = new Echo({
    //         broadcaster: 'socket.io',
    //         // host: `${window.location.protocol}//${window.location.hostname}:6001`,
    //         host: `${window.location.hostname}:6001`,
    //         // transports: ["websocket"],
    //         // withCredentials: true, // Gửi các cookie
    //         // enabledTransports: ['ws', 'wss'],
    //         // transports: ["websocket", "polling", "flashsocket"],
    //         // transports: ["polling"],
    //     });
    //       echo?.private(`room.1`)
    //       .listen('MessagePosted', (e) => {
    //         // this.messages.push(e.message)
    //         // this.scrollToBottom(document.getElementById('shared_room'), true);
    //         console.log("Tin nhắn tới nek", e.message);
    //       })  
    //       // 
    //       echo?.join(`room.1`)
    //       .here((users) => {
    //         console.log(users);
    //       })
    //       .joining((user) => {
    //         usersOnline.value.push(user);
    //         console.log(user);
    //         if (selectedUser.value && user.id === selectedUser.value.id) {
    //           selectedUser.value.isOnline = true;
    //         }
    //       })
    //       .leaving((user) => {
    //         const index = usersOnline.value.findIndex(
    //           (item) => item.id === user.id
    //         );
    //         if (index > -1) {
    //           usersOnline.value.splice(index, 1);
    //         }
  
    //         if (selectedUser.value && user.id === selectedUser.value.id) {
    //           selectedUser.value.isOnline = false;
    //         }
    //         console.log(user);
    //       });
    //       return () => {
            
    //         // Hủy kết nối echo khi component unmount
    //         echo.leave(`room.1`);

    //         // echo?.disconnect();
    //       };
    //     }, []);
            return <>
        <h1>Xin chào</h1>
    </>
}