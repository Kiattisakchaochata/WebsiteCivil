// ✅ app/layout.tsx
import '../styles/globals.css'
import NewNavbar from '@/components/homepage/NewNavbar'
import ContactFloatingButton from '@/components/shared/ContactFloatingButton'
import UtilityFloatingButtons from '@/components/shared/UtilityFloatingButtons'
import Footer from '@/components/homepage/Footer'
import Script from 'next/script'

export const metadata = {
  title: 'Civil Products',
  description: 'บริษัทรับเหมาติดตั้งและซ่อมแซมพื้นผิว',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        {/* ✅ Favicon และ OG */}
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/images/og-cover.jpg" />

        {/* ✅ Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6306521732"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6306521732');
          `}
        </Script>

        {/* ✅ Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-4786491709"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-4786491709');
          `}
        </Script>

        {/* ✅ Facebook Pixel (Meta) */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '602322676022753');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=602322676022753&ev=PageView&noscript=1"
          />
        </noscript>

        {/* ✅ Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KW8DCSP3');
          `}
        </Script>
      </head>

      <body>
        {/* ✅ GTM fallback for noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KW8DCSP3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* ✅ Main Layout */}
        <NewNavbar />
        {children}
        <ContactFloatingButton />
        <UtilityFloatingButtons />
        <Footer />
      </body>
    </html>
  )
}