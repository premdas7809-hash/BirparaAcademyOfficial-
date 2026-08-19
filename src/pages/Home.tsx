import { PageTransition } from '../components/layout/Layout';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { NOTICES } from '../data/notices';

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000"
            alt="Students on campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A205B]/90 via-[#1A205B]/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8"
            >
              <GraduationCap size={18} />
              <span className="text-sm font-medium tracking-wide">Welcome to Birpara Academy</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
            >
              Empowering Minds,<br />
              <span className="text-blue-300 italic">Inspiring Futures.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-blue-50 mb-10 max-w-xl leading-relaxed"
            >
              A premier co-educational institution in Birpara, West Bengal, committed to academic excellence and holistic development from Nursery to Class 12.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/admissions"
                className="px-8 py-4 bg-white text-[#1A205B] font-bold rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2 group"
              >
                Admission Enquiry
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-transparent text-white font-bold rounded-full border border-white/30 hover:bg-white/10 transition-colors"
              >
                Discover Our School
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20">
            {[
              {
                title: "Academic Excellence",
                desc: "Rigorous curriculum from Nursery to Class 12, offering Arts and Commerce streams in Higher Secondary.",
                icon: BookOpen,
              },
              {
                title: "Holistic Development",
                desc: "Focusing on sports, arts, and character building to shape well-rounded global citizens.",
                icon: Users,
              },
              {
                title: "Modern Facilities",
                desc: "State-of-the-art classrooms, libraries, and laboratories providing an optimal learning environment.",
                icon: GraduationCap,
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl shadow-blue-900/5 border border-gray-100 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#2B358F] flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200"
                alt="Students learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
            </motion.div>
            
            <div>
              <SectionHeading subtitle="About Us" title="Learn & Smile: Our Educational Philosophy" />
              <div className="space-y-6 text-lg text-gray-600 mb-8">
                <p>
                  At Birpara Academy, we believe that education should be a joyous journey. Our motto, "Learn & Smile," encapsulates our commitment to creating an environment where learning is engaging, stress-free, and profoundly effective.
                </p>
                <p>
                  Located in the heart of Birpara, we provide a nurturing atmosphere that encourages intellectual curiosity, fosters creativity, and builds character. Our dedicated faculty members are not just teachers, but mentors who guide students towards discovering their true potential.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#2B358F] font-semibold hover:text-blue-700 transition-colors"
              >
                Read our full story
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Notices */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading subtitle="Updates" title="Latest Notices" className="mb-0" />
            <Link to="/notices" className="hidden sm:inline-flex items-center gap-2 text-[#2B358F] font-semibold hover:text-blue-700">
              View all notices <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NOTICES.slice(0, 3).map((notice, i) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-gray-50 hover:bg-[#2B358F] transition-colors duration-300 border border-gray-100 flex flex-col h-full"
              >
                <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-300 tracking-wide uppercase mb-4 block transition-colors">
                  {notice.date}
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors">
                  {notice.title}
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 transition-colors mb-6 flex-grow line-clamp-3">
                  {notice.shortDescription}
                </p>
                <Link
                  to="/notices"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#2B358F] group-hover:text-white transition-colors uppercase tracking-widest"
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 sm:hidden text-center">
            <Link to="/notices" className="inline-flex items-center gap-2 text-[#2B358F] font-semibold">
              View all notices <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
