import InfoImage from '@/assets/images/tradeInfoimage.png'
import Image from "next/image"
import {memo} from "react";

const TraderInfo = () => {
     return (
          <div className='tradeInfo' id="traderinfo">
               <div data-aos="fade-up" className="Infobox">
                    <div className="infoTextBox">
                         <div className="boxTitle mezzardBold">TRADER KIM?</div>

                         <div className="boxText">
                              <p className="mezzardBold">Trader:</p>
                              <div className="card">
                                   <div className="line"></div>
                                   <p className="mezzardBold">Moliyaviy bozorni tahlil qiladi</p>
                              </div>
                              <div className="card">
                                   <div className="line"></div>
                                   <p className="mezzardBold">Aktivlarni sotib oladi va sotadi</p>
                              </div>
                              <div className="card">
                                   <div className="line"></div>
                                   <p className="mezzardBold">Narxlar farqidan daromad oladi</p>
                              </div>
                         </div>
                         <div className="linearCard mezzardBold">
                         Crypto Trader - Birjalarda kriptovalyutalar bilan savdo qiluvchi  shaxs.U  texnik tahlil, fundamental tahlil va turli  xil savdo strategiyalardan foydalanadi
                         </div>
                    </div>
                    <div className="infoImgBox">
                         <Image priority src={InfoImage} alt="InfoImage" />
                         <div className="brightShadow"></div>
                    </div>
               </div>
          </div>
     )
}

export default memo(TraderInfo)
