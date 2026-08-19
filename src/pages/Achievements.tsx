import { PageTransition } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ACHIEVEMENTS } from '../data/achievements';
import { motion } from 'motion/react';
import { Trophy, Award, Star } from 'lucide-react';

export default function Achievements() {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Sports': return Trophy;
      case 'Academic': return Award;
      default: return Star;
    }
  };

  return (
    <PageTransition>
      <div className="bg-[#1A205B] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading subtitle="Milestones" title="Our Achievements" centered light className="mb-0" />
        </div>
      </div>

      <div className="py-20 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Vertical Line */}
          <div className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {ACHIEVEMENTS.map((achievement, i) => {
              const isEven = i % 2 === 0;
              const Icon = getIcon(achievement.category);

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-white rounded-full border-4 border-gray-50 shadow-sm flex items-center justify-center -translate-x-1/2 z-10 hidden md:flex">
                    <div className="w-10 h-10 rounded-full bg-[#2B358F] text-white flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 flex">
                    <div className={`w-full bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group ${isEven ? 'md:ml-12' : 'md:mr-12'}`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-4 py-1.5 bg-[#2B358F] text-white rounded-full text-sm font-bold shadow-sm">
                            {achievement.year}
                          </span>
                          <span className="text-gray-500 font-medium text-sm tracking-wide uppercase">
                            {achievement.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#2B358F] transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty spacer for alternating layout */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
