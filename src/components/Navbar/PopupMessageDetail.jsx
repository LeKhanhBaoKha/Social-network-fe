import DaLat from '@/assets/images/dalat.png';
import CallIcon from '@/assets/svg/Call.svg';
import VoiceIcon from '@/assets/svg/Voice.svg';
import EmoijIcon from '@/assets/svg/Emoij.svg';
import ImageIcon from '@/assets/svg/Image.svg';
import ThunderIcon from '@/assets/svg/Thunder.svg';
import VideoCallIcon from '@/assets/svg/VideoCall.svg';
import CloseIcon from '@/assets/svg/Close.svg';
import OnlineIcon from '@/assets/svg/Online.svg';
import SendIcon from '@/assets/svg/send.svg';
import ForestImage from '@/assets/images/forest.png';
import ThreeDotIcon from '@/assets/svg/ThreeDot.svg';
import { list } from 'postcss';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useRef, useState } from 'react';
import { MesasgeItem } from './MessageItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChatbox } from '../../app/chatSlice';
import { throttle } from 'lodash';
import { date } from 'yup';
import APIConversation from '../../api/APIConversation';
import APIMessage from '../../api/APIMessage';
import { NotificationManager } from 'react-notifications';
export const PopupMessageDetail = ({ indexConversation, data }) => {
    const dispatch = useDispatch();
    const echoObject = useSelector(state => state.echo.echoObject);
    const [isTyping, setIsTyping] = useState(false);
    const [contentMessage, setContentMessage] = useState('');
    const userInfo = useSelector(state => state?.user?.userInfo)
    const contentChatRef = useRef(null);
    const listAction = [
        {
            text: 'Gọi thoại',
            icon: CallIcon
        },
        {
            text: 'Gọi video',
            icon: VideoCallIcon
        }
    ];
    const listAction2 = [
        {
            text: 'Gửi thoại',
            icon: VoiceIcon
        },
        {
            text: 'Cảm xúc',
            icon: EmoijIcon
        },
        {
            text: 'Tin nhắn nhanh',
            icon: ThunderIcon
        }
    ]
    // const [listMessage, setListMessage] = useState([
    //     {
    //         idSent: 2,
    //         content: 'Xin chào bạn cho mình làm quen nhé !',
    //         time: 1715835865,
    //         avatar: ForestImage
    //     },
    //     {
    //         idSent: 3,
    //         content: 'Xin chào bạn cho mình làm quen nhé !',
    //         time: 1715835865,
    //         avatar: ForestImage
    //     },
    //     {
    //         idSent: 3,
    //         content: 'Xin chào bạn cho mình làm quen nhé !',
    //         time: 1715835865,
    //         avatar: ForestImage
    //     },
    //     {
    //         idSent: 2,
    //         content: 'Xin chào bạn cho mình làm quen nhé !',
    //         time: 1715835865,
    //         avatar: ForestImage
    //     },
    //     {
    //         idSent: 3,
    //         content: 'Xin chào bạn cho mình làm quen nhé !',
    //         time: 1715835865,
    //         avatar: ForestImage
    //     },
    //     {
    //         idSent: 2,
    //         content: 'Xin chào bạn cho mình làm quen nhé !',
    //         time: 1715835865,
    //         avatar: ForestImage
    //     },
    //     {
    //         idSent: 2,
    //         content: 'Xin chào bạn cho mình làm quen nhé !',
    //         time: 1715835865,
    //         avatar: ForestImage
    //     },
    //     {
    //         idSent: 3,
    //         content: 'Xin chào bạn cho mình làm quen nhé !',
    //         time: 1715835865,
    //         avatar: ForestImage
    //     },
    //     {
    //         idSent: 2,
    //         content: 'Xin chào bạn cho mình làm quen nhé !',
    //         time: 1715835865,
    //         avatar: ForestImage
    //     },
    // ]);
    const [listMessage, setListMessage] = useState([]);
    const [isShowActionMessag, setIsShowActionMessagee] = useState(false);

    const handleCloseConversation = (index) => {
        dispatch(deleteChatbox(index))
    };
    const handleChangeText = throttle(function (e) {
        setContentMessage(e.target.value);
        echoObject.private(`room.1`).whisper("typing", {
            users: data,
            isTyping: true
        });
    }, 2000);
    const handleBlurText = throttle(function () {
        echoObject.private(`room.1`).whisper("typing", {
            isTyping: false
        });
    }, 2000);
    const handleSendMessage = async () => {
        try {
            const dataSend = {
                conversation_id : data?.conversation_id,
                content : contentMessage
            }
            const response = await APIMessage.sendMessage(dataSend);
            if (response?.data?.meta?.statusCode === 200) {
                NotificationManager.success(response?.data?.meta?.message);
            } else {
            }
        } catch (error) {
            NotificationManager.error(error?.response?.data?.meta?.message);
            console.error('Error:', error);
        }
    }
    const handleKeyDownEnter = (event) => {
        if (event.key === 'Enter' && event.shiftKey === false) {
          event.preventDefault();
          handleSendMessage();
          setContentMessage('');
        }
      };
      const handleGetAllMessages = async () => {
        try {
            const response = await APIConversation.getAllMesssageByConversation({ conversationId : data?.conversation_id || 3});
            if (response?.data?.meta?.statusCode === 200) {
                console.log(response?.data?.data?.messages);
                setListMessage(response?.data?.data?.messages);
            } else {
            }
        } catch (error) {
            console.error('Error:', error);
        }
      }
    useEffect(() => {
        echoObject
            .private(`room.1`) // this room to receive whisper events
            .listenForWhisper("typing", (e) => {
                setIsTyping(e.isTyping);
                if (contentChatRef?.current) {
                    contentChatRef.current.scrollIntoView({
                        // behavior: 'smooth', 
                        block: 'end',
                        inline: 'nearest'
                    });
                }
            })
            .listen("MessagePosted", (data) => {
                console.log(data);
                if (contentChatRef?.current) {
                    contentChatRef.current.scrollIntoView({
                        // behavior: 'smooth', 
                        block: 'end',
                        inline: 'nearest'
                    });
                }
                // setListMessage([...listMessage, 
                //     {
                //         idSent: data?.data?.sender,
                //         content: data?.data?.content,
                //         time: 1715835865,
                //         avatar: ForestImage
                //     }
                // ])
            })
        handleGetAllMessages();
        contentChatRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);
    return <div className="w-[350px] right-[45px] shadow-lg bg-white">
        <div className='p-[10px]'>
            <div className="min-h-[60px] flex items-center justify-between">
                <div className="flex items-center gap-[10px] hover:bg-slate-100 rounded-[10px] py-[5px] px-[8px]">
                    <img className='w-[40px] h-[40px] rounded-[50%]' src={data?.other_user?.avatar} alt="Ảnh đại diện" />
                    <div>
                        <div className='font-bold'>{data?.other_user?.nickname ?? data?.other_user?.last_name}</div>
                        <div className='flex items-center gap-[5px]'><img className='w-[8px] h-[8px]' src={OnlineIcon} alt='Đang hoạt động' /><div className='text-[12px] text-[#7589a3]'>Đang hoạt động</div></div>
                    </div>
                </div>
                <div className='flex gap-[10px] items-center'>
                    {listAction?.map((action, index) => {
                        return <button className='hover:bg-slate-100 p-[8px] rounded-[50%]'>
                            <img className='w-[20px] h-[20px]' src={action?.icon} alt={action?.text} />
                        </button>
                    })}
                    <button className='hover:bg-slate-100 p-[8px] rounded-[50%]' onClick={() => handleCloseConversation(indexConversation)}>
                        <img className='w-[20px] h-[20px]' src={CloseIcon} alt={"Đóng cuộc hội thoại"} />
                    </button>
                </div>
            </div>
            <div className="h-[380px] overflow-auto scrollbar pr-[5px] list-message mb-[20px]">
                {listMessage?.map((message, index) => {
                    return <MesasgeItem key={index} dataMessage={message} userCurrentId={userInfo?.id}></MesasgeItem>
                })}
                {isTyping &&  <div className="flex">
                    <img className='h-[30px] w-[30px] rounded-[50%]' src={data?.other_user?.avatar} alt="Ảnh đại diện" /><div className='is-typing'>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div></div>}
                <div ref={contentChatRef}></div>
            </div>
            <div className='pt-[10px] relative'>
                <textarea className='h-[50px] w-full outline-none border border-sky-300 rounded-[20px] pl-[20px] py-[12px] pr-[130px] resize-none overflow-hidden' placeholder='Nhập tin nhắn ...' value={contentMessage} onChange={handleChangeText} onBlur={handleBlurText} onKeyDown={handleKeyDownEnter}/>
                <div className='flex items-center gap-[3px] absolute top-1/2 right-0 transform -translate-y-1/2 right-[10px] h-full'>
                    {listAction2?.map((action, index) => {
                        return <button className='hover:bg-slate-200 p-[5px] rounded-[50%]' key={index}><img className='w-[18px] h-[18px]' src={action.icon} alt={action.text} /></button>
                    })}
                    {contentMessage.length === 0 ? <button className='hover:bg-slate-200 p-[5px] rounded-[50%]'><img className='w-[18px] h-[18px]' src={ImageIcon} alt={'Chọn hình ảnh'} /></button> : <button className='hover:bg-slate-200 p-[5px] rounded-[50%]'><img className='w-[18px] h-[18px]' src={SendIcon} alt={'Gửi tin nhắn'} onClick={handleSendMessage}/></button>}
                </div>
            </div>
        </div>
    </div>
}