import { useEffect, useRef } from 'react';
import { Linkedin, Github, Mail, ArrowDown, Cpu, CircuitBoard, Microchip } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const elements = heroRef.current?.querySelectorAll('.scroll-hidden');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-[#141414] overflow-hidden pt-20"
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="particle w-16 h-16 top-20 left-[10%]"
          style={{ animationDelay: '0s', animationDuration: '10s' }}
        />
        <div
          className="particle w-10 h-10 top-40 right-[15%]"
          style={{ animationDelay: '2s', animationDuration: '8s' }}
        />
        <div
          className="particle w-20 h-20 bottom-32 left-[20%]"
          style={{ animationDelay: '4s', animationDuration: '12s' }}
        />
        <div
          className="particle w-12 h-12 top-1/3 right-[25%]"
          style={{ animationDelay: '1s', animationDuration: '9s' }}
        />
        <div
          className="particle w-8 h-8 bottom-20 right-[10%]"
          style={{ animationDelay: '3s', animationDuration: '7s' }}
        />
        <div
          className="particle w-14 h-14 top-[60%] left-[5%]"
          style={{ animationDelay: '5s', animationDuration: '11s' }}
        />

        {/* Decorative Icons */}
        <div className="absolute top-32 right-[20%] text-white/5 animate-float">
          <Cpu size={80} />
        </div>
        <div className="absolute bottom-40 left-[15%] text-white/5 animate-float" style={{ animationDelay: '2s' }}>
          <CircuitBoard size={60} />
        </div>
        <div className="absolute top-1/2 right-[8%] text-white/5 animate-float" style={{ animationDelay: '4s' }}>
          <Microchip size={50} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <p
          className="scroll-hidden text-gray-400 text-lg mb-4 animate-fade-in-up"
          style={{ animationDelay: '200ms', animationFillMode: 'both' }}
        >
          Hello, I'm
        </p>

        {/* Name */}
        <h1
          className="scroll-hidden text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up"
          style={{ animationDelay: '400ms', animationFillMode: 'both' }}
        >
          Ummaima Nadeem
        </h1>

        {/* Title */}
        <h2
          className="scroll-hidden text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6 animate-fade-in-up"
          style={{ animationDelay: '600ms', animationFillMode: 'both' }}
        >
          Electrical Engineer | FPGA & Embedded Systems
        </h2>

        {/* Tagline */}
        <p
          className="scroll-hidden text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '800ms', animationFillMode: 'both' }}
        >
          Specializing in{' '}
          <span className="text-white font-medium">FPGA design</span>,{' '}
          <span className="text-white font-medium">VLSI</span>, and{' '}
          <span className="text-white font-medium">embedded systems</span> with expertise in Verilog, SystemVerilog, and hardware acceleration.
        </p>

        {/* CTA Buttons */}
        <div
          className="scroll-hidden flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: '1000ms', animationFillMode: 'both' }}
        >
          <button
            onClick={() => scrollToSection('#projects')}
            className="btn-primary flex items-center justify-center gap-2"
          >
            View My Work
            <ArrowDown size={18} />
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div
          className="scroll-hidden flex justify-center gap-6 animate-fade-in-up"
          style={{ animationDelay: '1200ms', animationFillMode: 'both' }}
        >
          <a
            href="https://linkedin.com/in/ummaimanadeem"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/ummaimaa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:ummaima83@gmail.com"
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Stats */}
        <div
          className="scroll-hidden mt-16 flex justify-center animate-fade-in-up"
          style={{ animationDelay: '1400ms', animationFillMode: 'both' }}
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">1 Year</div>
            <div className="text-sm text-gray-500 mt-1">Experience</div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
