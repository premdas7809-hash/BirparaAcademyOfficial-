import { PageTransition } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { motion } from 'motion/react';
import { Target, Heart, Lightbulb, Compass, Users } from 'lucide-react';

export default function About() {
  return (
    <PageTransition>
      {/* Header */}
      <div className="bg-[#1A205B] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading subtitle="Our Story" title="About Birpara Academy" centered light className="mb-0" />
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">A Legacy of Excellence in Education</h3>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  [Placeholder] Established in the heart of Birpara, Birpara Academy has been a beacon of learning for decades. We started with a simple vision: to provide high-quality education that is accessible, engaging, and transformative.
                </p>
                <p>
                  Our journey from a small primary school to a full-fledged higher secondary institution is a testament to the trust placed in us by the community and the relentless dedication of our educators. We pride ourselves on blending traditional values with modern pedagogical approaches.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600" alt="Classroom" className="rounded-2xl w-full h-48 object-cover shadow-lg" />
               <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600" alt="Students" className="rounded-2xl w-full h-48 object-cover shadow-lg mt-8" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-32">
            <div className="bg-blue-50 rounded-3xl p-10 md:p-14">
              <div className="w-16 h-16 bg-[#2B358F] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                [Placeholder] To nurture intellectual curiosity, foster critical thinking, and instill a lifelong love for learning in a safe and inclusive environment. We aim to equip our students with the skills and values necessary to navigate and contribute meaningfully to a rapidly changing world.
              </p>
            </div>
            <div className="bg-orange-50 rounded-3xl p-10 md:p-14">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                [Placeholder] To be recognized as a premier center of holistic education that empowers every student to discover their unique potential, embrace their individuality, and become compassionate, responsible global citizens.
              </p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionHeading subtitle="Philosophy" title='The "Learn & Smile" Approach' centered />
            <p className="text-xl text-gray-600 leading-relaxed">
              We firmly believe that a happy child learns best. Our curriculum and campus life are designed to balance academic rigor with emotional well-being, ensuring that every student looks forward to coming to school each day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Nurturing Environment", desc: "A safe space where every child feels valued." },
              { icon: Compass, title: "Guided Discovery", desc: "Encouraging learning through exploration." },
              { icon: Users, title: "Collaborative Spirit", desc: "Fostering teamwork and mutual respect." },
              { icon: Lightbulb, title: "Creative Expression", desc: "Celebrating individual talents and ideas." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 text-[#2B358F] flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
