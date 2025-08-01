'use client';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <div className="max-w-4xl mx-auto px-4 py-10 flex-1">
        <h1 className="text-3xl font-bold text-[#1F2560] mb-4">เกี่ยวกับเรา</h1>
        <p className="text-gray-800 leading-relaxed mb-4">
          บริษัท ซีวิล คอนสตรัคชั่น โปรดักส์ จำกัด เป็นผู้เชี่ยวชาญในการติดตั้งงานพื้นอุตสาหกรรม
          พร้อมให้บริการจำหน่ายและติดตั้งพื้นอุตสาหกรรมหลากหลายประเภท รวมถึงงานซ่อมแซมพื้นและผนังคอนกรีต ระบบกันซึม
          เรามีผลงานมากกว่า 1,000,000 ตารางเมตร
        </p>
        <p className="text-gray-800 leading-relaxed mb-4">
          เรามีทีมงานวิศวกรโยธาที่พร้อมให้คำปรึกษาและลงสำรวจหน้างานฟรี
        </p>

        <div className="bg-gray-100 rounded p-4 mt-6">
          <p><strong>ที่อยู่:</strong> 69 / 28 ม.3 ต.คลองข่อย อ.ปากเกร็ด จ.นนทบุรี 11120</p>
          <p><strong>โทร:</strong> 084-555-2781, 098-254-6476</p>
          <p><strong>LINE ID:</strong> CIVIL7165</p>
        </div>
      </div>
    </main>
  );
}