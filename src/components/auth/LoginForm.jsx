import Buttons from "../common/Buttons"
import { useAuth } from "../../hooks/useAuth"
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
function LoginForm() {
  const {phone,otp,isSentOtp,handleSubmit,handlePhoneChange,handleOtpChange,resendOtp,isExpired,getFormatedTime}=useAuth();

  const AuthContex=useContext(AuthContext);
  return (
    <form className="flex flex-col items-center " onSubmit={handleSubmit}>
      
      {isSentOtp?
      <div>
        <div>
          <label htmlFor="login-inp" className=" px-2 opacity-40 text-sm w-full font-light">لطفا کد تایید رو وارد کنید</label>
          <input id="login-inp" type="text" placeholder='کد تایید' className="w-full p-3 border-2 border-gray-300 rounded-md m-4 mb-8 pl-4" value={otp} onChange={handleOtpChange}/>
      </div>
            <div className="mt-3 mb-4">
        {isExpired?(
          <button className="hover:cursor-pointer text-blue-500 hover:underline" onClick={resendOtp}>
            ارسال مجدد کد
          </button>
        ):(
          <p> اعتبار کد تا 
            <span className="">{getFormatedTime()}</span>
          </p>
        )}
      </div>

      </div>
      
      :
      <div className="flex flex-col items-center w-full">
          <label htmlFor="login-inp" className=" px-2 opacity-40 text-sm w-full font-light">لطفا شماره موبایل یا ایمیل خود را وارد کنید</label>
          <input id="login-inp" type="text" placeholder='شماره موبایل یا پست الکترونیک' className="w-full p-3 border-2 border-gray-300 rounded-md m-4 mb-8 pl-4" value={phone} onChange={handlePhoneChange}/>

      </div>
      }
      
      <Buttons type="submit" variant="primary" className=" bg-primary text-white py-3 w-full"> {isSentOtp?"ثبت کد":"ورود به راوی"} </Buttons>
    </form>
  )
}

export default LoginForm