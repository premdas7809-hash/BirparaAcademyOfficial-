import { PageTransition } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { MapPin, Phone, Mail, Instagram, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <PageTransition>
      <div className="bg-[#1A205B] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading subtitle="Get in Touch" title="Contact Us" centered light className="mb-0" />
        </div>
      </div>

      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">We'd love to hear from you</h3>
                <p className="text-lg text-gray-600">
                  Whether you have a question about admissions, academics, or anything else, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#2B358F] flex items-center justify-center shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Birpara Academy<br />
                      College Road, Birpara<br />
                      West Bengal, PIN: 735204<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#2B358F] flex items-center justify-center shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us</h4>
                    <p className="text-gray-600">
                      [Placeholder Phone Number]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#2B358F] flex items-center justify-center shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Email Us</h4>
                    <p className="text-gray-600">
                      [Placeholder Email Address]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#2B358F] flex items-center justify-center shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Monday - Friday: 9:00 AM - 3:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-6">Connect on Social Media</h4>
                <a
                  href="https://www.instagram.com/birpara.academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <Instagram size={20} />
                  Follow @birpara.academy
                </a>
              </div>
            </div>

            {/* Form Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B358F]/20 focus:border-[#2B358F] transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B358F]/20 focus:border-[#2B358F] transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B358F]/20 focus:border-[#2B358F] transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B358F]/20 focus:border-[#2B358F] transition-all">
                    <option>General Enquiry</option>
                    <option>Admissions</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B358F]/20 focus:border-[#2B358F] transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-[#2B358F] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors">
                  <Send size={20} />
                  Send Message
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">This form is a functional prototype. No actual emails are sent.</p>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
