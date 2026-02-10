import { useEffect, useRef } from 'react';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

const About = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-[#141414]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="scroll-hidden text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            About Me
          </p>
          <h2 className="scroll-hidden text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Passionate About Hardware
            <br />
            <span className="text-gray-400">Design & Embedded Systems</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <p className="scroll-hidden text-gray-300 text-lg leading-relaxed">
              I'm an Electrical Engineer with expertise in FPGA design, VLSI, and embedded systems. 
              From digital system design to hardware acceleration, I specialize in creating efficient 
              hardware solutions that solve real-world problems.
            </p>
            <p className="scroll-hidden text-gray-300 text-lg leading-relaxed">
              Currently at{' '}
              <span className="font-semibold text-white">AxcelerateAI</span>, I work on machine learning 
              solutions with focus on hardware acceleration. My background in Electrical Engineering from{' '}
              <span className="font-semibold text-white">NUST</span> gives me a strong foundation in 
              digital design, signal processing, and embedded systems.
            </p>
            <p className="scroll-hidden text-gray-300 text-lg leading-relaxed">
              I thrive on solving complex hardware design challenges and continuously learning new 
              technologies. Whether it's designing RISC microcontrollers, implementing FPGA-based 
              systems, or signal processing applications, I'm always up for the challenge.
            </p>
          </div>

          {/* Right Column - Education & Info Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="scroll-hidden bg-gray-900 rounded-xl p-6 card-hover border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1">
                    National University of Sciences and Technology (NUST)
                  </h3>
                  <p className="text-gray-400">Bachelor of Science in Electrical Engineering</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Relevant Coursework: Digital System Design, Microprocessor Systems, Machine Learning, 
                    Computer Vision, Signal Processing, Electronic Circuit Design
                  </p>
                </div>
              </div>
            </div>

            {/* Current Role Card */}
            <div className="scroll-hidden bg-gray-900 rounded-xl p-6 card-hover border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1">
                    Junior Machine Learning Engineer
                  </h3>
                  <p className="text-gray-400">AxcelerateAI · Lahore, Pakistan</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Designing and implementing end-to-end ML solutions with hardware acceleration
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement Card */}
            <div className="scroll-hidden bg-gray-900 rounded-xl p-6 card-hover border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Award className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1">
                    FPGA-Based Leukemia Detection
                  </h3>
                  <p className="text-gray-400">Final Year Project</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Achieved 93% accuracy with MobileNetV2 CNN deployed on Xilinx Spartan-6 FPGA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
