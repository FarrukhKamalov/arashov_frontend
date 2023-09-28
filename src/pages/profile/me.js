import Image from "next/image"
import logo from "@/assets/images/Logo.png"
import tg from "@/assets/images/tg.png"
import user from "@/assets/images/user.png"
import Accordion from "@/components/accordion/accordion"
import Link from "next/link"
import { useState, useEffect, memo } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import Head from "next/head"
import { Footer } from "@/components"

const Me = () => {

    const router = useRouter()
    const { type } = router.query

    const [dropdown, setDropdown] = useState(false)
    const [dropdownProfile, setDropdownProfile] = useState(false)
    const [dropdownNow, setDropdownNow] = useState('')

    const [dataUser, setDataUser] = useState([])

    const [courses, setCourses] = useState([])

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        axios.get("https://arashovplatform.onrender.com/api/v1/student/me", {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(res => setDataUser(res.data.data))

        axios.get("https://arashovplatform.onrender.com/api/v1/courses/", {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(res => {
            setCourses(res.data.data)
            setLoader(false)
        })
    }, [])

    return (  
        <div onClick={(e) => {
            if (!e.target.classList.contains("drowdown-item")) {
                setDropdownNow(false)
                setDropdownProfile(false)
            }
        }} className="max-w-screen-xl mx-auto min-h-screen px-2">
            <Head>
                <title>Arashov Me - {dataUser.email}</title>
            </Head>
            <header className="flex justify-between items-center py-8">
                <Link href="/">
                    <Image src={logo} alt="Logo" className="w-40" />
                </Link>  
                <div onClick={() => setDropdownProfile(prev => !prev)} className="relative drowdown-item">
                    <div className="mezzardBold drowdown-item">
                        <Image src={dataUser.image} width={40} height={30} className="drowdown-item w-12 h-auto cursor-pointer rounded-full hover:scale-110 transition-all" />
                    </div>
                    {
                    dropdownProfile && 
                        <div className="absolute shadow-lg bg-[#001941] z-20 top-14 right-0 rounded-lg">                            
                            <div onClick={() => {
                                    router.push('/profile/settings')
                                }} className="cursor-pointer bg-[#001941] hover:bg-[#001538] justify-end items-end px-6 shadow-gray-900 w-48 z-20 top-14 flex flex-col gap-1 right-0 py-3 rounded-lg drowdown-item">
                                <p className="drowdown-item cursor-pointer hover:text-gray-300 mezzardBold"><i class="fa-solid fa-gear"></i> SOZLAMALAR</p>
                            </div>
                            <div onClick={() => {
                                    localStorage.removeItem('token')
                                    router.push('/')
                                }} className="cursor-pointer bg-[#001941] hover:bg-[#001538] justify-end items-end px-6 shadow-gray-900 w-48 z-20 top-14 flex flex-col gap-1 right-0 py-3 rounded-lg drowdown-item">
                                <p className="drowdown-item text-rose-700 cursor-pointer hover:text-gray-300 mezzardBold"><i className="drowdown-item fa-solid fa-right-from-bracket px-2"></i>CHIQISH</p>
                            </div> 
                        </div>                   
                    }
                </div>
            </header>
            {!loader ? <main>
                <div className="flex relative pb-14 lg:pb-8 justify-between gap-6 lg:gap-14 items-center my-4 boxshadowed3 py-8 px-4 lg:px-14 rounded-xl">
                    <div className="flex w-4/12 lg:w-auto justify-center items-center gap-1 flex-col lg:flex-row md:gap-3">
                        <i className="fa-solid fa-envelope text-xl"></i>
                        <p className="mezzardBold">EMAIL :</p>
                        <p className="mezzardBold">{dataUser.email}</p>
                    </div>
                    <div className="flex w-4/12 lg:w-auto justify-center items-center gap-1 flex-col lg:flex-row md:gap-3">
                        <i className="fa-solid fa-phone text-xl"></i>
                        <p className="mezzardBold">PHONE :</p>
                        <p className="mezzardBold">{dataUser.phone}</p>
                    </div>
                    <div className="flex w-4/12 lg:w-auto justify-center items-center gap-1 flex-col lg:flex-row md:gap-3">
                        <i className="fa-solid fa-credit-card text-xl"></i>
                        <p className="mezzardBold">TO'LOV :</p>
                        <p className={`mezzardBold ${dataUser.payment ? "text-green-600" : "text-red-600"}`}>{dataUser.payment ? dataUser.paymentType : "Qilinmagan"}</p>
                        {dataUser?.payment && <a href="./" className="flex absolute lg:static bottom-2 right-4 justify-center items-center bg-blue-700 py-1 hover:bg-blue-800 px-6 rounded-lg gap-3 mezzardBold ml-4" ><Image src={tg} className="w-6" />Gruppa</a>}
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex justify-between items-center">
                        <h1 className="mezzardBold text-2xl">KURSLAR:</h1>
                        <div>
                            {!dataUser.payment ? <Link className="mezzardBold px-6 rounded-lg bg-blue-700 py-2 hover:bg-blue-800" href="/checkout">To'lov qilish</Link> : ""}
                        </div>
                    </div>
                    {courses.map(function(item, index) {
                        return <Accordion index={index} isPayed={dataUser.payment} indexOf={index} setDropdown={setDropdown} dropdown={dropdown} dropdownNow={dropdownNow} setDropdownNow={setDropdownNow} data={item} />
                    })}
                </div>
            </main>
            :
            <div className="h-96 flex justify-center items-center">
                <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            }
            <div className="mt-32">
                <Footer/>
            </div>
        </div>
    );
}
 
export default memo(Me);