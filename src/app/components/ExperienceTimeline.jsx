import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importing motion from framer-motion

const ExperienceTimeline = () => {
  const jobsData = [
    {
      title: 'Technical Systems Analyst',
      company: 'Royal Bank of Canada',
      range: 'Sep 2024 - Present',
      description: [
        'Supporting the Clients Deposit & Investment team with the migration from COBOL 4 to COBOL 6.',
        'Resolving compatibility issues within z/OS and conducting unit testing to ensure data integrity.',
        'Implementing CI/CD pipelines for automated deployment and documenting processes to onboard the team.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Keystone Platforms',
      range: 'Apr 2024 - Present',
      description: [
        'Building a platform for Jiu Jitsu practitioners to visualize, share, and track metrics of sequences.',
        'Utilizing React Flow for data visualization and FastAPI for a scalable backend infrastructure.',
        'Designing a node-based structure that breaks down sequences into modular components.',
      ],
    },
    {
      title: 'Residence Education Advisor',
      company: 'Wilfrid Laurier University',
      range: 'Sep 2022 - Present',
      description: [
        'Third-year Computer Science student concentrating in Big Data Systems with a minor in UX Design.',
        'Worked as a Residence Education Advisor, collaborating with a team to design programs for first-year students.',
        'Held leadership roles in multiple student organizations, enhancing organizational and leadership skills.',
      ],
    },
    {
      title: 'Permits Information Technician',
      company: 'Toronto District School Board',
      range: 'May 2021 - Sep 2021',
      description: [
        'Led a 4-person team to collect and verify over 50,000 infrastructure records across 125+ schools.',
        'Automated data entry using Python and VBA, saving 3 hours per week.',
        'Developed a Bash script to detect inconsistent room dimensions, ensuring data integrity.',
      ],
    },
  ];

  const [activeTabId, setActiveTabId] = useState(0);
  

  return (
<section className="flex flex-col md:flex-row max-w-5xl mx-auto mt-10 justify-center items-center md:items-start">

      <div className="md:w-1/4">
        <ul className="list-none border-l-2 border-dashed border-gray-600">
          {jobsData.map((job, i) => (
            <li key={i}>
              <button
                className={`block text-left px-4 py-2 w-full text-lg ${activeTabId === i ? 'text-white border-l-4 border-dashed border-[#cccccc]' : 'text-gray-400 hover:bg-[#424242] hover:text-white'}`}
                onClick={() => setActiveTabId(i)}>
                {job.company}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Job Details */}
      <motion.div
        key={activeTabId} // Important for animating new content
        className="md:w-3/4 p-4"
        initial={{ opacity: 0, y: 20 }} // Animation on initial render
        animate={{ opacity: 1, y: 0 }} // Animation when state changes
        exit={{ opacity: 0, y: -20 }} // Animation when exiting
        transition={{ duration: 0.5 }} // Timing of animation
      >
        <h3 className="text-2xl text-white font-header">
          {jobsData[activeTabId].title}
        </h3>
        <p className="text-gray-400 italic">{jobsData[activeTabId].range}</p>
        <ul className="list-disc ml-5 mt-4 text-gray-300 space-y-2">
          {jobsData[activeTabId].description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default ExperienceTimeline;
