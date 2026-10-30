import Container from "../components/common/Container" 
import Navbar from "../components/layout/navbar/Navbar" 
 import { Outlet } from "react-router"
 import Footer from "../components/layout/footer/Footer"
 
function MainLayout() {
  return (
    <Container>
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    </Container>
  )
}

export default MainLayout