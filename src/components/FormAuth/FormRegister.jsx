import GoogleIcon from "@/assets/svg/Google.svg";
import ClapIcon from "@/assets/svg/Clap.svg";
import CreateIcon from "@/assets/svg/Create.svg";
import { Link } from "react-router-dom";
import { Checkbox, FormControl, FormControlLabel, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import APIAuth from "../../api/APIAuth";
import { NotificationManager } from "react-notifications";
import { useEffect, useState } from "react";
export const FormRegister = () => {
    const [dataRegister, setDataRegister] = useState({gender : 1});
    // tạo schema để validate
    const schema = yup.object({
        email: yup.string().email('Địa chỉ email không hợp lệ').max(100).required('Email là bắt buộc'),
        username : yup.string().max(100).required('Tên người dùng (username) là bắt buộc'),
        password: yup.string().min(6, 'Mật khẩu tối thiếu 6 ký tự').max(100).required('Mật khẩu là bắt buộc'),
        password_repeat: yup.string().min(6, 'Nhập lại mật khẩu tối thiếu 6 ký tự').max(100).required('Nhập lại mật khẩu là bắt buộc'),
        agreeTermAndPolicy : yup.boolean().oneOf([true], 'Bạn phải đồng ý với điều khoản và chính sách').required('Đồng ý với chính sách điều khoản của chúng tôi')
    }).required();
    const { register, handleSubmit, formState: { errors }, setFocus, reset } = useForm({
        criteriaMode: "all",
        mode : 'onSubmit',
        defaultValues: {
            gender : 1
        },
        resolver: yupResolver(schema)
    });
    const handleChangeRegister = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDataRegister({ ...dataRegister, [name]: value })
    }
    const handleRegister = async () => {
        try {
            const response = await APIAuth.register(dataRegister);
            if (response?.data?.meta?.statusCode === 200) {
                NotificationManager.success(response?.data?.meta?.message);
            } else {
            }
        } catch (error) {
            NotificationManager.error(error?.response?.data?.meta?.message);
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        setFocus('email');
    }, []);
    console.log(dataRegister);
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
            <TextField type="text" label="Email hoặc số điện thoại" sx={{ borderRadius : '20px' }} className="rounded-[20px]" fullWidth {...register('email')} name="email" value={dataRegister?.email} onChange={handleChangeRegister} error={errors?.email} helperText={errors?.email?.message} /> 
            <TextField type="text" label="Tên người dùng (username)" sx={{ borderRadius : '20px' }} className="rounded-[20px]" fullWidth {...register('username')} name="username" value={dataRegister?.username} onChange={handleChangeRegister} error={errors?.username} helperText={errors?.username?.message} /> 
                {/* <input className="w-full py-[12px] px-[15px] outline-none border border-[#ADADAD] focus:border-sky-500 rounded-[20px]" placeholder="Tên người dùng(Username)" />
                <input className="w-full py-[12px] px-[15px] outline-none border border-[#ADADAD] focus:border-sky-500 rounded-[20px]" placeholder="Email hoặc số điện thoại" /> */}
                <div className="flex justify-between">
                    <TextField type="password" label="Mật khẩu" sx={{ borderRadius : '20px', width : '48%' }} className="rounded-[20px]" fullWidth {...register('password')} name="password" value={dataRegister?.password} onChange={handleChangeRegister} error={errors?.password} helperText={errors?.password?.message} /> 
                    <TextField type="password" label="Nhập lại mật khẩu" sx={{ borderRadius : '20px',  width : '48%'  }} className="rounded-[20px]" fullWidth {...register('password_repeat')} name="password_repeat" value={dataRegister?.password_repeat} onChange={handleChangeRegister} error={errors?.password_repeat} helperText={errors?.password_repeat?.message} /> 
                </div>
                <FormControl sx={{ minWidth: 120 }} 
                                      error={errors?.gender?.message}
                                      {...register('gender')}
                                >
                                    <InputLabel id="demo-simple-select-error-label">Giới tính</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-error-label"
                                        id="demo-simple-select-error"
                                        value={dataRegister?.gender ? 1 : 0}
                                        label="Giới tính"
                                        onChange={(event) => {
                                            setDataRegister({ ...dataRegister, 'gender': event.target.value });
                                        }}
                                        name="gender"
                                        defaultValue={0}
                                    >
                                     <MenuItem key='1' value={1}>Nam</MenuItem>
                                     <MenuItem key='0' value={0}>Nữ</MenuItem>
                                    </Select>
                                    {errors?.gender && <FormHelperText error>{errors?.gender?.message}</FormHelperText>}
                                </FormControl>
            </div>
            <div className="mt-[10px]">
                <FormControlLabel  error={errors?.agreeTermAndPolicy} required control={<Checkbox {...register('agreeTermAndPolicy')} />} label={<span>
                    Bằng cách đăng ký, bạn đồng ý với các <Link to='/terms-and-policy' className="text-red-500 font-semibold underline" >điều khoản & chính sách</Link> của trang web chúng tôi.
                </span>}  className="mt-[15px]"/>
                {errors?.agreeTermAndPolicy && <FormHelperText error>{errors?.agreeTermAndPolicy?.message}</FormHelperText>}
                <button className="w-full p-[10px] mt-[5px] bg-gradient-to-r from-[#2E94FF] to-[#2ED9FF] text-white rounded-[20px] text-[20px] font-bold" onClick={handleSubmit(handleRegister)}>Đăng ký</button>
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