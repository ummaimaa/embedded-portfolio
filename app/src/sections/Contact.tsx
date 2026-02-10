import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-hidden');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ummaima83@gmail.com',
      href: 'mailto:ummaima83@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 319-0782568',
      href: 'tel:+923190782568',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ummaimanadeem',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ummaimaa',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-[#1a1a1a]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <p className="scroll-hidden text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
              Contact
            </p>
            <h2 className="scroll-hidden text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="scroll-hidden text-gray-400 text-lg leading-relaxed mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="scroll-hidden flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-white transition-colors group"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-black" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-gray-300 transition-colors">
                        {item.value}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="ml-auto text-gray-600 group-hover:text-white transition-colors"
                      size={20}
                    />
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="scroll-hidden">
              <p className="text-sm text-gray-500 mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="scroll-hidden bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Message sent! (Demo functionality)');
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 py-4"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
