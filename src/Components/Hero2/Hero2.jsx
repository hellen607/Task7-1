import './Hero2.css'
import { IoIosArrowForward } from "react-icons/io";
import heroShape from "./../../assets/images/line-element.webp"
import heroShape2 from "./../../assets/images/element.webp"

export default function Hero2() {
  return (
   <>
    <div className="about-us ">
      <div className='back2 position-relative'>
        <img src={heroShape} className='heroShape  position-absolute' alt="" />
        <img src={heroShape2} className='heroShape2 position-absolute' alt="" />
        <h1>About Us</h1>
        <p>Home <IoIosArrowForward />
        Aout Us</p>
      </div>
      
    </div>
  
   </>
  )
}
