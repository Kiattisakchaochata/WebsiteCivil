'use client';

export default function AboutUsSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* หัวข้อ */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2560] mb-8">
          เกี่ยวกับเรา
        </h2>

        {/* เนื้อหา */}
        <div className="text-gray-800 text-lg leading-8 space-y-6">
          <p className="text-center font-semibold text-xl">
            บริษัท ซีวิล คอนสตรัคชั่น โปรดักส์ จำกัด
          </p>

          <p>
            ผู้ติดตั้งงานพื้นอุตสาหกรรม จำหน่ายและติดตั้งพื้นอุตสาหกรรมต่างๆ
            ซ่อมแซมพื้นผนังคอนกรีต ระบบงานกันซึม ผลงานมากกว่า <strong>1,000,000 ตารางเมตร</strong>
          </p>

          <p>
            ยินดีให้คำปรึกษาและสำรวจหน้างานฟรี โดยวิศวกรโยธา
          </p>

          <div className="bg-gray-100 rounded-md p-4 shadow-sm">
            <p><strong>ที่อยู่:</strong> 69 / 28 ม.3 ต.คลองข่อย อ.ปากเกร็ด จ.นนทบุรี 11120</p>
            <p><strong>โทร:</strong> <a href="tel:0845552781" className="text-blue-600 hover:underline">084-555-2781</a>, <a href="tel:0982546476" className="text-blue-600 hover:underline">098-254-6476</a></p>
            <p><strong>LINE ID:</strong> <span className="text-green-600">CIVIL7165</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}