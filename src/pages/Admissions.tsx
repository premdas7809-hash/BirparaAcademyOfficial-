import { PageTransition } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, Info } from 'lucide-react';

export default function Admissions() {
  return (
    <PageTransition>
      <div className="bg-[#1A205B] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading subtitle="Join Us" title="Admissions Information" centered light className="mb-0" />
        </div>
      </div>

      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Info className="text-[#2B358F]" />
              General Guidelines
            </h3>
            <div className="prose prose-blue max-w-none text-gray-600">
              <p>
                [Placeholder] Admissions at Birpara Academy are granted based on merit, availability of seats, and fulfillment of eligibility criteria. We welcome students from all backgrounds who are eager to learn and grow in a supportive environment.
              </p>
              <p>
                The academic session commences in [Placeholder Month] every year. Registration forms are typically available at the school office starting from [Placeholder Month].
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-green-500" />
                Admission Process
              </h3>
              <ol className="space-y-6 relative before:absolute before:inset-y-0 before:left-3.5 before:w-px before:bg-gray-200">
                {[
                  "Collect the registration form from the school office during working hours.",
                  "Submit the duly filled form along with required documents before the deadline.",
                  "Attend the interactive session/admission test (for applicable classes).",
                  "Upon selection, complete the fee payment to confirm admission."
                ].map((step, i) => (
                  <li key={i} className="relative pl-10">
                    <span className="absolute left-0 top-1 w-7 h-7 rounded-full bg-blue-50 text-[#2B358F] text-xs font-bold flex items-center justify-center shadow-sm">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#2B358F] text-white rounded-3xl p-8 md:p-10 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <FileText className="text-blue-300" />
                Required Documents
              </h3>
              <p className="text-blue-100 mb-6">
                Please ensure you have self-attested copies of the following documents ready at the time of submission:
              </p>
              <ul className="space-y-4">
                {[
                  "Birth Certificate issued by competent authority",
                  "Transfer Certificate (TC) from the previous school (if applicable)",
                  "Report Card/Marksheet of the previous class passed",
                  "Passport size photographs of the student and parents/guardians",
                  "Aadhar Card copy of the student (if available)",
                  "Caste Certificate (if applicable)"
                ].map((doc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0" />
                    <span className="text-blue-50">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="bg-blue-50 rounded-3xl p-8 md:p-10 text-center border border-blue-100">
            <h3 className="text-2xl font-bold text-[#2B358F] mb-4">Have Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For detailed information regarding fee structures, age criteria, and specific stream combinations for Class 11, please contact the school administration.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="px-6 py-3 bg-white text-[#2B358F] font-bold rounded-full shadow-sm border border-gray-100">
                Call: [Placeholder Phone]
              </span>
              <span className="px-6 py-3 bg-white text-[#2B358F] font-bold rounded-full shadow-sm border border-gray-100">
                Email: [Placeholder Email]
              </span>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
