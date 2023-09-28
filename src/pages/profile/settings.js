import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const Settings = () => {

    const router = useRouter()

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()

    useEffect(() => {
        axios.get("https://arashovplatform.onrender.com/api/v1/student/me", {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(res => {
            setName(res.data.data.fullName)
            setPhone(res.data.data.phone)
            setEmail(res.data.data.email)
        })
    }, [])

    const onChangeUser = () => {
        axios.patch("https://arashovplatform.onrender.com/api/v1/student/me/edit", {
            headers: {
                token: localStorage.getItem('token')
            },
            body: {
                fullName: name,
                phone: phone,
                email: email
            }
        }).then(res => {
            router.push("/profile/me")
        })
    }

    return (
        <div className="bg-[#151825]">
            <div className="max-w-screen-xl mx-auto min-h-screen py-2 px-2">
                <Link href={"/profile/me"} className="my-6 block w-fit rounded-lg btn px-8 hover:bg-blue-800 py-2">Ortga</Link>
                <h1 className="text-3xl font-[900]">Sozlamalar</h1>
                
                <div className="mt-6">

                    <p className="font-bold ml-1">Ism:</p>
                    <div className="flex items-center gap-[10px] inp pl-[15px]">
                        <div className="bg-[#1D2134] p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7799 9.95504C9.29661 9.95504 8.09412 8.75255 8.09412 7.26921C8.09412 5.78586 9.29661 4.58337 10.7799 4.58337C12.2633 4.58337 13.4658 5.78586 13.4658 7.26921C13.4658 8.75255 12.2633 9.95504 10.7799 9.95504Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.35327 17.4167V15.8859C5.35327 14.0984 6.80161 12.6592 8.57994 12.6592H13.4108C15.1983 12.6592 16.6374 14.1075 16.6374 15.8859V17.4167" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <input onChange={e => setName(e.target.value)} value={name} className="outline-0 inp font-bold mt-0.5 border-0 text-gray-200 rounded-md py-4 w-full" type="text" placeholder="Ism..." name="" id="" />        
                    </div>

                    <p className="font-bold ml-1 mt-5">Telefon raqam:</p>
                    <div className="flex items-center gap-[10px] inp pl-[15px]">
                        <div className="bg-[#1D2134] p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M15.65 11.9333C17.6333 13.9167 18.775 14.3167 16.2583 16.8333C15.9417 17.0833 13.9417 20.1333 6.9 13.1C-0.141669 6.05834 2.90833 4.05833 3.15833 3.74167C5.68333 1.21667 6.075 2.36667 8.05833 4.35C10.125 6.40833 6.38333 7.15 9.61666 10.3833C12.85 13.6167 13.5917 9.875 15.65 11.9333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <input onChange={e => setPhone(e.target.value)} value={phone} className="outline-0 inp font-bold mt-0.5 border-0 text-gray-200 rounded-md py-4 w-full" type="text" placeholder="Telefon raqam..." name="" id="" />        
                    </div>

                    <p className="font-bold ml-1 mt-5">Email manzil:</p>
                    <div className="flex items-center gap-[10px] inp pl-[15px]">
                        <div className="bg-[#1D2134] p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4.29169 15.8333C3.19169 15.8333 2.29169 14.9416 2.29169 13.8333V6.16663C2.29169 5.06663 3.18335 4.16663 4.29169 4.16663H15.7084C16.8084 4.16663 17.7084 5.05829 17.7084 6.16663V13.8333C17.7084 14.9416 16.8167 15.8333 15.7084 15.8333H4.29169Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.85 4.80835L11.125 10.4917C10.4833 11.1333 9.51666 11.1333 8.86666 10.4917L3.14166 4.80835" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.775 9.93335L16.85 14.8583" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.15002 14.8583L8.28336 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <input onChange={e => setEmail(e.target.value)} value={email} className="outline-0 inp font-bold mt-0.5 border-0 text-gray-200 rounded-md py-4 w-full" type="text" placeholder="Email manzil..." name="" id="" />        
                    </div>

                    <p onClick={onChangeUser} className="my-6 btn block text-lg cursor-pointer font-bold w-fit px-14 hover:bg-blue-800 py-2.5">Saqlash</p>

                </div>
            </div>
        </div>
    )
}

export default Settings