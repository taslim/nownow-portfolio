import React from 'react';
import { Github } from 'lucide-react';
import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-8 py-16">
      {/* Projects Section */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-xl mb-8">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto mt-16 pt-8 text-sm text-gray-400">
        <a 
          href="https://taslim.xyz" 
          className="hover:underline"
        >
          taslim.xyz
        </a>
      </footer>
    </div>
  );
};

export default App; 