import {memo} from "react";
import Car from '@/assets/images/car.png'
import Image from "next/image"

const Competition = () => {
     return (
          <section className="competition wrapper">
               <div className="competition__title max-w-xl mezzardBold">CAPTIVA AVTOMOBILINI YUTIB OLING</div>
               <div className="competition-container">
                    <div className="competition-content">
                         <div className="competition-image">
                            <Image data-aos="fade-left" src={Car} alt="car" style={{transform: "rotateY(-180deg)"}} />
                         </div>
                         <div data-aos="fade-right" className="competition-text">
                              <p className="competition-description mezzardBold">
                                KURSLARIMIZDAN BIRIGA YOZILIB, KURSDAN TO'LIQ O'TGAN HAR BIR KISHI AVTOMATIK RAVISHDA
                                   <span className="mezzardBold" style={{ color: "#42a7ff" }}> CAPTIVA</span> AVTOMOBILINI  O'YININING ISHTIROKCHISIGA  AYLANADI.
                              </p>
                              <p className="note">*AKADEMIYAMIZ O'QUVCHILARI ORASIDA IMTIHON BO'LADI VA G'OLIB IMTIHON ORQALI ANIQLANADI</p>
                         </div>

                    </div>
               </div>
          </section>
     );
};

export default memo(Competition);

