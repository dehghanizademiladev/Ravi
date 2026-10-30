import { Outlet } from "react-router"

function AuthLayout() {
  return (
    <div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default AuthLayout