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
                <Contact />
                <Footer />
            </main>
        </Layout>
    );
}

export default memo(Index);