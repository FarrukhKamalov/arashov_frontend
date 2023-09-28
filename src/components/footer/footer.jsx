import { useState, memo } from 'react';
import Logo from '@/assets/images/Logo.png'
import SocialLink from './socialLink';
import TelegramIcon from '@/assets/images/telegram-icon.png'
import InstagramIcon from '@/assets/images/social_insta.png'
import TiktokIcon from '@/assets/images/social_tiktok.png'
import YouTubeIcon from '@/assets/images/You-Tube.png'
import Image from "next/image"
import Link from "next/link"

const Footer = () => {

  const date = useState(new Date().getFullYear())

  return (
    <footer data-aos="fade-down" className="footer">
      <div className="footer-content">
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
          <p>© {date} <Link href="/">ARASHOV</Link>. All rights reserved.</p>
        </div>
        <div className="social">
          <SocialLink link={"https://t.me/ARASHOV_TRADING_ACADEMY"} img={TelegramIcon} />
          <SocialLink link={"https://www.instagram.com/arashov_trading_academy/"}  img={InstagramIcon} />
          <SocialLink link={"https://www.tiktok.com/@arashov_trader"}  img={TiktokIcon} />
          <SocialLink link={"https://www.youtube.com/@arashovTrader"}  img={YouTubeIcon} />
          
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
