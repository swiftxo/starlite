import React from 'react';

const TechTab = () => {
  const technologies = [
    'COBOL',
    'Python',
    'TensorFlow',
    'OpenShift',
    'JavaScript',
    'FastAPI',
    'GraphQL',
    'Node.js',
    'React',
    'OpenCV',
    'RBC Helios',
    'TypeScript',
  ];

  return (
    <div className="mx-3">
      <p className="font-body mb-4">Recently, I&apos;ve been working a lot with:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center space-x-2">
            {/* Bullet point icon */}
            <svg className="w-4 h-4 text-[#ffffff]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
            </svg>
            <span className="font-body text-[#cccccc]">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTab;
