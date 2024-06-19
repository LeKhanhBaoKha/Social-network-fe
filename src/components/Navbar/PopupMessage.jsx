import ThreeDotIcon from '@/assets/svg/ThreeDot.svg';
import { useEffect, useState } from 'react';
import ForestImage from '@/assets/images/forest.png';
import ForestAuthumn from '@/assets/images/forestAutumn.png';
import DaLat from '@/assets/images/dalat.png';
import { emptyArray } from '../../utils/array';
import { PopupMessageDetail } from './PopupMessageDetail';
import { useDispatch, useSelector } from 'react-redux';
import { addChatbox, updateAllConversation } from '../../app/chatSlice';
import APIConversation from '../../api/APIConversation';
import { isArray, update } from 'lodash';
export const PopupMesssage = ({ className }) => { 
    const dispatch = useDispatch();
    const listConversation = useSelector(state => state?.chat?.conversations)
    const chat = useSelector(state => state.chat);
    let tabs = ['Tất cả', 'Đã đọc', 'Chưa đọc'];
    const [listConversationShow, setListMessageShow] = useState([]);
    const [tabActive, setTabActive] = useState(0);
    const [searchMessage, setSearchMessage] = useState('');
    const handleSearch = (e) => {
        const str = e.target.value;
        const trimmedStr = str.replace(/\s+/g, ' ');
        setSearchMessage(trimmedStr);
        if (trimmedStr) {
            setListMessageShow(filterMessageBySearch(trimmedStr))
        }
        else {
            setListMessageShow(filterMessage(tabActive))
        }
    }
    const handleClickTab = (index) => {
        setTabActive(index);
        if (searchMessage) {
            setListMessageShow(filterMessageBySearch(searchMessage))
        }
        else {
            setListMessageShow(filterMessage(tabActive))
        }
    }
    const handleClickMessage = (index) => {
        let listConversation1 = [...listConversation];
        // listConversation1[index].isRead = 1;
        if (!chat?.chatboxs?.includes(index)) {
            dispatch(addChatbox(index));        
        }
    }
    const filterMessage = (tabActive) => {
        if (tabActive === 0) {
            return listConversation;
        }
        else if (tabActive === 1) {
            return listConversation.filter(notify => notify.isRead === 1);
        }
        else if (tabActive === 2) {
            return listConversation.filter(notify => notify.isRead === 0);
        }
    }
    const filterMessageBySearch = (searchMessage) => {
        if(searchMessage)
        {
            if (tabActive === 0) {
                return listConversation.filter(notify => notify.fullName.toLowerCase().includes(searchMessage.toLowerCase()));
            }
            else if (tabActive === 1) {
                return listConversation.filter(notify => notify.fullName.toLowerCase().includes(searchMessage.toLowerCase()) && notify.isRead === 1);
            }
            else if (tabActive === 2) {
                return listConversation.filter(notify => notify.fullName.toLowerCase().includes(searchMessage.toLowerCase()) && notify.isRead === 0);
            }
        }
        else
        {
            return filterMessage(tabActive);
        }
    };
    const handleGetAllConversation = async () => {
        try {
            const response = await APIConversation.getAllConversationByUser();
            if (response?.data?.meta?.statusCode === 200) {
                dispatch(updateAllConversation(response?.data?.data));
            } else {
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        setListMessageShow(filterMessage(tabActive));
        handleGetAllConversation();
    }, []);
    const [isOpenSettingMessage, setIsOpenSettingMessage] = useState(false);
    console.log(listConversation);
    return <>
        <div className={`popup-message h-[600px] w-[400px] px-[20px] py-[12px] pr-[20px] rounded-[20px] overflow-y-auto ${className} z-[93] bg-white`}>
        <div className='flex justify-between'>
            <div className="text-[28px] font-semibold">
                Tin nhắn
            </div>
            <button>
                <img src={ThreeDotIcon} alt="Xem thêm" />
                <div className='read-more-notify'>

                </div>
            </button>
        </div>
        <div className='my-[10px]'>
            <input className='w-full outline-none text-[18px] h-[50px] bg-[#f1f5f9] pl-[15px] rounded-[20px]' placeholder='Nhập gì đó để tìm kiếm tin nhắn ...' onChange={(e) => handleSearch(e)} value={searchMessage || ''} />
        </div>
        <div className='flex justify-evenly'>
            {tabs?.map((tab, index) => {
                return <button key={index} className={`${tabActive === index ? 'bg-[#EBF5FF] text-[#0064D1]' : ''} px-[25px] py-[10px] rounded-[18px] text-[#000] font-semibold`} onClick={() => handleClickTab(index)}>
                    {tab}
                </button>
            })}
        </div>
        <div className='mt-[15px]'>
            {/* {emptyArray(listConversation) ? <div className='text-center font-medium text-[24px]'>Chưa có tin nhắn nào hết nek !</div> : ''} */}
            {isArray(listConversation) && listConversation?.map((conversationItem, index) => {
                return <div className={`flex w-full gap-[8px] justify-between mb-[10px] items-center p-[5px] hover:bg-[#e2e8f0] rounded-[7px]`} onClick={() => handleClickMessage(index)}>
                    <div className='flex gap-[10px] items-center'>
                        <img className='w-[60px] h-[60px] rounded-[50%] shrink' src={conversationItem?.other_user?.avatar} alt='' />
                        <div>
                            <div className='line-clamp-1 overflow-hidden font-bold'>
                                {conversationItem?.other_user?.nickname ||  conversationItem?.other_user?.last_name}
                            </div>
                            <div className={`line-clamp-1 overflow-hidden ${!conversationItem.isRead ? 'font-semibold' : ''} text-[14px]`}>
                                {conversationItem?.last_message?.user_id_from === conversationItem?.current_user?.id ? 'Bạn: ' : ''} {conversationItem?.last_message?.content}
                            </div>
                        </div>
                    </div>
                    <div className={`rounded-[50%] shrink-0 ${!conversationItem?.isRead ? '' : ''}`}>
                        <div className='text-[#0866FF] font-semibold text-[14px]'>
                            {conversationItem?.time}
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
    </>
};