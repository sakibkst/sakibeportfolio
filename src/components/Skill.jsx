import React, { useState } from 'react';

const skillData = [
  { name: 'HTML', icon: '🌐', category: 'Languages' },
  { name: 'CSS', icon: '🎨', category: 'Languages' },
  { name: 'JavaScript', icon: '🟨', category: 'Languages' },
  { name: 'TypeScript', icon: '🟦', category: 'Languages' },
  { name: 'Python', icon: '🐍', category: 'Languages' },
  { name: 'SQL', icon: '🗄️', category: 'Databases' },
  { name: 'React JS', icon: '⚛️', category: 'Frontend' },
  { name: 'Next JS', icon: '⏭️', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '💨', category: 'Frontend' },
  { name: 'Figma', icon: '🎨', category: 'Other' },
  { name: 'Nest JS', icon: '🐞', category: 'Backend' },
  { name: 'Node JS', icon: '🟩', category: 'Backend' },
  { name: 'Express JS', icon: '🚂', category: 'Backend' },
  { name: 'Prisma', icon: '🔷', category: 'Backend' },
  { name: 'MySQL', icon: '🐬', category: 'Databases' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Databases' },
  { name: 'Git', icon: '🔧', category: 'Other' },
  { name: 'GitHub', icon: '🐙', category: 'Other' },
  { name: 'Vercel', icon: '▲', category: 'Other' },
  { name: 'Heroku', icon: '☁️', category: 'Other' },
  { name: 'Render', icon: '🖥️', category: 'Other' },
  { name: 'Linux', icon: '🐧', category: 'Other' },
  { name: 'Clerk', icon: '🛡️', category: 'Other' },
  { name: 'Jira', icon: '📋', category: 'Other' },
  { name: 'Selenium', icon: '🧪', category: 'Testing' },
  { name: 'Apache JMeter', icon: '🔥', category: 'Testing' },
  { name: 'Postman', icon: '📮', category: 'Testing' },
  { name: 'MongoDB', icon: '🍃', category: 'Databases' },
  { name: 'Mongoose', icon: '🐭', category: 'Databases' },
  { name: 'BrowserStack', icon: '🌐', category: 'Testing' },
  { name: 'Socket.io', icon: '🔌', category: 'Other' },
];

const skillCategories = [
  'All',
  'Languages',
  'Frontend',
  'Backend',
  'Databases',
  'Testing',
  'Other',
];

export default function Skill() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 tracking-widest flex items-center justify-center">
          <span className="border-b-4 border-primary mr-3" style={{ minWidth: 80 }}></span>
          SKILLS
          <span className="border-b-4 border-transparent ml-3" style={{ minWidth: 80 }}></span>
        </h2>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              className={`px-3 py-1 rounded-full font-medium transition-colors border-b-2 ${selectedCategory === cat ? 'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-primary'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillData.filter(skill => selectedCategory === 'All' || skill.category === selectedCategory).map(skill => (
            <div key={skill.name} className="rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg bg-gradient-to-br from-purple-400/40 to-cyan-400/30 hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">{skill.icon}</div>
              <div className="font-semibold text-lg tracking-wide">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
