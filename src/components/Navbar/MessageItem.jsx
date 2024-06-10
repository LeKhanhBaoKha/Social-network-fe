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
import { useState } from 'react';
export const MesasgeItem = ({ dataMessage }) => {
    const idUserCurrent = 2;
    const listActionMessage = [
        {
            text: 'Bày tỏ cảm xúc',
            icon: EmoijIcon
        },
        {
            text: 'Xem thêm',
            icon: ThreeDotIcon
        },
        {
            text: 'Xem thêm',
            icon: ThreeDotIcon
        },
    ]
    const [isShowActionMessag, setIsShowActionMessagee] = useState(false);
    const handleMouseEnterMessageItem = () => {
        setIsShowActionMessagee(true);
    };

    const handleMouseLeaveMessageItem = () => {
        setIsShowActionMessagee(false)
    };
    const showComponent = () => {
        if (dataMessage.idSent !== idUserCurrent) {
            return <div className='flex items-center gap-[7px]  mt-[10px]' onMouseEnter={handleMouseEnterMessageItem} onMouseLeave={handleMouseLeaveMessageItem}>
                <img className='h-[30px] w-[30px] rounded-[50%]' src={dataMessage?.avatar} alt="" />
                <div className='max-w-[55%] bg-[#F0F0F0] py-[8px] px-[13px] rounded-[18px]'>
                    {dataMessage?.content}
                </div>
                {isShowActionMessag ? <div class='list-action-message flex gap-[5px]'>
                    {listActionMessage?.map((actionMessage, index) => {
                        return <button key={index} className='hover:bg-slate-200 p-[5px] rounded-[50%]'><img className='w-[15px] h-[15px]' src={actionMessage.icon} alt={actionMessage.text} /></button>
                    })}
                </div> : ''}
            </div>
        }
        else {
            return <div className='flex items-center justify-end gap-[7px]  mt-[10px]' onMouseEnter={handleMouseEnterMessageItem} onMouseLeave={handleMouseLeaveMessageItem}>
                {isShowActionMessag ? <div class='list-action-message flex gap-[5px]'>
                    {listActionMessage?.map((actionMessage, index) => {
                        return <button key={index} className='hover:bg-slate-200 p-[5px] rounded-[50%]'><img className='w-[15px] h-[15px]' src={actionMessage.icon} alt={actionMessage.text} /></button>
                    })}
                </div> : ''}
                <div className='max-w-[55%] bg-[#0084ff] text-white py-[8px] px-[13px] rounded-[18px]'>
                    {dataMessage?.content}
                </div>
                <img className='h-[30px] w-[30px] rounded-[50%]' src={dataMessage?.avatar} alt="" />
            </div>
        }
    }
    return <>
        {showComponent()}
    </>
}