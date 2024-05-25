import GoogleIcon from "@/assets/svg/Google.svg";
import ClapIcon from "@/assets/svg/Clap.svg";
import { Link } from "react-router-dom";
import { Checkbox, FormControlLabel } from "@mui/material";

export const FormLogin = () => {
    return <>
            <div className="h-[600px] w-[600px] border border-sky-300 rounded-[40px] p-[20px] px-[30px]">
                <div className="flex justify-center items-center gap-[8px]">
                <div className="text-center font-semibold text-[30px]">
                    Chào mừng quay trở lại
                </div>
                <img src={ClapIcon} alt="" />
                </div>
                <div className="text-center font-semibold">
                    Nếu bạn chưa có tài khoản, hãy tạo tài khoản <Link className="text-red-500" to="/auth/register">tại đây</Link> ! 
                </div>
                <div className="form mt-[20px]">
                    <input className="w-full py-[12px] px-[15px] outline-none border border-[#ADADAD] focus:border-sky-500 rounded-[20px]" placeholder="Email hoặc số điện thoại" />
                    <input type="password" className="w-full py-[12px] px-[15px] outline-none border border-[#ADADAD] focus:border-sky-500 rounded-[20px] mt-[15px]" placeholder="Mật khẩu" />
                    <div className="flex justify-between mt-[10px] items-center">
                    <FormControlLabel control={<Checkbox />} label={<span>
                   Ghi nhớ đăng nhập.
                </span>}/>
                        <div className="text-red-600 font-bold"><Link to="/auth/forgot-password">Quên mật khẩu ?</Link></div>
                    </div>
                </div>
                <div className="mt-[20px]">
                    <button className="w-full p-[10px] bg-gradient-to-r from-[#2E94FF] to-[#2ED9FF] text-white rounded-[20px] text-[20px] font-bold">Đăng nhập</button>
                    <div className="flex items-center justify-between mt-[15px]">
                        <div className="h-[1px] bg-black w-[40%]"></div>
                        <div>Hoặc</div>
                        <div className="h-[1px] bg-black w-[40%]"></div>
                    </div>
                    <button className="w-full p-[10px] border border-[#ADADAD] text-black rounded-[20px] text-[20px] mt-[15px] flex items-center justify-center gap-[8px]"><img className='w-[24px] h-[24px]' src={GoogleIcon} alt="Đăng nhập với Google" /> <div> Đăng nhập với Google</div> </button>
                </div>
            </div>
    </>
}