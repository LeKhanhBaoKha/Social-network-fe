import GoogleIcon from "@/assets/svg/Google.svg";
import ClapIcon from "@/assets/svg/Clap.svg";
import QuestionMarkIcon from "@/assets/svg/QuestionMark.svg";
import CreateIcon from "@/assets/svg/Create.svg";
import { Link, useLocation, useParams } from "react-router-dom";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import APIAuth from "../../api/APIAuth";
import { NotificationManager } from "react-notifications";
import { useEffect, useState } from "react";
export const FormResetPassword = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const [dataResetPassword, setDataResetPassword] = useState({});
    // tạo schema để validate
    const schema = yup.object({
        password: yup.string().min(6, 'Mật khẩu tối thiếu 6 ký tự').max(100).required('Mật khẩu là bắt buộc'),
        password_repeat: yup.string().oneOf([yup.ref('password')], 'Nhập lại mật khẩu không khớp')
        .min(6, 'Nhập lại mật khẩu tối thiếu 6 ký tự').max(100).required('Nhập lại mật khẩu là bắt buộc'),
    }).required();
    const { register, handleSubmit, formState: { errors }, setFocus, reset } = useForm({
        criteriaMode: "all",
        mode : 'onSubmit',
        defaultValues: {
        },
        resolver: yupResolver(schema)
    });
    const handleChangeResetPassword = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDataResetPassword({ ...dataResetPassword, [name]: value })
    }
    const handleResetPassword = async () => {
        try {
            const params = { token : token};
            const response = await APIAuth.resetPassword(dataResetPassword, params);
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
    console.log(dataResetPassword);
    return <>
        <div className="flex flex-col min-h-[calc(100%-60px)] m-auto w-[600px] border border-sky-300 rounded-[40px] p-[20px] px-[30px]">
            <div className="flex justify-center items-center gap-[8px]">
                <div className="text-center font-semibold text-[30px]">
                    Nhập mật khẩu mới
                </div>
                <img className="w-[35px] h-[35px]" src={QuestionMarkIcon} alt="" />
            </div>
            <div className="text-center font-semibold">Hãy nhập mật khẩu mới vào ô phía dưới, mật khẩu của bạn sẽ được đặt lại</div>
            <div className="text-center font-semibold">
                Nếu bạn đã có tài khoản, hãy đăng nhập <Link className="text-red-500" to="/auth/login">tại đây</Link> !
            </div>
            <div className="form mt-[20px] flex gap-[10px] flex-col">
                <TextField type="password" label="Mật khẩu mới" sx={{ borderRadius : '20px' }} className="rounded-[20px]" fullWidth {...register('password')} name="password" value={dataResetPassword?.password} onChange={handleChangeResetPassword} error={errors?.password} helperText={errors?.password?.message} /> 
                <TextField type="password" label="Nhập lại mật khẩu mới" sx={{ borderRadius : '20px' }} className="rounded-[20px]" fullWidth {...register('password_repeat')} name="password_repeat" value={dataResetPassword?.password_repeat} onChange={handleChangeResetPassword} error={errors?.password_repeat} helperText={errors?.password_repeat?.message} /> 
            </div>
            <div className="mt-[10px]">
                <button className="w-full p-[10px] bg-gradient-to-r from-[#2E94FF] to-[#2ED9FF] text-white rounded-[20px] text-[20px] font-bold" onClick={handleSubmit(handleResetPassword)}>Đổi mật khẩu</button>
            </div>
        </div>
    </>
}