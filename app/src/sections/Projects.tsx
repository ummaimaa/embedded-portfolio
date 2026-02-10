import { useEffect, useRef } from 'react';
import { Microscope, Cpu, ArrowUpDown, Activity, Volume2 } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'AI-driven Leukemia Detection',
      tech: ['Vivado', 'ISE Design Suite', 'TensorFlow', 'Keras', 'Roboflow'],
      description:
        'CNN-based leukemia detection system deployed on Xilinx Spartan-6 FPGA. Trained MobileNetV2 architecture on blood smear images with hardware acceleration for real-time inference.',
      highlights: ['93% accuracy achieved', 'FPGA hardware acceleration', 'RTL code generation'],
      icon: Microscope,
      color: 'bg-red-900/50 text-red-300',
      isFYP: true,
    },
    {
      title: 'RISC Microcontroller',
      tech: ['Xilinx', 'Verilog'],
      description:
        'Designed a 16-bit RISC-based microcontroller architecture using Verilog. Implemented ALU operations, flag registers, and memory handling modules with comprehensive testbench verification.',
      highlights: ['16-bit RISC architecture', 'ALU & flag registers', 'Testbench verification'],
      icon: Cpu,
      color: 'bg-blue-900/50 text-blue-300',
    },
    {
      title: 'Selection Sort System',
      tech: ['Xilinx', 'SystemVerilog', 'Vivado'],
      description:
        'FPGA-based in-place selection sort algorithm with datapath and FSM-based controller architecture. Custom datapath with RAM, comparator, and index registers.',
      highlights: ['FSM-based controller', 'Custom datapath design', 'Automated testbench'],
      icon: ArrowUpDown,
      color: 'bg-green-900/50 text-green-300',
    },
    {
      title: 'EEG Signal Processing',
      tech: ['MATLAB', 'Signal Processing'],
      description:
        'Processed EEG signals to extract alpha, beta, and theta rhythms. Applied FFT and filtering techniques for brainwave pattern recognition and statistical analysis.',
      highlights: ['FFT & filtering', 'Brainwave analysis', 'Statistical measures'],
      icon: Activity,
      color: 'bg-purple-900/50 text-purple-300',
    },
    {
      title: 'Graphic Equalizer',
      tech: ['MATLAB', 'Digital Signal Processing'],
      description:
        '5-band graphic equalizer using Butterworth filters for different audio frequency ranges. Simulated audio filtering with gain adjustment and frequency response optimization.',
      highlights: ['5-band equalizer', 'Butterworth filters', 'Frequency response tuning'],
      icon: Volume2,
      color: 'bg-orange-900/50 text-orange-300',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-[#141414]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="scroll-hidden text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            Projects
          </p>
          <h2 className="scroll-hidden text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Work
          </h2>
          <p className="scroll-hidden text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in FPGA design, embedded systems, and signal processing.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`scroll-hidden bg-gray-900 rounded-xl border border-gray-800 overflow-hidden card-hover group ${
                  project.isFYP ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center`}>
                      <Icon size={24} />
                    </div>
                    {project.isFYP && (
                      <span className="px-3 py-1 bg-white text-black text-xs rounded-full">
                        Final Year Project
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
