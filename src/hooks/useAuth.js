import { useContext, useState } from "react"
import { validate } from "../validators";
import { sendOtpSchema,verifyOtpSchema } from "../validators/auth";
import * as authService  from "./../services/auth.service"
import { toast } from "sonner";
import { useCountdown } from "./useCountdown";
import AuthContext from "../context/AuthContext";

export const useAuth=()=>{
    const [phone,setPhone]=useState("");
    const [otp,setOtp]=useState("");
    const [isSentOtp,setIsSentOtp]=useState(false);
    const {refreshUser}=useContext(AuthContext);
    // const navigate=useNavigate();

    const {restart,getFormatedTime,isExpired}=useCountdown(20)
    const handlePhoneChange=(e)=>{
        setPhone(e.target.value);
    };
    const handleOtpChange=(e)=>{
        setOtp(e.target.value);
    };

    const sendOtp=async()=>{
        if(!validate(sendOtpSchema,{phone})) return

        const data=await authService.sendOtp(phone);
        console.log(data);
        setIsSentOtp(true);
        restart();
    };

    const resendOtp=async()=>{

        const data=await authService.sendOtp(phone);
        restart();

        toast.success("کد جدید ارسال شد")
    };
    const verifyOtp=async()=>{
        if(!validate(verifyOtpSchema,{phone,otp})){
            return;
            
        }

        const data=await authService.verifyOtp(phone,otp);
        console.log(data);
        return data
    };

    const Login=async()=>{
        
        const data= await verifyOtp();

        if(!data){
            return
        }

        toast.success("با موفقیت وارد شدید");
        await refreshUser();

    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            if(isSentOtp){
            
            await Login();
            }
            else{
                await sendOtp();
            }
        }catch(err){
            console.error(err);
        }
    };

    return{
        phone,otp,isSentOtp,handleSubmit,handlePhoneChange,handleOtpChange,isExpired,resendOtp,getFormatedTime
    }
}