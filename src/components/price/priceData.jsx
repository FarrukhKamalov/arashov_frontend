import {memo} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";
import corona from "@/assets/images/corona.png"
import Image from "next/image"
import Link from "next/link"

const cardData = [
     {
       title: "PREMIUM",
       price: "200$",
       info:'25 ta video darslik',
       discount:"",
       description: [
         "Blockchain, Kriptovalyuta",
         "Kriptovalyutada daromad qilish yo'llari (Investitsiya, trading, mining, P2P)",
         "Binance birjasi to’liq o’rgatiladi",
         "Kripto hamyonlardan foydalanish",
         "Riskni boshqarish (Risk menejement)",
         "Trading (Texnik analiz)",
         "Kurator bilan savol javob "
       ],
       button: "SOTIB OLISH",
       link: localStorage.getItem('token') ? "/checkout" : "/profile/register"
     },
     {
       title: "ONLINE",
       price: "500$",
       discount:"300$",
       info:'OFFLINE kurs bilan bir vaqtda dars o’tiladi',
       description: [
         "Blockchain, Kriptovalyuta",
         "Kriptovalyutada daromad qilish yo'llari (Investitsiya, trading, mining, P2P)",
         "Binance birjasi to’liq o’rgatiladi",
         "Kripto hamyonlardan foydalanish",
         "Riskni boshqarish (Risk menejement)",
         "Trading (Texnik va fundamental analiz)",
         "O’zim foydalanadigan strategiyalar",
         "O’quvchilar orasida Chat guruh"
       ],
       button: "ULANISH",
       link: "https://t.me/ARASHOV_TRADER"
     },
     {
       title: "OFFLINE",
       price: "1000$",
       discount:"500$",
       info:'',
       description: [
        "Blockchain, Kriptovalyuta",
        "Kriptovalyutada daromad qilish yo'llari (Investitsiya, trading, mining, P2P)",
        "Binance birjasi to’liq o’rgatiladi",
        "Kripto hamyonlardan foydalanish",
        "Riskni boshqarish (Risk menejement)",
        "Trading (Texnik va fundamental analiz)",
        "O’zim foydalanadigan strategiyalar",
        "O’quvchilar orasida Chat guruh",
         "Kurator bilan savol javob ",
         "Ofisga kelib o’rganish imkoniyati",
         "Traderlar bilan fikr almashish ",
         "Dars jarayonida real hisobda savdo qilishni o’rganish",
       ],
       button: "ULANISH",
       link: "https://t.me/ARASHOV_TRADER"
     },
     {
       title: "VIP",
       price: "10000$",
       discount:"5000$",
       info:"*Depozitingizda 20.000$ pul bo’lishi kerak Dars davomida shu depozit bilan kurs  to'lovlarini ham  chiqarib  olasiz",
       description: [
        "Blockchain, Kriptovalyuta",
        "Kriptovalyutada daromad qilish yo'llari (Investitsiya, trading, mining, P2P)",
        "Binance birjasi to’liq o’rgatiladi",
        "Kripto hamyonlardan foydalanish",
        "Riskni boshqarish (Risk menejement)",
        "Trading (Texnik va fundamental analiz)",
        "O’zim foydalanadigan strategiyalar",
        "O’quvchilar orasida Chat guruh",
         "Kurator bilan savol javob ",
         "Ofisga kelib o’rganish imkoniyati",
         "Traderlar bilan fikr almashish ",
         "Dars jarayonida real hisobda savdo qilishni o’rganish",
         "DICO, IDO, P2P arbitraj",
         "Shaxsan o’zim bilan savdo qilasiz",
       ],
       button: "ULANISH",
       link: "https://t.me/ARASHOV_TRADER"
     },
     
   ];

const PriceData = () => {
  return (
     <div data-aos="fade-up" className="card-container mySwiper wrapper cursor-pointer">
     <Swiper
       spaceBetween={50}
       slidesPerView={4}
       slidesPerGroup={1}
       loopFillGroupWithBlank={true}
       breakpoints={{
         "@0.00": {
           slidesPerView: 1,
           spaceBetween: 0.1,
         },
         "@0.75": {
           slidesPerView: 2,
           spaceBetween: 0.2,
         },
         "@1.00": {
           slidesPerView: 3,
           spaceBetween: 0.3,
         },
         "@1.50": {
           slidesPerView: 4,
           spaceBetween: 0.4,
         },
       }}
       navigation={true}
       modules={[Pagination, Navigation]}
       id="swip"
     >
      {cardData.map((card, index) => (
        <SwiperSlide>
          <div key={index} className={index === 3 ? "card" : "card"} id={index === 3 && "card-4"}>
          <div className="card-title">
            <div className={index !== 3 ? "bright1" : "bright1 bringht4"}></div>
            {index === 3 && <Image priority src={corona} className="corona" width={20} />}
            <p className={index === 3 ? "mezzardBold vip-title" : "mezzardBold"}>{card.title}</p>
          </div>
            <div className="card-content">
              <ul className="card-description">
              {cardData[index].description.map((item, i)=>(
                <li>{item}</li>
              ))}     
              </ul>

              {index !== 2 && <div className={index === 3 ? "video-course-four" : "video-course"}>{card?.info}</div>}
              
            <div className="card-footer">
              <h4 className='discount mezzardBold'>{card.discount}</h4>
              <p className="card-price mezzardBold">{card.price}</p>
              <div className={index !== 3 ? "buy" : "nthfour buy"}>
                {
                index !==3 ? 
                <p>
                  <Link className="not4 mezzardBold" href={card?.link}>{card?.button}</Link>
                </p>
                :
                <p>
                  <a className="fourulanish mezzardBold" href="./">{card?.button}</a>
                </p> 
                }
                {index ===3 ? <div className='mask'></div> : null}
              </div>
              
            </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
     </Swiper>
     
   </div>
  )
}

export default memo(PriceData)
