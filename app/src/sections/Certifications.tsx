import { useEffect, useRef } from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      title: 'Data Science and Analytics',
      provider: 'HP Life — HP Foundation',
      description:
        'Learned foundational concepts of data science, data-driven decision making, and basic data visualization techniques using real-world scenarios.',
      skills: [
        'Data analysis fundamentals',
        'Data visualization',
        'Decision making with data',
      ],
      date: '2023',
    },
    {
      title: 'Machine Learning, AI, and Data Science Certification',
      provider: 'eHunar',
      description:
        'Completed a comprehensive certification covering core concepts of Artificial Intelligence, Machine Learning, Data Science, and Python.',
      skills: [
        'AI fundamentals',
        'Machine learning algorithms',
        'Python programming',
        'Hands-on project experience',
      ],
      date: '2023',
    },
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-24 bg-[#141414]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="scroll-hidden text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            Certifications
          </p>
          <h2 className="scroll-hidden text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Credentials
          </h2>
          <p className="scroll-hidden text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and skill development through industry-recognized programs.
          </p>
        </div>

        {/* Certifications List */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="scroll-hidden bg-gray-900 rounded-xl p-6 md:p-8 card-hover border-l-4 border-white"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Award className="text-black" size={28} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <span className="text-sm text-gray-500">{cert.date}</span>
                  </div>

                  <p className="text-gray-400 font-medium mb-3">{cert.provider}</p>

                  <p className="text-gray-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills Gained */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, sIndex) => (
                      <div
                        key={sIndex}
                        className="flex items-center gap-1 px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                      >
                        <CheckCircle size={14} className="text-green-400" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
