import ThreeDotIcon from '@/assets/svg/ThreeDot.svg';
import { useEffect, useState } from 'react';
import ForestImage from '@/assets/images/forest.png';
import ForestAuthumn from '@/assets/images/forestAutumn.png';
import { emptyArray } from '../../utils/array';
export const PopupNotify = ({className}) => {
    let tabs = ['Tất cả', 'Đã đọc', 'Chưa đọc'];
    const [listNotify, setListNotify] = useState([
        {
            'avatar': 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/279222138_1094383501289669_1925519131146820337_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sO35bwUBnWQQ7kNvgFn_tZT&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYCu-xsgauAhq9dtfTLFY5dDanFt2C_Kg0Fn3aI1qQK7Ag&oe=66494836',
            'title': 'Chấn động nha quý dị, Sale toàn cầu, giảm giá đến 90%, nhanh tay nào',
            time: '5 giờ trước',
            typeNotify: '1',
            isRead: 0
        },
        {
            'avatar': ForestImage,
            'title': 'Nguyễn Văn A đã đăng một tấm ảnh mới :v',
            time: '1 ngày trước',
            typeNotify: '1',
            isRead: 0
        },
        {
            'avatar': ForestAuthumn,
            'title': 'Ngôi sao hạng A đã đăng bài viết mới : "Mùa thu đẹp quá mọi người ơi',
            time: '25 giờ trước',
            typeNotify: '1',
            isRead: 1
        },
        {
            'avatar': 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/279222138_1094383501289669_1925519131146820337_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sO35bwUBnWQQ7kNvgFn_tZT&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYCu-xsgauAhq9dtfTLFY5dDanFt2C_Kg0Fn3aI1qQK7Ag&oe=66494836',
            'title': 'Chị A vừa mới đăng tin mới, bạn hãy vô xem và cho đánh giá ngay nhé',
            time: '15 giờ trước',
            typeNotify: '1',
            isRead: 1
        },
        {
            'avatar': 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/279222138_1094383501289669_1925519131146820337_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sO35bwUBnWQQ7kNvgFn_tZT&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYCu-xsgauAhq9dtfTLFY5dDanFt2C_Kg0Fn3aI1qQK7Ag&oe=66494836',
            'title': 'Chấn động nha quý dị, Sale toàn cầu, giảm giá đến 90%, nhanh tay nào',
            time: '5 giờ trước',
            typeNotify: '1',
            isRead: 0
        },
        {
            'avatar': ForestImage,
            'title': 'Nguyễn Văn A đã đăng một tấm ảnh mới :v',
            time: '1 ngày trước',
            typeNotify: '1',
            isRead: 0
        },
        {
            'avatar': ForestAuthumn,
            'title': 'Ngôi sao hạng A đã đăng bài viết mới : "Mùa thu đẹp quá mọi người ơi',
            time: '25 giờ trước',
            typeNotify: '1',
            isRead: 1
        },
        {
            'avatar': 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/279222138_1094383501289669_1925519131146820337_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sO35bwUBnWQQ7kNvgFn_tZT&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYCu-xsgauAhq9dtfTLFY5dDanFt2C_Kg0Fn3aI1qQK7Ag&oe=66494836',
            'title': 'Chị A vừa mới đăng tin mới, bạn hãy vô xem và cho đánh giá ngay nhé',
            time: '15 giờ trước',
            typeNotify: '1',
            isRead: 1
        },
        {
            'avatar': 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/279222138_1094383501289669_1925519131146820337_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sO35bwUBnWQQ7kNvgFn_tZT&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYCu-xsgauAhq9dtfTLFY5dDanFt2C_Kg0Fn3aI1qQK7Ag&oe=66494836',
            'title': 'Chấn động nha quý dị, Sale toàn cầu, giảm giá đến 90%, nhanh tay nào',
            time: '5 giờ trước',
            typeNotify: '1',
            isRead: 0
        },
        {
            'avatar': ForestImage,
            'title': 'Nguyễn Văn A đã đăng một tấm ảnh mới :v',
            time: '1 ngày trước',
            typeNotify: '1',
            isRead: 0
        },
        {
            'avatar': ForestAuthumn,
            'title': 'Ngôi sao hạng A đã đăng bài viết mới : "Mùa thu đẹp quá mọi người ơi',
            time: '25 giờ trước',
            typeNotify: '1',
            isRead: 1
        },
        {
            'avatar': 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/279222138_1094383501289669_1925519131146820337_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sO35bwUBnWQQ7kNvgFn_tZT&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYCu-xsgauAhq9dtfTLFY5dDanFt2C_Kg0Fn3aI1qQK7Ag&oe=66494836',
            'title': 'Chị A vừa mới đăng tin mới, bạn hãy vô xem và cho đánh giá ngay nhé',
            time: '15 giờ trước',
            typeNotify: '1',
            isRead: 1
        },
    ])
    const [tabActive, setTabActive] = useState(0);
    const handleClickTab = (index) => {
        setTabActive(index);
    }
    const handleClickNotify = (index) => {
        let listNotify1 = [...listNotify];
        listNotify1[index].isRead = 1;
        setListNotify(listNotify1);
    }
    const filterNotify = (tabActive) => {
            if (tabActive === 0) {
                return listNotify;
            }
            else if (tabActive === 1) {
                    return listNotify.filter(notify => notify.isRead === 1);
            }
            else if (tabActive === 2) {
                    return listNotify.filter(notify => notify.isRead === 0);
            }
    }
    const [isOpenSettingNotify, setIsOpenSettingNotify] = useState(false);
    return <div className={`popup-message h-[600px] w-[400px] px-[10px] py-[12px] pr-[20px] rounded-[20px] overflow-y-auto ${className}`}>
        <div className='flex justify-between'>
            <div className="text-[28px] font-semibold">
                Thông báo
            </div>
            <button>
            <img src={ThreeDotIcon} alt="Xem thêm" />
            <div className='read-more-notify'>

            </div>
            </button>
        </div>
        <div className='flex justify-evenly'>
            {tabs?.map((tab, index) => {
                return <button key={index} className={`${tabActive === index ? 'bg-[#EBF5FF] text-[#0064D1]' : ''} px-[25px] py-[10px] rounded-[18px] text-[#000] font-semibold`} onClick={() => handleClickTab(index)}>
                    {tab}
                </button>
            })}
        </div>
        <div className='mt-[15px]'>
            {emptyArray(filterNotify(tabActive)) ? <div className='text-center font-medium text-[24px]'>Chưa có thông báo nào hết nek !</div> : ''}
            {filterNotify(tabActive)?.map((notify, index) => {
                return <div className={`flex w-full gap-[8px] mb-[10px] items-center p-[5px] hover:bg-[#e2e8f0] rounded-[7px] ${notify.isRead ? 'opacity-65' : ''}`} onClick={() => handleClickNotify(index)}>
                    <img className='w-[50px] h-[50px] rounded-[50%] shrink' src={notify?.avatar} alt='' />
                    <div>
                        <div>
                            {notify?.title}
                        </div>
                            <div className='text-[#0866FF] font-semibold text-[14px]'>
                            {notify.time}
                        </div>
                    </div>
                    <div className={`w-[13px] h-[13px] rounded-[50%] shrink-0 ${!notify.isRead ? 'bg-[#0866FF]' : ''}`}>
                    </div>
                </div>
            })}
        </div>
    </div>
};