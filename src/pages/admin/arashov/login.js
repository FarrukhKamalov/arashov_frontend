import { useState } from "react"

const Login = () => {

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

    const onEnter = () => {
        if (login == "adminarashov@gmail.com" && password == "adminparol123") {
            localStorage.setItem("login", "true")
            window.location.href = "/admin/arashov/dashboard"
        } else {
            window.location.reload()
        }
    }

    return (
        <div>
            <div className="my-20 justify-center flex flex-col items-center gap-5">
                <div className="w-96 flex flex-col items-center justify-center gap-5">
                    <input value={login} onChange={e => setLogin(e.target.value)} autoComplete="off" className={'px-6 ml-1 w-full py-2 bg-[#000C2C] text-gray-100 outline-0 rounded-r-xl'} type="text" placeholder="Login..." />
                    <input value={password} onChange={e => setPassword(e.target.value)} autoComplete="off" className={'px-6 ml-1 w-full py-2 bg-[#000C2C] text-gray-100 outline-0 rounded-r-xl'} type="text" placeholder="Password..." />

                    <p onClick={onEnter} className="bg-blue-700 px-20 py-3 rounded-3xl cursor-pointer">Enter</p>
                </div>
            </div>
        </div>
    )
}

export default Login