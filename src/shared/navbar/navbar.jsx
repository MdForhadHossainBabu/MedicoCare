import { useState } from "react";
import  logo from "../../assets/logo.PNG"


export const Navbar = () => {
 const [active, setActive] = useState(false);

 window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
   setActive(true)
  }
  else {
   setActive(false);
  }
 })



  return (
    <nav
      className={`flex items-center justify-between fixed w-full px-3 pr-5 transition-all ${
        active ? 'bg-[#FFFFF]/65 glass z-50' : ''
      }`}
    >
      <div className="flex items-center gap-0  ">
        <img className="w-20 h-16" src={logo} alt="" />
        <div>
          <h1 className="text-xl font-semibold">MedicoCare</h1>
          <p className="text-sm font-mono tracking-widest">Health Care</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <ul className="flex items-center gap-3">
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <button>Appointment</button>
      </div>
    </nav>
  );
}
