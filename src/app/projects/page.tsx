'use client';

import Image from 'next/image';

type Project = {
  src: string;
  title: string;
};

const groupedProjects: {
  [category: string]: Project[];
} = {
  'Cement': [
    { src: '/images/CementSelf1.jpg', title: 'โครงการ A' },
    { src: '/images/CementSelf2.jpg', title: 'โครงการ B' },
    { src: '/images/CementSelf3.jpg', title: 'โครงการ C' },
    { src: '/images/CementSelf4.jpg', title: 'โครงการ D' },
    { src: '/images/CementSelf5.jpg', title: 'โครงการ E' },
    { src: '/images/CementSelf6.jpg', title: 'โครงการ F' },
    { src: '/images/CementSelf7.jpg', title: 'โครงการ G' },
    { src: '/images/CementSelf8.jpg', title: 'โครงการ H' },
    { src: '/images/CementSelf9.jpg', title: 'โครงการ H' },
  ],
  'EPOXY & PU': [
    { src: '/images/EPOXY1.jpg', title: 'โครงการ I' },
    { src: '/images/EPOXY2.jpg', title: 'โครงการ J' },
    { src: '/images/EPOXY3.jpg', title: 'โครงการ K' },
    { src: '/images/EPOXY4.jpg', title: 'โครงการ L' },
    { src: '/images/EPOXY5.jpg', title: 'โครงการ M' },
    { src: '/images/EPOXY6.jpg', title: 'โครงการ N' },
    { src: '/images/EPOXY7.jpg', title: 'โครงการ P' },
    { src: '/images/EPOXY8.jpg', title: 'โครงการ Q' },
    { src: '/images/EPOXY9.jpg', title: 'โครงการ Q' },
  ],
  'Floorhard': [
    { src: '/images/Floorhard1.jpg', title: 'โครงการ S' },
    { src: '/images/Floorhard2.jpg', title: 'โครงการ T' },
    { src: '/images/Floorhard3.jpg', title: 'โครงการ U' },
    { src: '/images/Floorhard4.jpg', title: 'โครงการ V' },
    { src: '/images/Floorhard5.jpg', title: 'โครงการ X' },
    { src: '/images/Floorhard6.jpg', title: 'โครงการ W' },
    { src: '/images/Floorhard7.jpg', title: 'โครงการ Z' },
    { src: '/images/Floorhard8.jpg', title: 'โครงการ AA' },
    { src: '/images/Floorhard9.jpg', title: 'โครงการ AA' },
  ],
  'Waterproof': [
    { src: '/images/Waterproof1.jpg', title: 'โครงการ BB' },
    { src: '/images/Waterproof2.jpg', title: 'โครงการ CC' },
    { src: '/images/Waterproof3.jpg', title: 'โครงการ DD' },
    { src: '/images/Waterproof4.jpg', title: 'โครงการ EE' },
    { src: '/images/Waterproof5.jpg', title: 'โครงการ FF' },
    { src: '/images/Waterproof6.jpg', title: 'โครงการ GG' },
    { src: '/images/Waterproof7.jpg', title: 'โครงการ HH' },
    { src: '/images/Waterproof8.jpg', title: 'โครงการ II' },
    { src: '/images/Waterproof9.jpg', title: 'โครงการ II' },
  ],
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#1F2560] mb-12 text-center">
          ผลงานของเรา
        </h1>

        {Object.entries(groupedProjects).map(([category, projects]) => (
          <section key={category} className="mb-16">
            {/* Section Header with background */}
            <div className="bg-[#1F2560] text-white px-6 py-4 rounded-t-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-wide">
                {category}
              </h2>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border border-[#1F2560] border-t-0 p-4 rounded-b-lg shadow">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="rounded overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white"
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}