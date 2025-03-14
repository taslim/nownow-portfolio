import React from 'react';
import { Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const isTrustedDomain = (url) => {
    const trustedDomains = ['nownow.ai', 'taslim.xyz'];
    try {
      const hostname = new URL(url).hostname;
      return trustedDomains.some(domain => hostname.endsWith(domain));
    } catch {
      return false;
    }
  };

  return (
    <div className="group">
      <div className="flex items-center gap-3 mb-1">
        <a 
          href={project.live}
          className="text-rose-700 text-lg hover:underline transition-colors"
        >
          {project.title}
        </a>
        {project.github && (
          <a 
            href={project.github} 
            className="text-gray-400 hover:text-rose-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
          </a>
        )}
      </div>
      <p className="text-gray-600 text-sm">{project.description}</p>
    </div>
  );
};

export default ProjectCard; 