import { Linkedin, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#141414] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>© {currentYear} Ummaima Nadeem. Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>All rights reserved.</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => alert('Privacy Policy coming soon!')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => alert('Terms of Service coming soon!')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/ummaimanadeem"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/ummaimaa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:ummaima83@gmail.com"
              className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
