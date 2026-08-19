import { PageTransition } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { EVENTS } from '../data/events';
import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';

export default function Events() {
  return (
    <PageTransition>
      <div className="bg-[#1A205B] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading subtitle="Campus Life" title="Upcoming Events" centered light className="mb-0" />
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 group"
              >
                {event.imageUrl && (
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2B358F]">
                      <Calendar size={16} />
                      {event.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                      <MapPin size={16} />
                      {event.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2B358F] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
