import { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false, className, light = false }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered ? 'text-center' : '', className)}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className={cn(
            'inline-block text-sm font-bold tracking-widest uppercase mb-3',
            light ? 'text-blue-200' : 'text-[#2B358F]'
          )}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.1 }}
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
          light ? 'text-white' : 'text-gray-900'
        )}
      >
        {title}
      </motion.h2>
      {centered && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={cn(
            'h-1 w-24 mx-auto mt-6 rounded-full',
            light ? 'bg-white/20' : 'bg-[#2B358F]/20'
          )}
        />
      )}
    </div>
  );
}
