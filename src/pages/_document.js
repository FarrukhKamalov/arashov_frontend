import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/Logo.png" type="image/x-icon"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Kriptovalyutada daromad qilishni o'rganing</title>
        <meta name="title" content="Kriptovalyutada daromad qilishni o'rganing"/>
        <meta name="description" content="Kriptovalyutada daromad qilishni o'rganing, Biz bilan birgalikda dunyoning istalgan nuqtasidan turib pul ishlang"/>
        <meta name="keywords" content="arashov, online, kripto, cripto, pul, soqqa, trader, traderlik, treydirlik, arashov o'rgatish, o'rganish, traderlik darslari, cripto o'qish, arashovonline"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Uzbek"/>
        <meta name="author" content="arashov"/>

        <meta property="og:title" content="ARASHOV" />
        <meta property="og:site_name" content="Arashov"/>
        <meta property="og:description" content="Kriptovalyutada daromad qilishni o'rganing, Biz bilan birgalikda dunyoning istalgan nuqtasidan turib pul ishlang" />
        <meta property="og:image" content="/fav.png" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
      </Head>
      <body>

        <Main />
        <NextScript />

        {/* <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"></script>
        <div id="coinmarketcap-widget-marquee" coins="1,825,1027,1839,74,52,3408,2" currency="USD" theme="dark" transparent="false" show-symbol-logo="true"></div> */}
      </body>
    </Html>
  )
}