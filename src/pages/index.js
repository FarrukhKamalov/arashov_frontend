import { Competition, Contact, Footer, Main, Navbar, Price, TraderInfo, Usefull } from "@/components";
import Head from "next/head"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { memo, useEffect } from "react"
import Layout from "@/layout/layout"

function Index() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Layout>
            <Head>
                <title>Arashov - Kriptovalyutada daromad qilishni o'rganing</title>
                <meta name="description" content="Kriptovalyutada daromad qilishni o'rganing, Biz bilan birgalikda dunyoning istalgan nuqtasidan turib pul ishlang" />
                <meta name="keywords" content="arashov, online, kripto, cripto, pul, soqqa, trader, traderlik, treydirlik, arashov o'rgatish, o'rganish, traderlik darslari, cripto o'qish, arashovonline" />
                <link rel="shortcut icon" href="../assets/images/Logo.png" type="image/x-icon" />

                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="Uzbek"/>
                <meta name="author" content="arashov"/>

                <meta property="og:title" content="ARASHOV" />
                <meta property="og:site_name" content="Arashov"/>
                <meta property="og:description" content="Kriptovalyutada daromad qilishni o'rganing, Biz bilan birgalikda dunyoning istalgan nuqtasidan turib pul ishlang" />
                <meta property="og:image" content="../assets/images/fav.png" />
            </Head>
            <main>
                <div className="site-top">
                    <Navbar />
                    <Main />
                </div>
                <Usefull />
                <TraderInfo />
                <Competition />
                <Price />
                <div className="pt-20">
                    <div className="relative z-10">
                        <p className="mezzardBold boxTitle competition__title">TRADINGNI MUKAMMAL O’RGANMOQCHI BO’SANGIZ</p>
                        <p className="mezzardBold boxTitle text-center">MA’LUMOTLARINGIZNI TO’LDIRING</p>
                    </div>
                    <div className="mt-[50px]">
                        <div className="flex justify-center relative">
                            <div className="bright1 absolute mr-[250px]"></div>
                        </div>
                        <div className="flex justify-center relative z-10">
                            <div className="bg-[#031026] border-[#3A7EFF] border-2 p-[40px] rounded-[35px]">
                                <div className="bg-[#FFFFFF] w-full flex pl-2 justify-start items-center border-[1px] rounded-lg border-[#0152D1]">
                                    <i className="fa-solid fa-user bg-black text-white rounded-md px-[8px] py-[8px]"></i>
                                    <input autoComplete="off" className={"px-3 w-[320px] py-2 bg-[#FFFFFF] text-gray-900 mezzardBold form-input outline-0 rounded-r-xl"} type="text" name="fullName" placeholder="Ism Familiya" />
                                </div>
                                <div className="bg-[#FFFFFF] mt-[10px] w-full flex pl-2 justify-start items-center border-[1px] rounded-lg border-[#0152D1]">
                                    <i className="fa-solid fa-user bg-black text-white rounded-md px-[8px] py-[8px]"></i>
                                    <input autoComplete="off" className={"px-3 w-[320px] py-2 bg-[#FFFFFF] text-gray-900 mezzardBold form-input outline-0 rounded-r-xl"} type="text" name="fullName" placeholder="Ism Familiya" />
                                </div>
                                <div className="bg-[#FFFFFF] mt-[10px] w-full flex pl-2 justify-start items-center border-[1px] rounded-lg border-[#0152D1]">
                                    <i className="fa-solid fa-user bg-black text-white rounded-md px-[8px] py-[8px]"></i>
                                    <input autoComplete="off" className={"px-3 w-[320px] py-2 bg-[#FFFFFF] text-gray-900 mezzardBold form-input outline-0 rounded-r-xl"} type="text" name="fullName" placeholder="Ism Familiya" />
                                </div>
                                <div className="tasdiqlash_btn cursor-pointer hover:scale-105 transition-all">
                                    <p className="mezzardBold">TASDIQLASH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[75px]">
                    <Contact />
                </div>
                <Footer />
            </main>
        </Layout>
    );
}

export default memo(Index);