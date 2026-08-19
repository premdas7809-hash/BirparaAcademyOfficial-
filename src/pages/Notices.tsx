import { useState } from 'react';
import { PageTransition } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { NOTICES, Notice } from '../data/notices';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronRight, X, FileText } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Notices() {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Academic': return 'bg-blue-100 text-blue-800';
      case 'Administrative': return 'bg-purple-100 text-purple-800';
      case 'Event': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <PageTransition>
      <div className="bg-[#1A205B] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading subtitle="Stay Informed" title="School Notices & Updates" centered light className="mb-0" />
        </div>
      </div>

      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-6">
            {NOTICES.map((notice, i) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedNotice(notice)}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 cursor-pointer hover:shadow-md hover:border-blue-300 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className={cn('px-3 py-1 rounded-full text-xs font-semibold', getCategoryColor(notice.category))}>
                      {notice.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500 font-medium">
                      <Calendar size={14} />
                      {notice.date}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2B358F] transition-colors mb-3">
                  {notice.title}
                </h3>
                
                <div className="flex items-end justify-between">
                  <p className="text-gray-600 line-clamp-2 max-w-2xl">
                    {notice.shortDescription}
                  </p>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#2B358F] group-hover:text-white text-gray-400 transition-colors ml-4">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Notice Modal */}
      <AnimatePresence>
        {selectedNotice && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNotice(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className={cn('px-3 py-1 rounded-full text-xs font-semibold', getCategoryColor(selectedNotice.category))}>
                  {selectedNotice.category}
                </span>
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {selectedNotice.title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-8">
                  <Calendar size={16} />
                  Published on {selectedNotice.date}
                </div>
                
                <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
                  {/* Fake paragraph splitting for placeholder content if needed */}
                  {selectedNotice.content?.split('\n').map((p, i) => (
                    <p key={i} className="leading-relaxed">{p}</p>
                  )) || <p className="leading-relaxed">{selectedNotice.shortDescription}</p>}
                </div>

                {selectedNotice.attachmentUrl && (
                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <a
                      href={selectedNotice.attachmentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-700 rounded-xl font-medium hover:bg-blue-100 transition-colors"
                    >
                      <FileText size={20} />
                      Download Attachment
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
