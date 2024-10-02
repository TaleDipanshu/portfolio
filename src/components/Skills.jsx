import React from 'react';
// Import necessary Font Awesome icons from react-icons/fa
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiPython } from 'react-icons/si';
import { BsGraphUp } from 'react-icons/bs'; // For DSA
import { GiArtificialIntelligence } from 'react-icons/gi';

const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#E44D26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'React', icon: FaReact, color: '#61DBFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#3C873A' },
  { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
  { name: 'MongoDB', icon: FaDatabase, color: '#47A248' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
  { name: 'Python', icon: SiPython, color: '#306998' },
  { name: 'Java', icon: FaJava, color: '#FFD700' },
  { name: 'DSA', icon: BsGraphUp, color: '#FF6347' },
 
];
const Skills= () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black py-16">
      <h2 className="text-4xl text-white font-bold mb-12">My Skills</h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center bg-white bg-opacity-10 rounded-full p-2 shadow-xl transform transition-transform hover:scale-110"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            {/* Skill Icon */}
            <skill.icon
              className="w-16 h-16 md:w-20 md:h-20"
              style={{ color: skill.color }}
            />
            {/* Skill Name */}
            <span className="text-white text-sm md:text-base font-semibold mt-4">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
