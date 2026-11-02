import { useEffect, useState } from "react"
import AuthContext from "./AuthContext"
import * as AuthService from "../services/auth.service"
function AuthProvider({children}) {
    const [user,setUser]=useState(true);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        const initAuth= async()=>{
            try{
                const response=await AuthService.getMe();
                console.log(response)
                setUser(response.data.data.user);
            }

        catch (err){
            setUser(null);
        }finally{
            setLoading(false)
        }
        }
  initAuth()
},[])

const value={
    user,loading
}
return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}

export default AuthProvider