import GoogleIcon from "@/assets/svg/Google.svg";
import ClapIcon from "@/assets/svg/Clap.svg";
import CreateIcon from "@/assets/svg/Create.svg";
import { Link } from "react-router-dom";
import { Checkbox, FormControlLabel } from "@mui/material";
export const FormRegister = () => {
    return <>
        <div className="flex-1 min-h-[600px] w-[600px] border border-sky-300 rounded-[40px] p-[20px] px-[30px]">
            <div className="flex justify-center items-center gap-[8px]">
                <div className="text-center font-semibold text-[30px]">
                    Tạo tài khoản mới
                </div>
                <img src={CreateIcon} alt="" />
            </div>
            <div className="text-center font-semibold">
                Nếu bạn đã có tài khoản, hãy đăng nhập <Link className="text-red-500" to="/auth/login">tại đây</Link> !
            </div>
            <div className="form mt-[20px] flex gap-[10px] flex-col">
                <input className="w-full py-[12px] px-[15px] outline-none border border-[#ADADAD] focus:border-sky-500 rounded-[20px]" placeholder="Tên người dùng(Username)" />
                <input className="w-full py-[12px] px-[15px] outline-none border border-[#ADADAD] focus:border-sky-500 rounded-[20px]" placeholder="Email hoặc số điện thoại" />
                <div className="flex justify-between">
                    <input type="password" className="w-[48%] py-[12px] px-[15px] outline-none border border-[#ADADAD] focus:border-sky-500 rounded-[20px]" placeholder="Mật khẩu" />
                    <input type="password" className="w-[48%] py-[12px] px-[15px] outline-none border border-[#ADADAD] focus:border-sky-500 rounded-[20px]" placeholder="Nhập lại mật khẩu" />
                </div>
                <select name="gender" id="gender" className="py-[12px] px-[15px] outline-none border border-[#ADADAD] focus:border-sky-500 rounded-[20px]">
                    <option value="0">Giới tính</option>
                    <option value="female">Nữ</option>
                    <option value="male">Nam</option>
                </select>
            </div>
            <div className="mt-[10px]">
                <button className="w-full p-[10px] bg-gradient-to-r from-[#2E94FF] to-[#2ED9FF] text-white rounded-[20px] text-[20px] font-bold">Đăng ký</button>
                <FormControlLabel required control={<Checkbox />} label={<span>
                    Bằng cách đăng ký, bạn đồng ý với các <Link to='/terms-and-policy' className="text-red-500 font-semibold underline" >điều khoản & chính sách</Link> của trang web chúng tôi.
                </span>}  className="mt-[15px]"/>
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