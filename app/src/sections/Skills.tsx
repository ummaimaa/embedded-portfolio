import { useEffect, useRef } from 'react';
import {
  Code,
  Wrench,
  Users,
  Cpu,
  FileCode,
  Settings,
} from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Verilog', 'SystemVerilog', 'C++', 'C', 'Python'],
    },
    {
      title: 'FPGA & VLSI Tools',
      icon: Cpu,
      skills: ['Xilinx Vivado', 'ISE Design Suite', 'Proteus', 'KiCad'],
    },
    {
      title: 'Simulation & Analysis',
      icon: Settings,
      skills: ['MATLAB', 'Simulink', 'ANSYS', 'Arduino'],
    },
    {
      title: 'Cloud & DevOps',
      icon: FileCode,
      skills: ['AWS (EC2, S3)', 'CI/CD Basics'],
    },
    {
      title: 'Documentation & Design',
      icon: Wrench,
      skills: ['LaTeX', 'AutoCAD', 'Microsoft Office', 'Supervisely'],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        'Project Management',
        'Time Management',
        'Leadership',
        'Teamwork',
        'Problem Solving',
        'Communication',
        'Work under Pressure',
        'Attention to Detail',
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-[#1a1a1a]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="scroll-hidden text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            Skills
          </p>
          <h2 className="scroll-hidden text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="scroll-hidden text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience in FPGA design, embedded systems, and signal processing.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="scroll-hidden bg-gray-900 rounded-xl p-6 border border-gray-800 card-hover"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Icon className="text-black" size={20} />
                  </div>
                  <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="skill-tag text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
