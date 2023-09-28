import {memo} from "react";
import TelegramIcon from '@/assets/images/telegram-icon.png'
import ContacrImage from '@/assets/images/contact.png'

import Image from "next/image"

const Contact = () => {

  return (
    <section className="contact">

      <div data-aos="fade-up" className="contact-text">
        <h2 className="mezzardBold">SAVOLLAR BO’LSA MENEDJERGA MUROJAAT QILISHINGIZ MUMKIN</h2>
        <div className="telegram-contact">
          <a href="https://t.me/arashov_trader" target="_blank">
            <Image src={TelegramIcon} alt="TelegramIcon" width={37} />
            <p className="mezzardBold">@ARASHOV_TRADER</p>
          </a>          
        </div>
        <p className='phone-number mezzardBold'><a href="tel:+998955051199">+998 (95) 505-11-99</a></p>
      </div>
      <div className="contact-image">
        <Image data-aos="fade-left" src={ContacrImage} alt="Contact us" />
      </div>
    </section>
  );
};

export default memo(Contact);

