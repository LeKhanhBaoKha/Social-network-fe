import ThreeDotIcon from '@/assets/svg/ThreeDot.svg';
import { useEffect, useState } from 'react';
import ForestImage from '@/assets/images/forest.png';
import ForestAuthumn from '@/assets/images/forestAutumn.png';
import DaLat from '@/assets/images/dalat.png';
import { emptyArray } from '../../utils/array';
export const PopupMesssage = ({ className }) => {
    let tabs = ['Tất cả', 'Đã đọc', 'Chưa đọc'];
    const [listMessage, setListMessage] = useState([
        {
            'avatar': DaLat,
            'message': 'T có chuyện mới nek, muốn nghe hông cục cưng !',
            time: '5 giờ',
            isRead: 0,
            fullName: 'Nguyễn Kiến Thức'
        },
        {
            'avatar': ForestImage,
            'message': 't mới đăng ảnh lên like dùm cái coi, cục cưng của anh',
            time: '1 ngày',
            typeMessage: '1',
            isRead: 0,
            fullName: 'Lê Văn Đào'
        },
        {
            'avatar': ForestAuthumn,
            'message': 'Dạo này thấy tui đẹp hem bạn ê',
            time: '3 ngày',
            typeMessage: '1',
            isRead: 0,
            fullName: 'Nguyễn Xinh Đẹp'
        },
        {
            'avatar': DaLat,
            'message': 'T có chuyện mới nek, muốn nghe hông cục cưng !',
            time: '5 giờ',
            isRead: 0,
            fullName: 'Nguyễn Kiến Thức'
        },
        {
            'avatar': ForestImage,
            'message': 't mới đăng ảnh lên like dùm cái coi, cục cưng của anh',
            time: '1 ngày',
            typeMessage: '1',
            isRead: 0,
            fullName: 'Lê Văn Đào'
        },
        {
            'avatar': ForestAuthumn,
            'message': 'Dạo này thấy tui đẹp hem bạn ê',
            time: '3 ngày',
            typeMessage: '1',
            isRead: 0,
            fullName: 'Nguyễn Xinh Đẹp'
        },
        {
            'avatar': DaLat,
            'message': 'T có chuyện mới nek, muốn nghe hông cục cưng !',
            time: '5 giờ',
            isRead: 0,
            fullName: 'Nguyễn Kiến Thức'
        },
        {
            'avatar': ForestImage,
            'message': 't mới đăng ảnh lên like dùm cái coi, cục cưng của anh',
            time: '1 ngày',
            typeMessage: '1',
            isRead: 0,
            fullName: 'Lê Văn Đào'
        },
        {
            'avatar': ForestAuthumn,
            'message': 'Dạo này thấy tui đẹp hem bạn ê',
            time: '3 ngày',
            typeMessage: '1',
            isRead: 1,
            fullName: 'Nguyễn Xinh Đẹp'
        },
        {
            'avatar': DaLat,
            'message': 'T có chuyện mới nek, muốn nghe hông cục cưng !',
            time: '5 giờ',
            isRead: 0,
            fullName: 'Nguyễn Kiến Thức'
        },
        {
            'avatar': ForestImage,
            'message': 't mới đăng ảnh lên like dùm cái coi, cục cưng của anh',
            time: '1 ngày',
            typeMessage: '1',
            isRead: 1,
            fullName: 'Lê Văn Đào'
        },
        {
            'avatar': ForestAuthumn,
            'message': 'Dạo này thấy tui đẹp hem bạn ê',
            time: '3 ngày',
            typeMessage: '1',
            isRead: 0,
            fullName: 'Nguyễn Xinh Đẹp'
        },
    ])
    const [listMessageShow, setListMessageShow] = useState([]);
    const [tabActive, setTabActive] = useState(0);
    const [searchMessage, setSearchMessage] = useState('');
    const handleSearch = (e) => {
        const str = e.target.value;
        const trimmedStr = str.replace(/\s+/g, ' ');
        setSearchMessage(trimmedStr);
        console.log(trimmedStr);
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
        let listMessage1 = [...listMessage];
        listMessage1[index].isRead = 1;
        setListMessage(listMessage1);
    }
    const filterMessage = (tabActive) => {
        if (tabActive === 0) {
            return listMessage;
        }
        else if (tabActive === 1) {
            return listMessage.filter(notify => notify.isRead === 1);
        }
        else if (tabActive === 2) {
            return listMessage.filter(notify => notify.isRead === 0);
        }
    }
    const filterMessageBySearch = (searchMessage) => {
        if(searchMessage)
        {
            if (tabActive === 0) {
                return listMessage.filter(notify => notify.fullName.toLowerCase().includes(searchMessage.toLowerCase()));
            }
            else if (tabActive === 1) {
                return listMessage.filter(notify => notify.fullName.toLowerCase().includes(searchMessage.toLowerCase()) && notify.isRead === 1);
            }
            else if (tabActive === 2) {
                return listMessage.filter(notify => notify.fullName.toLowerCase().includes(searchMessage.toLowerCase()) && notify.isRead === 0);
            }
        }
        else
        {
            return filterMessage(tabActive);
        }
    };
    useState(() => {
        setListMessageShow(filterMessage(tabActive))
    }, [])
    const [isOpenSettingMessage, setIsOpenSettingMessage] = useState(false);
    return <div className={`popup-message h-[600px] w-[400px] px-[20px] py-[12px] pr-[20px] rounded-[20px] overflow-y-auto ${className}`}>
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
            {emptyArray(listMessageShow) ? <div className='text-center font-medium text-[24px]'>Chưa có tin nhắn nào hết nek !</div> : ''}
            {listMessageShow?.map((notify, index) => {
                return <div className={`flex w-full gap-[8px] justify-between mb-[10px] items-center p-[5px] hover:bg-[#e2e8f0] rounded-[7px]`} onClick={() => handleClickMessage(index)}>
                    <div className='flex gap-[10px] items-center'>
                        <img className='w-[60px] h-[60px] rounded-[50%] shrink' src={notify?.avatar} alt='' />
                        <div>
                            <div className='line-clamp-1 overflow-hidden font-bold'>
                                {notify?.fullName}
                            </div>
                            <div className={`line-clamp-1 overflow-hidden ${!notify.isRead ? 'font-semibold' : ''} text-[14px]`}>
                                {notify?.message}
                            </div>
                        </div>
                    </div>
                    <div className={`rounded-[50%] shrink-0 ${!notify.isRead ? '' : ''}`}>
                        <div className='text-[#0866FF] font-semibold text-[14px]'>
                            {notify?.time}
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
};