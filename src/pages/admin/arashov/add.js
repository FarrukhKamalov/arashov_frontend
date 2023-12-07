import axios from "axios"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
import Link from "next/link"
import { useRouter } from "next/router"
import Head from "next/head"

const Add = () => {
    const { register, handleSubmit } = useForm();

    const router = useRouter()
    const { id } = router.query
    const { type } = router.query

    const [postOrPut, setPostOrPut] = useState(true)

    const [inputs, setInputs] = useState({
        videoTitle: "",
        videoLink: "",
    })

    const [payment, setPayment] = useState([])
    
    const onSubmitCourses = async (data) => {
        const obj = {
            videoTitle: inputs.videoTitle,
            videoLink: inputs.videoLink,
        }

        if (id) {
            if (type === "studentsedit") {
                axios.patch(`https://arashovplatform.onrender.com/api/v1/admin/students/${id}`, payment).then(router.push("/admin/arashov/dashboard"))
            } else {
                axios.patch(`https://arashovplatform.onrender.com/api/v1/admin/courses/${id}`, obj).then(router.push("/admin/arashov/dashboard")).then(() => {
                    axios.get(`https://arashovplatform.onrender.com/api/v1/admin/courses/${id}`).then(res => setInputs(res.data.data))
                })
            }
        } else {
            axios.post("https://arashovplatform.onrender.com/api/v1/courses/add", obj).then(router.push("/admin/arashov/dashboard"))
        }
    };

    useEffect(() => {
        if (id) {
            if(type === "studentsedit") {
                setPostOrPut(false)
                axios.get(`https://arashovplatform.onrender.com/api/v1/admin/students/${id}`).then(res => setPayment(res.data.data))
            } else {  
                setPostOrPut(false)
                axios.get(`https://arashovplatform.onrender.com/api/v1/admin/courses/${id}`).then(res => setInputs(res.data.data))
            }
        }
    }, [])

    return (
        
        <div className="absolute w-full min-h-full bg-[#151A20] z-50 top-0 right-0 flex items-start justify-center">

            <Head>
                <title>Arashov - {postOrPut ? "POST" : "PUT"} {type === "studentsedit" ? "STUDENTS" : 'COURSES'}</title>
            </Head>

            <aside className="px-6 h-full w-fit md:w-60 flex flex-col items-center py-6 absolute md:static md:h-screen top-0 left-0 md:bg-gray-800">
                <div className="flex flex-col items-start gap-2 w-full">

                    <Link className="my-6 rounded-lg bg-yellow-500 px-8 hover:bg-yellow-600 py-2" href="/admin/arashov/dashboard">Ortga</Link>

                </div>
            </aside>

            <div className="w-full">
                <div className="mx-auto mt-32 md:mt-6 px-10 flex items-center justify-start">
                    <h1 className="text-4xl font-semibold uppercase">{!type && "KURSLAR"}{type === "studentsedit" ? "STUDENTS" : ''}</h1>
                    <p className="ml-4 text-lg font-semibold">-{postOrPut ? "qo'shish" : "o'zgartirish"}-</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <form onSubmit={handleSubmit(onSubmitCourses)} className="flex w-6/12 my-10 justify-center py-10 px-8 items-start bg-gray-800 rounded-xl items-start">

                        <div className="w-full my-3 gap-6 py-3 rounded-2xl px-5">
                            {
                            type !== "studentsedit"
                            ?
                                <><div className="w-full">
                                    <h1 className="text-xl">Video title</h1>
                                    <input onInput={e => setInputs({...inputs, videoTitle: e.target.value})} value={inputs?.videoTitle} {...register("videoTitle")} required className="outline-0 border-0 text-gray-200 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Video title..." name="videoTitle" id="" />
                                </div>
                                
                                <div className="w-full my-3 gap-6 py-3 rounded-2xl">
                                    <h1 className="text-xl">Video link</h1>
                                    <input onInput={e => setInputs({...inputs, videoLink: e.target.value})} value={inputs?.videoLink}  {...register("videoLink")} required className="outline-0 border-0 bg-gray-700 text-gray-200 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Video like..." name="videoLink" id="" />
                                </div></>
                                :
                                <div className="w-full my-3 gap-6 py-3 rounded-2xl">
                                    <div className="my-5">
                                        <h1 className="text-xl">Payment</h1>
                                        <select value={payment.payment} onChange={e => setPayment({...payment, payment: e.target.value})} name="payment" id="" className="px-8 py-2 bg-gray-700 text-gray-200 rounded-md w-full outline-none">
                                            <option value="true">True</option>
                                            <option value="false">False</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h1 className="text-xl">PaymentType</h1>
                                        <select value={payment.paymentType} onChange={e => setPayment({...payment, paymentType: e.target.value})} name="payment" id="" className="px-8 py-2 bg-gray-700 text-gray-200 rounded-md w-full outline-none">
                                            <option value="Payme">Payme</option>
                                            <option value="Crypto">Crypto</option>
                                            <option value="Menejer">Menejer</option>
                                        </select>
                                    </div>
                                    <div className="w-full my-3 gap-6 py-3 rounded-2xl">
                                        <h1 className="text-xl">Referral Code</h1>
                                        <input onInput={e => setPayment({...payment, referralCode: e.target.value})} value={payment.referralCode}  {...register("referralCode")} required className="outline-0 border-0 bg-gray-700 text-gray-200 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Referral Code..." name="referralCode" id="" />
                                    </div>
                                </div>
                            }

                            <div className="w-full my-6">
                                <input type="submit" value="Tasdiqlash" className="outline-0 border-0 bg-yellow-500 text-gray-200 mezzardBold hover:bg-yellow-600 cursor-pointer rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" />
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add
