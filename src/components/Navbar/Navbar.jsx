import LogoSocial from '@/assets/svg/LogoSocial.svg'
import MessageIcon from '@/assets/svg/Message2.svg';
import NotifiIcon from '@/assets/svg/Notify.svg';
import DropdownIcon from '@/assets/svg/Dropdown.svg';
import Avatar from '@/assets/images/avatar2.png'
import { PopupNotify } from './PopupNotify';
import { useState } from 'react';
import { PopupMesssage } from './PopupMessage';
import { PopupProfile } from './PopupProfile';
export const Navbar = () => {
  const [tabActive, setTabActive] = useState();
  const handleTabActive = (index) => {
    console.log(isShowPopup);
    if (tabActive !== index) {
      setTabActive(index);
      setIsShowPopup(true);
    } else {
      setIsShowPopup(!isShowPopup);
    }
  }
    const [isShowPopup, setIsShowPopup] = useState(false);
    const showPopup = () => {
        if(isShowPopup)
            {
                let className = 'absolute top-[40px] right-[40px] shadow-2xl scrollbar'
                switch (tabActive) {
                    case 0 : {
                        return <PopupMesssage className={`${className}`}></PopupMesssage>
                    }
                    case 1  : {
                        return  <PopupNotify className={`${className}`}></PopupNotify>
                    }
                    case 2 : {
                        return <PopupProfile className={`${className}`}></PopupProfile>
                    }
                    default : {
                        return <></>
                    }
                }
            }
    }
    return ( <div className="navbar flex justify-between px-4 pr-[40px] pt-[12px] pb-[12px] items-center">
        <div className="logo">
            <img src={LogoSocial} alt="Logo mạng xã hội" />
        </div>
        <div>
            <input className='w-[500px] h-[60px] outline-none bg-slate-100 rounded-[20px] pl-[28px] pr-[28px]' placeholder='Tìm kiếm mọi người, trang, nhóm và hashtag ...' />
        </div>
        <div className='flex items-center gap-[20px]'>
            <button className="message bg-gradient-to-r from-[#EDFDFF] to-[#A7F5FF] w-[50px] h-[50px] relative rounded-[20px]" onClick={() => handleTabActive(0)}>
                <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={MessageIcon} alt='Tin nhắn' />
                <button className='badge absolute top-[-5px] right-[1px] bg-[#DE3F4F] w-[20px] h-[20px] rounded-[50%] text-center align-middle text-white text-[12px]'>2</button>
            </button>
            <button className="notification bg-gradient-to-r from-[#F4FFCA] to-[#E2FA84] w-[50px] h-[50px] relative rounded-[25px]" onClick={() => handleTabActive(1)}>
                <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={NotifiIcon} alt="Thông báo" />
                <button className='badge absolute top-[-5px] right-[1px] bg-[#DE3F4F] w-[20px] h-[20px] rounded-[50%] text-center align-middle text-white text-[12px] font-semibold'>5+</button>
            </button>
            <button className="avatar flex items-center gap-[15px]" onClick={() => handleTabActive(2)}>
                <img src={Avatar} alt='Ảnh đại diện' className='w-[50px] h-[50px] rounded-[50%]'/>
                <div className='font-semibold'>Chào, Hiện !<img className='inline-block ml-[15px]' src={DropdownIcon} alt='' /></div>
            </button>
            <div className='relative'>
            {showPopup()}
            </div>
        </div>
    </div>
  );
};
