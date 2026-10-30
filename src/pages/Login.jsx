import { IoMdLogIn } from "react-icons/io";
import Container from "../components/common/Container";
import logo from "../assets/logo.png"
import LoginForm from "../components/auth/LoginForm";
function Login() {
  return (
    <div>
      <Container className=" lg:w-120 lg:h-130 lg:translate-y-3/10 lg:rounded-xl lg:border lg:border-gray-300">
        <div className="translate-y-6/10 lg:translate-y-2/10">
        <div className="flex justify-center items-center gap-6 mb-13"><img src={logo} alt="" className="w-30  "/><h2 className="font-morabba text-6xl font-bold text-primary ">راوی</h2></div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl px-2">ورود یا ثبت نام در راوی</h3>
          <LoginForm/>
        </div>   
        </div>
      </Container>
        
    </div>
  )
}

export default Login