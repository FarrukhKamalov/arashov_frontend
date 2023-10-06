import logo from "@/assets/images/Logo.png"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios";
import Head from "next/head"

const Dashboard = () => {

    const [ tab, setTabs ] = useState("students")

    const [students, setStudents] = useState([])
    const [courses, setCourses] = useState([])
    const [posts, setPosts] = useState([])
    const [requests, setRequests] = useState([])

    useEffect(() => {
        axios.get("https://arashovplatform.onrender.com/api/v1/admin/courses/").then(res => setCourses(res.data.data))
        axios.get("https://arashovplatform.onrender.com/api/v1/admin/students/").then(res => setStudents(res.data.data))
        axios.get("https://arashovplatform.onrender.com/api/v1/posts/").then(res => setPosts(res.data.data))
        axios.get("https://arashovplatform.onrender.com/api/v1/requests/").then(res => setRequests(res.data.data))
        if (localStorage.getItem("login") != 'true') {
            window.location.href = "/"
        }
    }, [])

    const deleteing = (id) => {
        axios.delete(`https://arashovplatform.onrender.com/api/v1/admin/courses/${id}`).then(() => {
            axios.get("https://arashovplatform.onrender.com/api/v1/admin/courses/").then(res => setCourses(res.data.data))
        })
    }

    const deleteingStudent = (id) => {
        axios.delete(`https://arashovplatform.onrender.com/api/v1/admin/students/${id}`).then(() => {
            axios.get("https://arashovplatform.onrender.com/api/v1/admin/students/").then(res => setStudents(res.data.data))
        })
    }

    const deletePost = (id) => {
        axios.delete(`https://arashovplatform.onrender.com/api/v1/posts/${id}`).then(() => {
            axios.get("https://arashovplatform.onrender.com/api/v1/posts/").then(res => setPosts(res.data.data))
        })
    }

    return (  
        <div className="mx-auto absolute top-0 right-0 z-50 w-full h-full flex flex-col md:flex-row items-center md:items-start justify-start h-screen md:max-h-screen">
        <Head>
            <title>Arashov - Adminpanel</title>
        </Head>
            <aside className="px-6 w-full h-full md:w-72 flex flex-col items-center py-6 bg-gray-800">
                <Link href="/">
                    <Image src={logo} alt="logo" className="w-40 cursor-pointer hover:-rotate-2 transition-all" />
                </Link>
                <div className="mt-6 flex flex-col items-start gap-2 w-full">
                    <p onClick={() => setTabs("students")} className={ `${ tab == "students" ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center uppercase justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-bars-progress"></i> O'quvchilar</p>
                    <p onClick={() => setTabs("requests")} className={ `${ tab == "requests" ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center uppercase justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-bars-progress"></i> So'rovlar</p>
                    <p onClick={() => setTabs("courses")} className={ `${ tab == "courses" ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center uppercase justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-film"></i> Kurslar</p>
                    <p onClick={() => setTabs("posts")} className={ `${ tab == "posts" ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center uppercase justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-list"></i> Postlar</p>
                    
                    <div className="mt-2 w-full flex flex-col gap-2">
                        <Link href={`./add`} className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-add"></i>Kurs qo'shish</Link>
                        <Link href={`./addpost`} className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-add"></i>Post yozish</Link>
                    </div>
 
                </div>
            </aside>
            <div className="px-4 py-6 min-h-full w-full bg-[#151A20] max-h-screen overflow-y-auto">
                <div className="py-4 flex items-center">
                    <p className="text-3xl relative my-1 font-semibold">{tab == "students" && "O'QUVCHILAR"}</p>
                    <p className="text-3xl relative my-1 font-semibold">{tab == "requests" && "SO'ROVLAR"}</p>
                    <p className="text-3xl relative my-1 font-semibold">{tab == "posts" && "POSTLAR"}</p>
                    <p className="text-3xl relative my-1 font-semibold">{tab == "courses" && "KURSLAR"}</p>
                </div>
                <div className="flex flex-col items-start">
                    <div className="w-full flex flex-col max-h-full overflow-y-auto">                        
                        {
                            tab == "students" &&
                            <>                    
                                <div className="flex flex-col md:flex-row justify-between items-center border border-gray-600 w-full gap-3 bg-gray-700 px-6 py-4 hover:bg-gray-700">
                                    <div className="text-sm font-bold w-4/12 truncate">Ism Familiya</div>
                                    <div className="text-sm font-bold w-4/12 truncate">Email</div>
                                    <div className="text-sm font-bold w-4/12 truncate">Telefon raqam</div>
                                    <div className="text-sm font-bold w-4/12 truncate">To'lov</div>
                                    <div className="text-sm font-bold w-4/12 truncate">To'lov turi</div>
                                    <div className="text-sm font-bold w-4/12 text-end truncate">Bajarish</div>
                                </div>        
                                {students.map(i => <div key={i._id} className="flex flex-col md:flex-row justify-between items-center border border-gray-600 w-full gap-3 bg-gray-800 px-6 py-2 hover:bg-gray-700">
                                    <div className="text-sm w-4/12 truncate">{i.fullName}</div>
                                    <div className="text-sm w-4/12 truncate">{i.email}</div>
                                    <div className="text-sm w-4/12 truncate">{i.phone}</div>
                                    <div className="text-sm w-4/12 truncate">{i.payment ? "True" : "False"}</div>
                                    <div className="text-sm w-4/12 truncate">{i.payment && i.paymentType}</div>
                                    <div className="w-4/12 flex items-center justify-end gap-4">
                                        <Link href={`./add/?id=${i._id}&type=studentsedit`} className="cursor-pointer flex items-center justify-center gap-1 px-2 py-0.5 text-sm rounded-md">
                                            <i className="bg-yellow-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-edit"></i>
                                        </Link>
                                        <i onClick={() => deleteingStudent(i._id)} className="bg-rose-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-remove"></i>
                                    </div>
                                </div>
                                )}
                            </>
                        }
                        {
                            tab == "requests" &&
                            <>                    
                                <div className="flex flex-col md:flex-row justify-between items-center border border-gray-600 w-full gap-3 bg-gray-700 px-6 py-4 hover:bg-gray-700">
                                    <div className="text-sm font-bold w-4/12 truncate">To'lov turi</div>
                                    <div className="text-sm font-bold w-4/12 truncate">Ism</div>
                                    <div className="text-sm font-bold w-4/12 truncate">Telefon raqam</div>
                                    <div className="text-sm font-bold w-4/12 text-end truncate">Bajarish</div>
                                </div>        
                                {requests.map(i => <div key={i._id} className="flex flex-col md:flex-row justify-between items-center border border-gray-600 w-full gap-3 bg-gray-800 px-6 py-2 hover:bg-gray-700">
                                    <div className="text-sm w-4/12 truncate">{i.paymentType}</div>
                                    <div className="text-sm w-4/12 truncate">{i.name}</div>
                                    <div className="text-sm w-4/12 truncate">{i.telephone}</div>
                                    <div className="w-4/12 flex items-center justify-end gap-4">
                                        <Link href={`./add/?id=${i._id}&type=studentsedit`} className="cursor-pointer flex items-center justify-center gap-1 px-2 py-0.5 text-sm rounded-md">
                                            <i className="bg-yellow-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-edit"></i>
                                        </Link>
                                        <i onClick={() => deleteingStudent(i._id)} className="bg-rose-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-remove"></i>
                                    </div>
                                </div>
                                )}
                            </>
                        }
                        {   tab == "courses" &&
                            <>
                                <div className="flex flex-col md:flex-row justify-between items-center border border-gray-600 w-full gap-3 bg-gray-700 px-6 py-4 hover:bg-gray-700">
                                    <div className="text-sm font-bold w-4/12 truncate">Nomi</div>
                                    <div className="text-sm font-bold w-4/12 truncate">Linki</div>
                                    <div className="text-sm font-bold w-4/12 text-end truncate">Bajarish</div>
                                </div>  
                                {courses.map((i) => 
                                    <div key={i._id} className="flex flex-col md:flex-row justify-between items-center border border-gray-600 w-full gap-3 bg-gray-800 px-6 py-2 hover:bg-gray-700">
                                        <div className="w-4/12 font-bold text-sm truncate">{i.videoTitle}</div>
                                        <div className="w-4/12 font-bold text-sm truncate">{i.videoLink}</div>
                                        <div className="w-4/12 font-bold flex items-center justify-end gap-4">
                                            <Link href={`./add/?id=${i._id}`} className="cursor-pointer flex items-center justify-center gap-1 px-2 py-0.5 text-sm rounded-md">
                                                <i className="bg-yellow-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-edit"></i>
                                            </Link>
                                            <i onClick={() => deleteing(i._id)} className="bg-rose-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-remove"></i>
                                        </div>
                                    </div>
                                )}
                            </>
                        }
                        {   tab == "posts" &&
                            <>
                                <div className="flex flex-col md:flex-row justify-between items-center border border-gray-600 w-full gap-3 bg-gray-700 px-6 py-4 hover:bg-gray-700">
                                    <div className="text-sm font-bold w-[120px] truncate">Rasm</div>
                                    <div className="text-sm font-bold w-4/12 truncate">Yozuv</div>
                                    <div className="text-sm font-bold w-4/12 text-end truncate">Bajarish</div>
                                </div> 
                                {posts.map((i) => 
                                    <div key={i._id} className="flex flex-col md:flex-row justify-between items-center border border-gray-600 w-full gap-3 bg-gray-800 px-6 py-2 hover:bg-gray-700">
                                        <Image src={i.postImage} alt={"img"} width={200} height={60} style={{width: "120px", height: "auto", objectFit: "cover"}} />
                                        <div className="w-4/12 text-sm truncate">{i.postText}</div>
                                        <div className="w-4/12 flex items-center justify-end gap-4">
                                            <Link href={`./addpost/?id=${i._id}`} className="cursor-pointer flex items-center justify-center gap-1 px-2 py-0.5 text-sm rounded-md">
                                                <i className="bg-yellow-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-edit"></i>
                                            </Link>
                                            <i onClick={() => deletePost(i._id)} className="bg-rose-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-remove"></i>
                                        </div>
                                    </div>
                                )}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;