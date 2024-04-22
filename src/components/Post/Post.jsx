import { useState } from "react"
import tigerImage from '../../assets/images/tiger.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import Batngo from '../../assets/svg/Batngo.svg';
import Buon from '../../assets/svg/Buon.svg';
import BuonCuoi from '../../assets/svg/BuonCuoi.svg';
import PhanNo from '../../assets/svg/PhanNo.svg';
import Thich from '../../assets/svg/Thich.svg';
import ThuongThuong from '../../assets/svg/ThuongThuong.svg';
import YeuThich from '../../assets/svg/YeuThich.svg';
import CommentButton from '../../assets/svg/CommentButton.svg';
import LikeButton from '../../assets/svg/LikeButton.svg';
import SaveButton from '../../assets/svg/SaveButton.svg';
import ShareButton from '../../assets/svg/ShareButton.svg';

const Post = () => {

    const reactions = [
        {
            name: "Like",
            svg: Thich
        },
        {
            name: "Phẫn nộ",
            svg: PhanNo
        },
        {
            name: "buồn",
            svg: Buon
        },
        {
            name: "Yêu thích",
            svg: YeuThich
        },
        {
            name: "thương thương",
            svg: ThuongThuong
        },
        {
            name: "bất ngờ",
            svg: Batngo
        },
        {
            name: "buồn cười",
            svg: BuonCuoi
        },
    ]

    return (
        <div className="w-[500px] h-[600px] border rounded-2xl">
            {/* postUser */}
            <div className="postUser flex justify-between ml-[12px] mt-[11px]">
                <div className="flex">
                    <div className="m-[10px] w-[40px] h-[40px] overflow-hidden rounded-full">
                        <img className="" src="https://m.media-amazon.com/images/M/MV5BMTc3MzY3MjQ3OV5BMl5BanBnXkFtZTcwODI3NjQxMw@@._V1_.jpg" alt="ảnh đại diện"></img>
                    </div>


                    <div className="my-[10px] flex flex-col">
                        <p className="">Name</p>
                        <p className="text-sm text-[#66676B]">Hôm qua lúc 14:23</p>
                    </div>
                </div>
                <div className="">
                    <svg className="mt-[38px] mr-[35px]" width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2ZM14 4C15.1046 4 16 3.10457 16 2C16 0.895431 15.1046 0 14 0C12.8954 0 12 0.895431 12 2C12 3.10457 12.8954 4 14 4Z" fill="#8C939C" />
                    </svg>
                </div>
            </div>
            {/* end postUser */}

            {/* textContent */}
            <div className="textContent w-[457px] h-[71px] mx-[20px]">
                <p>
                    Xin chào mọi người mình là Nguyễn Duy Hiện.<br />
                    Rất vui khi được làm quen với mọi người.<br />
                    <b>#facebook #moichoifacebook #fb #duyhien</b>
                </p>
            </div>
            {/* endtextContent */}

            {/* content */}
            <div className="my-[13px] content max-w-[500px] max-h-[400px]">
                <img src={tigerImage} alt="content"></img>
            </div>
            {/* end content */}

            {/* reatcions */}
            <div className="reaction flex flex-row text-[#66676B] justify-between mx-[17px] pb-[9px] border-b">
                <div className="flex">
                    {reactions.map(({ name, svg }) => (
                        <div key={name}>
                            <img src={svg} alt=""></img>
                        </div>
                    ))}
                    <p className="text-sm mt-[1px]">Name và 410 người khác</p>
                </div>
                <p className="text-sm mt-[px]">
                    333 <FontAwesomeIcon icon={faComment} /> 100 <FontAwesomeIcon icon={faShare} />
                </p>
            </div>
            {/* end reactions */}

            {/* button */}
            <div className="button w-[464px] h-[44px] flex justify-between text-[#66676B] mx-[17px] border-b">
                <div className="w-[111px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
                    <button className="flex flex-row gap-[5px]">
                        <img src={LikeButton} alt=""></img>
                        <p className="text-sm mt-[1px]">Thích</p>
                    </button>
                </div>
                <div className="w-[111px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
                    <button className="flex flex-row gap-[5px]">
                        <img className="mt-[2px]" src={CommentButton} alt=""></img>
                        <p className="text-sm mt-[1px]">Bình luận</p>
                    </button>
                </div>
                <div className="w-[111px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
                    <button className="flex flex-row gap-[5px]">

                        <img src={ShareButton} alt=""></img>

                        <p className="text-sm mt-[1px]">Chia sẻ</p>
                    </button>
                </div>
                <div className="w-[111px] h-[30px] my-auto flex justify-center items-center hover:bg-[#E6E6E6] transition-all rounded-lg">
                    <button className="flex flex-row gap-[5px] ">
                        <img className="mt-[2px]" src={SaveButton} alt=""></img>
                        <p className="text-sm mt-[1px]">Lưu bài</p>
                    </button>
                </div>
            </div>
            {/* end button */}
        </div>
    )
}
export default Post