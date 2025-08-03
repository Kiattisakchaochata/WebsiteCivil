// ✅ src/components/analytics/AnalyticsHead.tsx
export default function AnalyticsHead() {
  return (
    <>
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KW8DCSP3');
          `,
        }}
      />

      {/* Google Analytics GA4 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-6306521732"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6306521732');
          `,
        }}
      />

      {/* Google Ads Conversion Tracking */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-4786491709"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-4786491709');
          `,
        }}
      />
    </>
  );
}