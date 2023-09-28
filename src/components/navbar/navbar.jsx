import logo from '@/assets/images/Logo.png'
import Image from "next/image"
import Link from "next/link"
import {memo} from "react";

const Navbar = () => {
  return (
     <nav className="navbar">
      <div className="wrapper navbar">
        <div className="navbar__logo">
          <Link href="/">
            <Image priority src={logo} alt="Logo" />
          </Link>          
        </div>
          <div className="navbar__buttons">
            <Link href={localStorage?.getItem('token') ? "/profile/me" : "/profile/login"} className="login-button">{localStorage?.getItem('token') ? "PROFILIM" : "LOG IN"}</Link>
            {!localStorage?.getItem("token") && <Link href="/profile/register" style={{background: "#0135d3"}} className="register-button">REGISTER</Link>}
          </div>
      </div>
    </nav>
  )
}

export default memo(Navbar)