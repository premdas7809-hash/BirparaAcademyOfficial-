import { PageTransition } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FACULTY } from '../data/faculty';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Faculty() {
  const principal = FACULTY.find(f => f.designation === 'Principal');
  const staff = FACULTY.filter(f => f.designation !== 'Principal');

  return (
    <PageTransition>
      <div className="bg-[#1A205B] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading subtitle="Leadership & Staff" title="Our Faculty" centered light className="mb-0" />
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Principal's Message Section */}
          {principal && (
            <div className="mb-32">
              <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-blue-900/5 border border-gray-100 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="w-full lg:w-1/3 shrink-0 relative">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                    <img src={principal.imageUrl} alt="Principal" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#2B358F] rounded-2xl flex items-center justify-center text-white shadow-xl rotate-12">
                    <Quote size={40} className="opacity-80" />
                  </div>
                </div>
                
                <div className="w-full lg:w-2/3">
                  <span className="text-[#2B358F] font-bold tracking-widest uppercase text-sm mb-4 block">Principal's Message</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-serif italic">
                    "Education is not the filling of a pail, but the lighting of a fire."
                  </h3>
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
                    <p>
                      [Placeholder] Welcome to Birpara Academy. It is my privilege to lead an institution where every child is valued, nurtured, and encouraged to excel. Our dedicated team of educators strives to create an environment that promotes not just academic rigor, but character building and critical thinking.
                    </p>
                    <p>
                      We believe in a holistic approach to education, ensuring that our students are well-prepared to face the challenges of the modern world with confidence and empathy. Let us work together to make the learning journey of every child beautiful and meaningful.
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">{principal.name}</div>
                    <div className="text-gray-500 font-medium">Principal, Birpara Academy</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Faculty Grid */}
          <SectionHeading subtitle="Educators" title="Meet Our Teachers" centered />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {staff.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  {member.imageUrl ? (
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Photo
                    </div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-[#2B358F] font-semibold text-sm mb-3">{member.designation}</p>
                  {member.department && (
                    <p className="text-gray-500 text-sm mb-4 px-3 py-1 bg-gray-50 rounded-full inline-block">
                      {member.department}
                    </p>
                  )}
                  {member.bio && (
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
