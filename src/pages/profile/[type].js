import axios from "axios"
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

function App() {    
  const { register, handleSubmit } = useForm()

  const router = useRouter()
  const { type } = router.query

  const [loginOrRegister, setLoginOrRegister] = useState('')
  const [status, setStatus] = useState('')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (type == "register") {
      setLoginOrRegister(true)
    } 
    else if(type == "login") {
      setLoginOrRegister(false)
    } 
  }, [router])

  const onRegister = async (data) => {
    if (data.email && data.password) {
        setLoading(true)
        const obj = {
            email: data.email,
            password: data.password
        }
        await axios.post("https://arashovplatform.onrender.com/api/v1/auth/register", obj)
        router.push(`/profile/verification?email=${data.email}&a=${data.password}`)     
        setLoading(false)
    } else {
        alert("Avval To'ldiring!!!")
    }
  };

    const onLogin = async (data) => {
        if (data.email.length && data.password.length) {
            setLoading(true)
            const obj = {
                email: data.email,
                password: data.password
            }
        
            axios.post("https://arashovplatform.onrender.com/api/v1/auth/login", obj).then(res => {
                if (res.data.token) {
                    setLoading(false)
                    localStorage.setItem('token', res.data.token)
                    router.push("/profile/me")
                } else {
                    setLoading(false)
                    setStatus("Xatolik, bunday foydalanuvchi mavjud emas")
                    setTimeout(() => {
                        setStatus("")
                    }, 5000)
                }
                }
            )
        }
    };

  const inputDesign = "px-6 ml-1 w-full py-2 bg-[#000C2C] text-gray-100 outline-0 rounded-r-xl"

  const submitDesign = "mt-6 bg-gradient-to-r from-[#001B9B] to-[#0064F2] px-12 py-2 rounded-xl w-full text-xl text-white hover:-translate-y-0.5 transition-all duration-300 hover:shadow minishadow cursor-pointer"

  return (
    <div className="App px-2 h-screen bg-gradient-to-r from-[#001437] to-[#000217] flex items-center justify-center">
      <Head>
        <title>Arashov - {loginOrRegister ? "Ro'yhatdan o'ting" : "Tizimga kiring"}</title>
      </Head>
      <div className="flex-1 boxshadowed2 max-w-2xl h-[520px] py-4 px-10 sm:px-32 relative pb-32 shadow-xl border-4 border-[#002C72] rounded-2xl">
        <div className="flex flex-col items-start">
            {
                loading && 
                <div className="absolute w-full h-full right-0 top-0 z-20">
                    <div className="h-96 flex justify-center items-center">
                        <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                </div>
            }
        </div>
        <div className="flex flex-col items-start mt-10 gap-1 mb-6">
          <p className="uppercase text-gray-200 text-basic sm:text-2xl mezzardBold text-center">Kurslardan birini xarid qilish uchun {loginOrRegister ? "Ro'yhatdan o'ting" : "Tizimga kiring"}</p>
        </div>
        {loginOrRegister 
        ? 
        <>
          <form className="flex flex-col items-center" onSubmit={handleSubmit(onRegister)}>
            <div className="w-full">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-[#000C2C] w-full flex pl-5 justify-start items-center border-[3px] rounded-xl border-[#0152D1]">
                  <i className="fa-solid fa-user text-xl"></i>
                  <input autoComplete="off" className={inputDesign} type="text" {...register("name")} name="text" placeholder="Ism Familiya" />
                </div>
                <div className="bg-[#000C2C] w-full flex pl-5 justify-start items-center border-[3px] rounded-xl border-[#0152D1]">
                  <i className="fa-solid fa-envelope text-xl"></i>
                  <input autoComplete="off" className={inputDesign} type="email" {...register("email")} name="email" placeholder="Email" />
                </div>
                {/* <div className="bg-[#000C2C] w-full flex pl-5 justify-start items-center border-[3px] rounded-xl border-[#0152D1]">
                  <i className="fa-solid fa-phone"></i>
                  <input autoComplete="off" className={inputDesign} type="tel" {...register("phone")} name="phone" placeholder="Telefon raqam" />
                </div> */}
                <div className="bg-[#000C2C] w-full flex pl-5 justify-start items-center border-[3px] rounded-xl border-[#0152D1]">
                  <i className="fa-solid fa-key"></i>
                  <input autoComplete="off" className={inputDesign} type="password" {...register("password")} name="password" placeholder="Parol" />
                </div>
              </div>

              <div className="flex justify-start items-center">
                <input className={submitDesign} type="submit" value={loginOrRegister ? "Ro'yhatdan o'ting" : "Tizimga kiring"} />
              </div>

            </div>
          </form>
        </>
        :
        <>
          <form className="flex flex-col items-center" onSubmit={handleSubmit(onLogin)}>
            <p className="text-rose-500 text-lg mb-2 mezzardBold">{status}</p>
            <div className="w-full">
              <div className="flex flex-col items-center gap-5">
              <div className="bg-[#000C2C] w-full flex pl-5 justify-start items-center border-[3px] rounded-xl border-[#0152D1]">
                <i className="fa-solid fa-envelope text-xl"></i>
                <input autoComplete="off" className={inputDesign} type="email" {...register("email")} name="email" placeholder="Email" />
              </div>                
              <div className="bg-[#000C2C] w-full flex pl-5 justify-start items-center border-[3px] rounded-xl border-[#0152D1]">
                <i className="fa-solid fa-key"></i>
                <input autoComplete="off" className={inputDesign} type="password" {...register("password")} name="password" placeholder="Password" />
              </div>
              </div>

              <div className="flex justify-start items-center">
                <input className={submitDesign} type="submit" value={loginOrRegister ? "Ro'yhatdan o'ting" : "Tizimga kiring"} />
              </div>

            </div>
          </form>
        </>}
        <div className="flex justify-end my-2 items-center text-sm text-gray-200 px-4 rounded-md py-0.5 mezzardBold">
          <p className="cursor-pointer hover:underline" onClick={() => router.push(`/profile/${loginOrRegister ? "login" : "register"}`)}>{loginOrRegister ? "Tizimga kirish" : "Ro'yhatdan o'tish"}</p>
        </div>
      </div>
    </div>
  )
}

export default App