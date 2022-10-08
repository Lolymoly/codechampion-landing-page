import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>CodeChampion</title>
        <meta charSet="UTF-8">
        </meta>
        <meta
          name="description"
          content="คอร์ส สอวน. คอมพิวเตอร์ ค่าย 1 ฉบับสมบูรณ์ เรียนออนไลน์ที่ไหนก็ได้ ครอบคลุมทุกศูนย์ สอวน. ในประเทศไทย"
        ></meta>
        <meta
          name="keywords"
          content="codechampion, สอวน. คอมพิวเตอร์, สอนเขียนโปรแกรม, สอวน. คอม"
        ></meta>
        <link
          rel="icon"
          type="image/png"
          href="codechampion-logo-favicon.png"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
