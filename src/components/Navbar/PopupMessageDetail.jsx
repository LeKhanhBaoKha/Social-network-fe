import DaLat from '@/assets/images/dalat.png';
import CallIcon from '@/assets/svg/Call.svg';
import VoiceIcon from '@/assets/svg/Voice.svg';
import EmoijIcon from '@/assets/svg/Emoij.svg';
import ImageIcon from '@/assets/svg/Image.svg';
import ThunderIcon from '@/assets/svg/Thunder.svg';
import VideoCallIcon from '@/assets/svg/VideoCall.svg';
import CloseIcon from '@/assets/svg/Close.svg';
import OnlineIcon from '@/assets/svg/Online.svg';
import ForestImage from '@/assets/images/forest.png';
import ThreeDotIcon from '@/assets/svg/ThreeDot.svg';
import { list } from 'postcss';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useRef, useState } from 'react';
import { MesasgeItem } from './MessageItem';
export const PopupMessageDetail = () => {
    const idUserCurrent = 3;
    const listAction = [
        {
            text: 'Gọi thoại',
            icon: CallIcon
        },
        {
            text: 'Gọi video',
            icon: VideoCallIcon
        },
        {
            text: 'Đóng cuộc hội thoại',
            icon: CloseIcon
        },
    ];
    const listAction2 = [
        {
            text : 'Gửi thoại',
            icon : VoiceIcon
        },
        {
            text : 'Cảm xúc',
            icon : EmoijIcon
        },
        {
            text : 'Tin nhắn nhanh',
            icon : ThunderIcon
        },
        {
            text : 'Chọn hình ảnh',
            icon : ImageIcon
        },
    ]
    const listMessage = [
        {
            idSent: 2,
            content: 'Xin chào bạn cho mình làm quen nhé !',
            time: 1715835865,
            avatar: ForestImage
        },
        {
            idSent: 3,
            content: 'Xin chào bạn cho mình làm quen nhé !',
            time: 1715835865,
            avatar: ForestImage
        },
        {
            idSent: 3,
            content: 'Xin chào bạn cho mình làm quen nhé !',
            time: 1715835865,
            avatar: ForestImage
        },
        {
            idSent: 2,
            content: 'Xin chào bạn cho mình làm quen nhé !',
            time: 1715835865,
            avatar: ForestImage
        },
        {
            idSent: 3,
            content: 'Xin chào bạn cho mình làm quen nhé !',
            time: 1715835865,
            avatar: ForestImage
        },
        {
            idSent: 2,
            content: 'Xin chào bạn cho mình làm quen nhé !',
            time: 1715835865,
            avatar: ForestImage
        },
        {
            idSent: 2,
            content: 'Xin chào bạn cho mình làm quen nhé !',
            time: 1715835865,
            avatar: ForestImage
        },
        {
            idSent: 3,
            content: 'Xin chào bạn cho mình làm quen nhé !',
            time: 1715835865,
            avatar: ForestImage
        },
        {
            idSent: 2,
            content: 'Xin chào bạn cho mình làm quen nhé !',
            time: 1715835865,
            avatar: ForestImage
        },
    ];
    const listActionMessage = [
        {
            text : 'Bày tỏ cảm xúc',
            icon : EmoijIcon
        },
        {
            text : 'Xem thêm',
            icon : ThreeDotIcon
        },
        {
            text : 'Xem thêm',
            icon : ThreeDotIcon
        },

    ]
    const messageItemRef = useRef();
    const [isShowActionMessag, setIsShowActionMessagee] = useState(false);
    const actionMessageRef = useRef();
    const handleMouseEnterMessageItem = () => {
        setIsShowActionMessagee(true);
    };
    
      const handleMouseLeaveMessageItem = () => {
        setIsShowActionMessagee(false)
    };
    
    return <div className="fixed bottom-0 w-[350px] right-[45px] shadow-lg bg-white">
        <div className='p-[10px]'>
            <div className="min-h-[60px] flex items-center justify-between">
                <div className="flex items-center gap-[10px] hover:bg-slate-100 rounded-[10px] py-[5px] px-[8px]">
                    <img className='w-[40px] h-[40px] rounded-[50%]' src={DaLat} alt="Ảnh đại diện" />
                    <div>
                        <div className='font-bold'>Nguyễn Duy Hiện</div>
                        <div className='flex items-center gap-[5px]'><img className='w-[8px] h-[8px]' src={OnlineIcon} alt='Đang hoạt động' /><div className='text-[12px] text-[#7589a3]'>Đang hoạt động</div></div>
                    </div>
                </div>
                <div className='flex gap-[10px] items-center'>
                    {listAction?.map((action, index) => {
                        return <button className='hover:bg-slate-100 p-[8px] rounded-[50%]'>
                            <img className='w-[20px] h-[20px]' src={action?.icon} alt={action?.text} />
                        </button>
                    })}
                </div>
            </div>
            <div className="h-[380px] overflow-auto scrollbar pr-[5px]">
                <div className="list-message mb-[20px]">
                    {listMessage?.map((message, index) => {
                        return <MesasgeItem key={index} dataMessage={message}></MesasgeItem>
                    })}
                </div>
            </div>
            <div className='pt-[10px] relative'>
                <textarea className='h-[50px] w-full outline-none border border-sky-300 rounded-[20px] pl-[20px] py-[12px] pr-[130px] resize-none overflow-hidden' placeholder='Nhập tin nhắn ...'/>
                <div className='flex items-center gap-[3px] absolute top-1/2 right-0 transform -translate-y-1/2 right-[10px] h-full'>
                {listAction2?.map((action, index) => {
                    return <button className='hover:bg-slate-200 p-[5px] rounded-[50%]' key={index}><img className='w-[18px] h-[18px]' src={action.icon} alt={action.text}/></button>
                })}
                </div>
            </div>
        </div>
    </div>
}