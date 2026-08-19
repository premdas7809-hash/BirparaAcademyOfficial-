import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone, GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A205B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 inline-block">
              <div className="w-10 h-10 bg-white text-[#1A205B] rounded-full flex items-center justify-center">
                <GraduationCap size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">Birpara Academy</span>
                <span className="text-xs text-blue-200 font-medium tracking-wide uppercase">Learn & Smile</span>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              A premier educational institution dedicated to holistic development and academic excellence from Nursery to Class 12.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Academics', path: '/academics' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Notices', path: '/notices' },
                { name: 'Gallery', path: '/gallery' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-blue-200 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-300 shrink-0 mt-0.5" />
                <span className="text-blue-200 text-sm">
                  College Road, Birpara<br />
                  West Bengal, PIN: 735204<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-300 shrink-0" />
                <span className="text-blue-200 text-sm">[Placeholder Phone]</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-300 shrink-0" />
                <span className="text-blue-200 text-sm">[Placeholder Email]</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Connect</h3>
            <p className="text-blue-200 text-sm mb-4">Follow us on Instagram for the latest updates and school life.</p>
            <a
              href="https://www.instagram.com/birpara.academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Birpara Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-blue-300">
            <span>Learn</span>
            <span className="w-1 h-1 rounded-full bg-blue-300"></span>
            <span>Smile</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
