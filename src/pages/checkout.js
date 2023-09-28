import { Footer } from "@/components";
import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/Logo.png"
import payme from "@/assets/images/payme.png"
import bit from "@/assets/images/bit.png"
import qr from "@/assets/images/qr.jpg"
import { useState } from "react"

const Checkout = () => {

    const [isOpen, setOpen] = useState(false)

    return (  
        <div className="max-w-screen-xl mx-auto px-2">
            <nav>
                <div className="wrapper navbar">
                    <div className="navbar__logo">
                        <Link href="/">
                            <Image src={logo} alt="Logo" />
                        </Link>          
                    </div>
                </div>
            </nav>
            
            <main className="flex justify-center items-center">
                {isOpen && <div 
                    onClick={(e) => {
                        if (!e.target.classList.contains("item-modal")) {
                            setOpen(false)
                        }
                    }}          
                    className="absolute top-0 left-0 flex w-full justify-center items-center h-screen">
                    <div className="bg-[#001B44] boxshadowed3 item-modal flex text-gray-200 justify-center items-center relative flex-col gap-5 rounded-2xl py-10 px-20">
                        <i className="fa-solid fa-xmark text-gray-200 text-lg absolute top-2 right-5 cursor-pointer"></i>
                        <Image src={qr} className="w-52 item-modal" />
                        <div className="item-modal flex items-center justify-center gap-1.5">
                            <p onClick={(e) => {
                                navigator.clipboard.writeText(230962400)
                                e.target.classList.add("text-gray-600")
                                e.target.textContent = "copied!"
                                setTimeout(() => {
                                    e.target.textContent = "Binance Pay ID: 230962400"
                                }, 1500)
                            }} className="item-modal cursor-pointer mezzardBold">Binance Pay ID: 230962400</p>
                            <i className="fa-solid cursor-pointer hover:text-gray-500 fa-copy mb-1 text-gray-400 item-modal"></i>
                        </div>
                        <p className="item-modal flex justify-center items-center text-gray-200 mezzardBold text-lg">Chekni Menejerga yuboring: <a className="mx-2 mezzardBold text-gray-800 text-lg bg-gray-200 py-2 px-4 rounded-lg item-modal" href="https://t.me/ARASHOV_TRADER">Menejer</a></p>
                    </div>
                </div>}
                <div className="flex mt-3 mb-32 justify-center items-start px-2 boxshadowed2 py-20 rounded-2xl px-32 w-fit">
                    <div className="flex flex-col items-center w-full">
                        <h1 className="text-2xl text-center md:text-4xl my-2 mezzardBold">To'lov qilish turlari</h1>
                        <a target="_blank" href="http://payme.uz/@connectuz" className="max-w-md flex justify-center items-center gap-3 w-full mezzardBold hover:bg-gray-200 font-semibold text-lg md:text-3xl text-gray-100 py-3 md:py-5 px-3 md:px-12 bg-white rounded-2xl my-2 w-full">
                            <Image width={400} height={300} src={payme} className="w-40 object-cover h-10" /> 
                        </a>
                        <h1 onClick={() => setOpen(true)} className="max-w-md w-full mezzardBold text-lg flex justify-center items-center md:text-3xl text-gray-800 py-1 px-3 md:px-12 bg-white cursor-pointer hover:bg-gray-200 rounded-2xl my-2 w-full"><span className="mezzardBold flex justify-start items-center gap-2">
                            <Image width={500} height={500} src={bit} className="object-cover  h-20" />
                            <p className="text-basic mezzardBold sm:w-fit -ml-8">Binance pay</p>
                        </span></h1>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
}
 
export default Checkout;