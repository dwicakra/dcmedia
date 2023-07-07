import React, { useEffect, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Main from "./containers/Main";
import "../assets/marquee.css";

function Togel() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const animation = marqueeElement.animate(
      [{ transform: "translateX(100%)" }, { transform: "translateX(-100%)" }],
      { duration: 30000, iterations: Infinity }
    );

    return () => {
      animation.cancel();
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TVJNGVR');`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>DcMedia — Prediksi Togel Terpercaya</title>
        <meta name="title" content="DcMedia — Prediksi Togel Terpercaya" />
        <meta
          name="description"
          content="Alat prediksi togel yang telah dibuktikan validnya data yang digunakan berdasarkan algoritma dan perhitungan prediksi togel yang ada."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dcmedia.my.id/" />
        <meta
          property="og:title"
          content="DcMedia — Prediksi Togel Terpercaya"
        />
        <meta
          property="og:description"
          content="Alat prediksi togel yang telah dibuktikan validnya data yang digunakan berdasarkan algoritma dan perhitungan prediksi togel yang ada."
        />
        <meta
          property="og:image"
          content="https://dcmedia.my.id/meta/banner.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dcmedia.my.id/" />
        <meta
          property="twitter:title"
          content="DcMedia — Prediksi Togel Terpercaya"
        />
        <meta
          property="twitter:description"
          content="Alat prediksi togel yang telah dibuktikan validnya data yang digunakan berdasarkan algoritma dan perhitungan prediksi togel yang ada."
        />
        <meta
          property="twitter:image"
          content="https://dcmedia.my.id/meta/banner.jpg"
        />
      </Helmet>

      <div className="marquee-container">
        <div ref={marqueeRef} className="marquee">
          Untuk Pasang Iklan Silahkan Hubungi cs@dcmedia.my.id
        </div>
        <div>
          <Main />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Togel;
