// app/head.tsx
export default function Head() {
  return (
    <>
      <title>บริษัทรับติดตั้งพื้นอีพ็อกซี่ | ซีวิล โปรดักส์</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta
        name="description"
        content="บริการติดตั้งพื้นอีพ็อกซี่ พื้นพียู ซ่อมแซมพื้นและผนัง โดยทีมช่างมืออาชีพ"
      />
      <meta
        name="keywords"
        content="พื้นอีพ็อกซี่, พื้นพียู, ซ่อมแซมพื้น, ซ่อมผนัง, รับเหมาก่อสร้าง"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ซีวิล โปรดักส์ | รับติดตั้งพื้นและซ่อมแซม" />
      <meta
        property="og:description"
        content="รับงานติดตั้งและซ่อมแซมพื้น-ผนัง ทั้งอาคารบ้านและโรงงานอุตสาหกรรม"
      />
      <meta property="og:url" content="https://www.civilproducts.co.th" />
      <meta property="og:image" content="/images/civil-logo.jpg" />
      <meta property="og:site_name" content="ซีวิล โปรดักส์" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ซีวิล โปรดักส์ | รับติดตั้งพื้นและซ่อมแซม" />
      <meta
        name="twitter:description"
        content="รับงานติดตั้งพื้นอีพ็อกซี่ พื้นพียู และงานซ่อมแซมทุกประเภท"
      />
      <meta name="twitter:image" content="/images/civil-logo.jpg" />
      <link rel="canonical" href="https://www.civilproducts.co.th" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap" as="style" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "บริษัท ซีวิล โปรดักส์ จำกัด",
            url: "https://www.civilproducts.co.th",
            logo: "https://www.civilproducts.co.th/images/civil-logo.jpg",
            sameAs: [
              "https://www.facebook.com/yourpage",
              "https://line.me/ti/p/yourlineid"
            ]
          }),
        }}
      />
    </>
  )
}