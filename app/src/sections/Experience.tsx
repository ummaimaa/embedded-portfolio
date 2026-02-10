import { useEffect, useRef } from 'react';
import { MapPin, Calendar, Building2 } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      role: 'Junior Machine Learning Engineer',
      company: 'AxcelerateAI',
      location: 'Lahore, Pakistan',
      period: 'July 2025 – Present',
      description:
        'Designing and implementing end-to-end machine learning solutions, including data preprocessing, model development, evaluation, and deployment. Documenting experiments, model architectures, and optimizing model performance.',
      highlights: ['End-to-end ML pipelines', 'Model deployment', 'Hardware acceleration'],
    },
    {
      role: 'SIEA Intern',
      company: 'Siemens (Pakistan) Engg. Co. Ltd.',
      location: 'Lahore, Pakistan',
      period: 'August 2024',
      description:
        'Gained practical exposure to switchboards, switchgears, panels, and substations. Contributed to secondary engineering and sales documentation.',
      highlights: ['Switchgear systems', 'Substation engineering', 'Technical documentation'],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-[#1a1a1a]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="scroll-hidden text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            Experience
          </p>
          <h2 className="scroll-hidden text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            My Professional Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-700 via-white to-gray-700 md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`scroll-hidden relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-start md:items-center gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900 shadow-md md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[45%] ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-800 card-hover">
                    {/* Role & Company */}
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-gray-300 mb-4">
                      <Building2 size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
