import axios from "axios"
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

function Verification() {    
    
    const router = useRouter()

    const { email } = router.query
    const { a } = router.query

    const [one, setOne] = useState("")
    const [two, setTwo] = useState("")
    const [three, setThree] = useState("")
    const [four, setFour] = useState("")
    const [five, setFive] = useState("")

    const oneRef = useRef(null)
    const twoRef = useRef(null)
    const threeRef = useRef(null)
    const fourRef = useRef(null)
    const fiveRef = useRef(null)

    const [loading, setLoading] = useState(false)

    const [status, setStatus] = useState('')

    const onRegister = async (e) => {
        setLoading(true)
        e.preventDefault()

        if (one && two && three && four && five) {
            await axios.post("https://arashovplatform.onrender.com/api/v1/auth/verify", {
                email: email,
                otp: `${one[one.length - 1]}${two[two.length - 1]}${three[three.length - 1]}${four[four.length - 1]}${five[five.length - 1]}`
            }).then(() => {   
                axios.post("https://arashovplatform.onrender.com/api/v1/auth/login", {
                    email: email,
                    password: a
                }).then(res => {
                    if (res.data.token) {
                        localStorage.setItem('token', res.data.token)
                            setLoading(false)
                            router.push("/profile/me")
                        } else {
                            setLoading(false)
                            setStatus("Xatolik, kodni noto'g'ri kirittingiz!")
                            setTimeout(() => {
                                setStatus("")
                            }, 5000)
                        }
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
            <p className="text-rose-500 text-lg mb-2 mezzardBold">{status}</p>
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="flex mt-4 flex-col items-center gap-5">
                        <div className="flex gap-[10px] justify-center items-center">
                            <input ref={oneRef} value={one && String(one)[one.length - 1]} onChange={e => {
                                if (typeof Number(e.target.value) == "number") {
                                    setOne(e.target.value) 
                                    twoRef.current.focus()                                  
                                }
                            }} autoComplete="off" className={`${inputDesign}`} type="number" placeholder="0" />                        
                            <input ref={twoRef} value={two && String(two)[two.length - 1]} onChange={e => {
                                if (typeof Number(e.target.value) == "number") {
                                    setTwo(e.target.value)    
                                    threeRef.current.focus()                                     
                                }
                            }} autoComplete="off" className={`${inputDesign}`} type="number" placeholder="0" />  
                            <input ref={threeRef} value={three && String(three)[three.length - 1]} onChange={e => {
                                if (typeof Number(e.target.value) == "number") {
                                    setThree(e.target.value)    
                                    fourRef.current.focus()                                     
                                }
                            }} autoComplete="off" className={`${inputDesign}`} type="number" placeholder="0" />  
                            <input ref={fourRef} value={four && String(four)[four.length - 1]} onChange={e => {
                                if (typeof Number(e.target.value) == "number") {
                                    setFour(e.target.value)   
                                    fiveRef.current.focus()                                     
                                }
                            }} autoComplete="off" className={`${inputDesign}`} type="number" placeholder="0" />  
                            <input ref={fiveRef} value={five && String(five)[five.length - 1]} onChange={e => {
                                if (typeof Number(e.target.value) == "number") {
                                    setFive(e.target.value)                                   
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