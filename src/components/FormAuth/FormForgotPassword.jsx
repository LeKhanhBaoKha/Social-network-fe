import GoogleIcon from "@/assets/svg/Google.svg";
import ClapIcon from "@/assets/svg/Clap.svg";
import QuestionMarkIcon from "@/assets/svg/QuestionMark.svg";
import CreateIcon from "@/assets/svg/Create.svg";
import { Link } from "react-router-dom";
import { Checkbox, FormControlLabel } from "@mui/material";
export const FormForgotPassword = () => {
    return <>
        <div className="flex flex-col min-h-[calc(100%-60px)] m-auto w-[600px] border border-sky-300 rounded-[40px] p-[20px] px-[30px]">
            <div className="flex justify-center items-center gap-[8px]">
                <div className="text-center font-semibold text-[30px]">
                    Quên mật khẩu
                </div>
                <img className="w-[35px] h-[35px]" src={QuestionMarkIcon} alt="" />
            </div>
            <div className="text-center font-semibold">Đừng lo, hãy nhập địa chỉ email vào ô bên dưới, chúng tôi sẽ gửi cho bạn mã xác nhận để đặt lại mật khẩu</div>
            <div className="text-center font-semibold">
                Nếu bạn đã có tài khoản, hãy đăng nhập <Link className="text-red-500" to="/auth/login">tại đây</Link> !
            </div>
            <div className="form mt-[20px] flex gap-[10px] flex-col">
                <input className="w-full py-[12px] px-[15px] outline-none border border-[#ADADAD] focus:border-sky-500 rounded-[20px]" placeholder="Địa chỉ email của bạn" />
            </div>
            <div className="mt-[10px]">
                <button className="w-full p-[10px] bg-gradient-to-r from-[#2E94FF] to-[#2ED9FF] text-white rounded-[20px] text-[20px] font-bold">Đặt lại mật khẩu</button>
            </div>
        </div>
    </>
}