import axios from "axios"
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

function Verification() {    
    
  const router = useRouter()

  const { a } = router.query
  const { phone } = router.query
  const { email } = router.query

  const [one, setOne] = useState("")
  const [two, setTwo] = useState("")
  const [three, setThree] = useState("")
  const [four, setFour] = useState("")

  const [code, setCode] = useState(`${String(one)[one.length - 1]}${String(two)[two.length - 1]}${String(three)[three.length - 1]}${String(four)[four.length - 1]}`)

  const [loading, setLoading] = useState(false)

  const [status, setStatus] = useState('')

    const onRegister = async (e) => {
        setLoading(true)
        e.preventDefault()
        if (code && email && phone && a) {
            const obj = {
                email: email,
                phone: phone,
                password: a
            }

            axios.post("https://arashovplatform.onrender.com/api/v1/auth/register", obj).then(() => {
                axios.post("https://arashovplatform.onrender.com/api/v1/auth/login", {
                    email: email,
                    password: a
                }).then(res => {
                    if (res.data.token) {
                        localStorage.setItem('token', res.data.token)
                        router.push("/profile/me")
                    } else {
                        setStatus("Xatolik, bunday foydalanuvchi mavjud emas")
                        setTimeout(() => {
                            setStatus("")
                        }, 5000)
                    }
                    setLoading(false)
                    }
                )                
            })
        }
    };

  const inputDesign = "w-[55px] h-[55px] pl-5 flex justify-center items-center bg-[#000C2C] border-2 border-gray-700 text-gray-100 outline-0 rounded-xl"

  const submitDesign = "mt-6 bg-gradient-to-r from-[#001B9B] to-[#0064F2] px-12 py-2 rounded-xl w-full text-xl text-white hover:-translate-y-0.5 transition-all duration-300 hover:shadow minishadow cursor-pointer"

  return (
    <div className="App px-2 h-screen bg-gradient-to-r from-[#001437] to-[#000217] flex items-center justify-center">
      <Head>
        <title>Arashov - Tasdiqlash</title>
      </Head>
      <div className="flex-1 boxshadowed2 max-w-2xl h-[520px] py-4 px-10 sm:px-32 relative pb-32 shadow-xl border-4 border-[#002C72] rounded-2xl">
        <div className="flex flex-col items-start mt-14 gap-1 mb-6">
            <p className="uppercase text-gray-200 text-basic sm:text-2xl mezzardBold text-center">Emailingizga yuborilgan tasdiqlash kodini kiriting</p>
            {
                loading && 
                <div className="absolute w-full h-full right-0 top-0 z-20">
                    <div className="h-96 flex justify-center items-center">
                        <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                </div>
            }
        </div>
        <>
          <form className="flex flex-col h-full items-center">
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="flex mt-4 flex-col items-center gap-5">
                        <div className="flex gap-[10px] justify-center items-center">
                            <input value={one && String(one)[one.length - 1]} onChange={e => {
                                if (typeof Number(e.target.value) == "number") {
                                    setOne(e.target.value)                                   
                                }
                            }} autoComplete="off" className={`${inputDesign}`} type="number" placeholder="0" />                        
                            <input value={two && String(two)[two.length - 1]} onChange={e => {
                                if (typeof Number(e.target.value) == "number") {
                                    setTwo(e.target.value)                                   
                                }
                            }} autoComplete="off" className={`${inputDesign}`} type="number" placeholder="0" />  
                            <input value={three && String(three)[three.length - 1]} onChange={e => {
                                if (typeof Number(e.target.value) == "number") {
                                    setThree(e.target.value)                                   
                                }
                            }} autoComplete="off" className={`${inputDesign}`} type="number" placeholder="0" />  
                            <input value={four && String(four)[four.length - 1]} onChange={e => {
                                if (typeof Number(e.target.value) == "number") {
                                    setFour(e.target.value)                                   
                                }
                            }} autoComplete="off" className={`${inputDesign}`} type="number" placeholder="0" />  
                        </div>
                    </div>

                    <div className="flex justify-start mb-24 items-center">
                        <input onClick={onRegister} className={submitDesign} type="submit" value={"Tasdiqlash"} />
                    </div>

                </div>
          </form>
        </>        
      </div>
    </div>
  )
}

export default Verification