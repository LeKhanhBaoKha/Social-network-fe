import GoogleIcon from "@/assets/svg/Google.svg";
import ClapIcon from "@/assets/svg/Clap.svg";
import QuestionMarkIcon from "@/assets/svg/QuestionMark.svg";
import CreateIcon from "@/assets/svg/Create.svg";
import { Link } from "react-router-dom";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import APIAuth from "../../api/APIAuth";
import { NotificationManager } from "react-notifications";
import { useEffect, useState } from "react";
export const FormForgotPassword = () => {
    const [dataForgotPassword, setDataForgotPassword] = useState({});
    // tạo schema để validate
    const schema = yup.object({
        email: yup.string().email('Địa chỉ email không hợp lệ').max(100).required('Email là bắt buộc'),
    }).required();
    const { register, handleSubmit, formState: { errors }, setFocus, reset } = useForm({
        criteriaMode: "all",
        mode : 'onSubmit',
        defaultValues: {
            gender : 1
        },
        resolver: yupResolver(schema)
    });
    const handleChangeForgotPassword = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDataForgotPassword({ ...dataForgotPassword, [name]: value })
    }
    const handleForgotPassword = async () => {
        try {
            const response = await APIAuth.forgotPassword(dataForgotPassword);
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
    // console.log(dataForgotPassword);
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
                <TextField type="text" label="Email của bạn" sx={{ borderRadius : '20px' }} className="rounded-[20px]" fullWidth {...register('email')} name="email" value={dataForgotPassword?.email} onChange={handleChangeForgotPassword} error={errors?.email} helperText={errors?.email?.message} /> 
            </div>
            <div className="mt-[10px]">
                <button className="w-full p-[10px] bg-gradient-to-r from-[#2E94FF] to-[#2ED9FF] text-white rounded-[20px] text-[20px] font-bold" onClick={handleSubmit(handleForgotPassword)}>Đặt lại mật khẩu</button>
            </div>
        </div>
    </>
}