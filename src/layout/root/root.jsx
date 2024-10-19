import { Outlet } from "react-router-dom"
import { Navbar } from "../../shared/navbar/navbar"
import { Footer } from "../../shared/footer/footer"


export const Root = () => {
  return (
   <>
    <Navbar />
    <div>
     <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
