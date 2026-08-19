import { useState } from 'react';
import { PageTransition } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GALLERY, GalleryItem } from '../data/gallery';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(GALLERY.map(item => item.category)))];
  
  const filteredGallery = filter === 'All' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === filter);

  return (
    <PageTransition>
      <div className="bg-[#1A205B] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading subtitle="Visuals" title="Photo Gallery" centered light className="mb-0" />
        </div>
      </div>

      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  filter === cat 
                    ? 'bg-[#2B358F] text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredGallery.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={item.id}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-gray-200 shadow-sm"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-1 block">
                        {item.category}
                      </span>
                      <h3 className="text-white font-semibold text-lg leading-tight flex items-center gap-2">
                        {item.title}
                        <ZoomIn size={18} className="text-white/70" />
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" 
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">{selectedImage.title}</h3>
                <span className="text-blue-300 tracking-widest uppercase text-sm font-bold">{selectedImage.category}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
