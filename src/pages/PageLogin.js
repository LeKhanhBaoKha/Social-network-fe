import { FormLogin } from "../components/FormAuth/FormLogin"

export const PageLogin = () => {
    return <>
        <div className="flex gap-[60px] mx-[40px] ml-[40px] mt-[30px] justify-between">
            <div className="">
                <div className="text-[50px]"><div className="text-red-500 font-bold">Kết nối</div> với bạn bè trên khắp <div className="font-semibold">Việt Nam.</div> </div>
                <div className="text-[35px]">Chia sẻ những khoảnh khắc <span className="font-semibold text-[35px]">thú vị</span><div>trong cuộc sống của bạn.</div></div>
            </div>
            <div className="shrink-0">
            <FormLogin></FormLogin>
            </div>
        </div>
    </>
}