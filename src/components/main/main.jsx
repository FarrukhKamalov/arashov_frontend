import MainImage from "@/assets/images/MainImage.png"
import MainImage2 from '@/assets/images/MainImage2.png'
import CheckIcon from '@/assets/images/checkIcon.png'
import Image from "next/image"
import {memo} from "react";

const Main = () => {
  return (
    <main className="main m-0 p-0">
     <div data-aos="fade-left" className="main__left">
       <div className="main__left__header">
        <h1 className="mezzardBold">KRIPTOVALYUTADA DAROMAD QILISHNI O’RGANING</h1>
        <p>Biz bilan birgalikda dunyoning istalgan nuqtasidan turib pul ishlang</p>
        <a href="#traderinfo"><button className='learn__more'>BATAFSIL MA’LUMOT</button></a>
       </div>
       
     </div>
     <div data-aos="fade-right" className="main__right">
       <div className="background__bright"></div>
       <div className="background__shadow"></div>
       <div className="name">
        <p>ARASHOV</p>
        <Image priority src={CheckIcon} alt="Check" />
       </div>
       <Image priority className='main__image' src={MainImage} alt="MainImage" />
       <Image priority className='main__image2' src={MainImage2} alt="MainImage" />
     </div>
   </main>
   
  )
}

export default memo(Main)