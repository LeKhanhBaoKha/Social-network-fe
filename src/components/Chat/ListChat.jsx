import { useDispatch, useSelector } from "react-redux";
import { PopupMessageDetail } from "../Navbar/PopupMessageDetail";
import { useEffect, useState } from "react";
export const ListChat = () => {
    const chat = useSelector(state => state.chat);
    const [chatboxShow, setChatboxShow] = useState(chat?.chatboxs?.length)
    const [dataChatboxShow, setDataChatboxShow] = useState(() => {
        let len = chat?.conversations?.length;
        const result = chat?.conversations?.slice(len - 3);
        return result;
    });   
    useEffect(() => {
        const result = chat?.conversations?.filter((conv, index) => chat?.chatboxs?.includes(index));
        setDataChatboxShow(result.slice(-3));
        // console.log(chat.chatboxs);
        // console.log(chat.conversations);
        // console.log(result.slice(-3));
    }, [chat?.chatboxs?.length]);
    // console.log(chat.chatboxs);
    return <>
        <div className="fixed bottom-0 right-[45px] shadow-lg  flex max-w-[100%] flex-row-reverse flex-nowrap gap-[40px]">
        {
            dataChatboxShow?.map((item, index) => <PopupMessageDetail data={item} indexConversation={index}></PopupMessageDetail>)
        }
        </div>
    </>
}