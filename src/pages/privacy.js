import Navbar from "@/components/navbar"
import Layout from "@/layout/layout"
import Head from "next/head"

const Privacy = () => {
    return (
        <div className="max-w-[1350px] mx-auto min-h-screen">
            <Head>
                <title>PRIVACY</title>
            </Head>
            <div>
                <Navbar />
            </div>
            <Layout>
                <div className="pb-10">
                    <h1 className="text-2xl font-bold my-2">Maxfiylik Siyosati (Политика конфиденциальности)</h1>
                    <p className="text-lg">
Ma'lumotlarni to'plash va ishlatish

1.1. Biz Arashov Trading ilovasi (bu erda "Biz", "Bizning" yoki "Bizning Ilova" deb ataladi) sifatida, tashqi ularga yoki tizimga tarmoq orqali ma'lumot qaytarish, to'plash va saqlash imkoniyatiga ega bo'lamiz. Ilovadan foydalanish orqali, sizning ismingiz, familiyangiz, elektron pochta manzilingiz, telefon raqamingiz, joylashuvingiz va boshqa ma'lumotlaringizni olishimiz mumkin. Biz bu ma'lumotlarni ilovada postlar va pullik obunalar tarqatish va xizmatlarimizni ko'rsatish maqsadida ishlatamiz.

Maxfiylik

2.1. Bizning Maxfiylik Siyosati shu maqsadlar bilan foydalaniladi:

Sizning shaxsiy ma'lumotlaringizni himoya qilish.
Sizni ilovada o'z vaqtingizda ko'rsatilgan postlar, xizmatlar va obunalar haqida xabarlar bilan xabarlashish imkoniyatiga ega qilish.
Maxfiylik siyosatini o'zgartirishlari va yangilanishlari xabar qilish orqali bildirish.
Sizning shaxsiy ma'lumotlaringizni sizning roziliklaringiz bo'yicha qo'llab-quvvatlash.
Ma'lumotlarni amalga oshirish

3.1. Biz, sizning shaxsiy ma'lumotlaringizni uchta partiya orasida almashinuv yoki sotishdan tashqari har qanday shaklda boshqarilmaydi.

Maxfiylik siyosatini o'zgartirishlar

4.1. Bizning maxfiylik siyosatimizni o'zgartirishlar va yangilanishlar xabar qilish orqali e'lon qilamiz. Yangi maxfiylik siyosati o'zgartirishlaridan so'ng sizning ma'lumotingizni to'g'risida o'zgartirishlarni o'qib chiqish imkoniyatiga ega bo'lasiz.

Arashov Trading ilovasini o'rnating.</p>
                </div>
            </Layout>
        </div>
    )
}

export default Privacy