'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

export default function GallerySection() {
  const images = [
    { src: 'gallery1.png', title: 'ซ่อมรอยร้าวพื้น', tag: 'งานซ่อมแซม' },
    { src: 'gallery2.png', title: 'ปรับระดับพื้น', tag: 'งานติดตั้ง' },
    { src: 'gallery3.png', title: 'กันซึมดาดฟ้า', tag: 'เคลือบผิว' },
    { src: 'gallery4.png', title: 'เคลือบ Epoxy', tag: 'พื้นโรงงาน' },
    { src: 'gallery5.png', title: 'Hardener Floor', tag: 'เพิ่มความแข็งแรง' },
    { src: 'epoxy1.png', title: 'Epoxy ป้องกันสารเคมี', tag: 'โรงงานอาหาร' },
    { src: 'hardener.png', title: 'เพิ่มความแข็งพื้น', tag: 'คลังสินค้า' },
    { src: 'pu1.png', title: 'PU Foam Injection', tag: 'กันซึมแนวรอยต่อ' },
    { src: 'wall-crack.png', title: 'ซ่อมผนังแตกร้าว', tag: 'อาคารสูง' },
    { src: 'waterproof.png', title: 'ระบบกันซึมดาดฟ้า', tag: 'งานอาคาร' },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">ผลงานของเรา</h2>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[180px] md:h-[200px] lg:h-[220px] rounded overflow-hidden shadow group">
                {/* ภาพแนวนอน */}
                <Image
                  src={`/images/${item.src}`}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />

                {/* Overlay แบบ Apple TV */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between p-3">
                  <div>
                    <div className="w-8 h-8 bg-white rounded-full shadow-md"></div>
                  </div>

                  <div className="text-white">
                    <button className="bg-white text-black text-xs px-3 py-1 rounded font-semibold mb-2">
                      คลิกดูเพิ่มเติม
                    </button>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-300">{item.tag}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}