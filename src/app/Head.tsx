// ✅ app/page.tsx (HomePage)
// ✅ app/head.tsx (ใส่แล้วไม่ต้อง import Head อีก)
export default function Head() {
  return (
    <>
      <title>บริษัทรับติดตั้งพื้นอีพ็อกซี่ | ซีวิล โปรดักส์</title>
      <meta
        name="description"
        content="บริการติดตั้งพื้นอีพ็อกซี่ พื้นพียู ซ่อมแซมพื้นและผนัง โดยทีมช่างมืออาชีพ"
      />
      <meta
        name="keywords"
        content="พื้นอีพ็อกซี่, พื้นพียู, ซ่อมแซมพื้น, ซ่อมผนัง, รับเหมาก่อสร้าง"
      />
      <meta property="og:title" content="ซีวิล โปรดักส์ | รับติดตั้งพื้นและซ่อมแซม" />
      <meta
        property="og:description"
        content="รับงานติดตั้งและซ่อมแซมพื้น-ผนัง ทั้งอาคารบ้านและโรงงานอุตสาหกรรม"
      />
      <meta property="og:url" content="https://www.yourdomain.com" />
    </>
  )
}
