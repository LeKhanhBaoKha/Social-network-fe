import GoogleIcon from "@/assets/svg/Google.svg";
import ClapIcon from "@/assets/svg/Clap.svg";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { NotificationManager } from 'react-notifications';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../app/userSlice";

export const FormLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dataLogin, setDataLogin] = useState("");
    // tạo schema để validate
    const schema = yup.object({
        email: yup.string().email('Địa chỉ email không hợp lệ').max(100).required('Email là bắt buộc'),
        password: yup.string().min(6, 'Mật khẩu tối thiếu 6 ký tự').max(100).required('Mật khẩu là bắt buộc'),
    }).required();
    const { register, handleSubmit, formState: { errors }, setFocus, reset } = useForm({
        criteriaMode: "all",
        mode : 'onSubmit',
        defaultValues: {
        },
        resolver: yupResolver(schema)
    });
    const handleChangeLogin = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDataLogin({ ...dataLogin, [name]: value })
    }
    const handleLogin = async () => {
        dispatch(login(dataLogin))
        .unwrap()
        .then(() => {
          // Xử lý thành công đăng nhập
          navigate('/');
        })
        .catch((error) => {
          // Xử lý lỗi đăng nhập
          console.error('Lỗi đăng nhập:', error);
        });
  
    }
    useEffect(() => {
        setFocus('email');
    }, []);
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
            <TextField type="text" label="Email hoặc số điện thoại" sx={{ borderRadius : '20px' }} className="rounded-[20px]" fullWidth {...register('email')} name="email" value={dataLogin?.email} onChange={handleChangeLogin} error={errors?.email}
                helperText={errors?.email?.message} /> 
                {/* <input className="w-full py-[12px] px-[15px] outline-none border border-[#ADADAD] focus:border-sky-500 rounded-[20px]" placeholder="Email hoặc số điện thoại" name="email" onChange={handleChangeLogin} {...register('email')}/> */}
                <TextField type="password" label="Mật khẩu" sx={{ borderRadius : '20px', marginTop : '15px' }} fullWidth {...register('password')} name="password" value={dataLogin?.password} onChange={handleChangeLogin} error={errors?.password}
                helperText={errors?.password?.message} /> 
                {/* <input type="password" className="w-full py-[12px] px-[15px] outline-none border border-[#ADADAD] focus:border-sky-500 rounded-[20px] mt-[15px]" placeholder="Mật khẩu" name="password" onChange={handleChangeLogin} {...register('password')} /> */}
                <div className="flex justify-between mt-[10px] items-center">
                    <FormControlLabel control={<Checkbox />} label={<span>
                        Ghi nhớ đăng nhập.
                    </span>} />
                    <div className="text-red-600 font-bold"><Link to="/auth/forgot-password">Quên mật khẩu ?</Link></div>
                </div>
            </div>
            <div className="mt-[20px]">
                <button className="w-full p-[10px] bg-gradient-to-r from-[#2E94FF] to-[#2ED9FF] text-white rounded-[20px] text-[20px] font-bold" onClick={handleSubmit(handleLogin)}>Đăng nhập</button>
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