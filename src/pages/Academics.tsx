import { PageTransition } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { motion } from 'motion/react';
import { BookOpen, Calculator, Globe, Palette } from 'lucide-react';

export default function Academics() {
  return (
    <PageTransition>
      <div className="bg-[#1A205B] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading subtitle="Academics" title="Educational Progression" centered light className="mb-0" />
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Progression Journey */}
          <div className="space-y-16">
            
            {/* Foundational */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800" alt="Early education" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[#2B358F] font-bold tracking-widest uppercase text-sm mb-4 block">Nursery to Class 4</span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Foundational Years</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  [Placeholder] Focuses on play-way methods, basic numeracy, literacy, and environmental awareness. We emphasize developing cognitive and motor skills in a joyful setting.
                </p>
                <ul className="space-y-3">
                  {['Interactive Learning', 'Creative Arts', 'Basic Literacy & Numeracy', 'Physical Activities'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-[#2B358F]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Middle School */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row-reverse gap-12 items-center"
            >
              <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" alt="Middle school" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[#2B358F] font-bold tracking-widest uppercase text-sm mb-4 block">Class 5 to Class 10</span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Middle & Secondary School</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  [Placeholder] A transition to structured learning with a comprehensive curriculum. Emphasis is placed on analytical thinking, scientific inquiry, and language proficiency preparing students for board examinations.
                </p>
                <ul className="space-y-3">
                  {['Core Sciences & Mathematics', 'Social Sciences', 'Language Arts', 'Computer Education'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-[#2B358F]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>

          {/* Higher Secondary Section */}
          <div className="mt-32">
            <SectionHeading subtitle="Classes 11 & 12" title="Higher Secondary Streams" centered />
            <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
              For higher secondary education, Birpara Academy offers specialized streams tailored to students' career aspirations, supported by expert faculty.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Arts Stream */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-10 border border-gray-200 hover:border-[#2B358F]/30 transition-colors shadow-lg"
              >
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8">
                  <Palette size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Arts / Humanities</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  [Placeholder] Fostering critical thinking, creativity, and a deep understanding of human society, culture, and literature. Ideal for students pursuing law, civil services, journalism, or academia.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Globe size={18} className="text-gray-500" /> Subject Focus Areas
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• History & Geography</li>
                    <li>• Political Science</li>
                    <li>• Advanced Languages</li>
                    <li>• Sociology / Economics</li>
                  </ul>
                </div>
              </motion.div>

              {/* Commerce Stream */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-10 border border-gray-200 hover:border-[#2B358F]/30 transition-colors shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <Calculator size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Commerce</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  [Placeholder] Building strong foundations in business, finance, and economics. Designed for aspiring entrepreneurs, chartered accountants, and finance professionals.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen size={18} className="text-gray-500" /> Subject Focus Areas
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Accountancy</li>
                    <li>• Business Studies</li>
                    <li>• Economics</li>
                    <li>• Commercial Mathematics</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
