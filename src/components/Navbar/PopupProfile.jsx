import ForestAuthumn from '@/assets/images/forestAutumn.png';
import FeedbackIcon from '@/assets/svg/Feedback.svg';
import TurnOffIcon from '@/assets/svg/TurnOff.svg';
import SettingIcon from '@/assets/svg/Setting.svg';

export const PopupProfile = ({className}) => { 
    const listOption = [
        {
            text : 'Cài đặt chung',
            link : '',
            icon : SettingIcon
        },
        {
            text : 'Ý kiến phản hồi ứng dụng',
            link : '',
            icon : FeedbackIcon
        },
        {
            text : 'Chế độ tối',
            link : '',
            icon : FeedbackIcon
        },
        {
            text : 'Đăng xuất tài khoản',
            link : '',
            icon : TurnOffIcon
        },
    ]
    return  <div className={`popup-profile message h-[600px] w-[400px] px-[10px] py-[12px] pr-[20px] rounded-[20px] overflow-y-auto ${className}`}>
            <div className='flex items-center gap-[15px]'>
                <img className='w-[60px] h-[60px] rounded-[50%]' src={ForestAuthumn} alt="Nguyễn Duy Hiện" />
                <div className='text-[20px] font-semibold'>Nguyễn Duy Hiện</div>
            </div>
            <div className='mt-[20px] flex flex-col'>
                {listOption?.map((option ,index) => {
                    return <div key={index} className='flex gap-[10px] items-center py-[12px] px-[10px] hover:bg-slate-100 rounded-[20px]'>
                        <img className='w-[30px] h-[30px]' src={option?.icon} alt='Icon' />
                        <div>{option?.text}</div>
                    </div>
                })}
            </div>
            <div>

            </div>
        </div>
}