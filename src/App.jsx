import React from 'react';
import { Github } from 'lucide-react';

const App = () => {
  const projects = [
    {
      title: "Fortune Cookie",
      description: "Get daily fortune cookies from a single tap",
      github: "https://github.com/taslim/fortunekeeper",
      live: "https://fortune.nownow.ai"
    },
    {
      title: "Tip Calculator",
      description: "Calculate tips from your bill",
      github: null,
      live: "https://bill.nownow.ai"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 px-8 py-16">
      {/* Projects Section */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-xl mb-8">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
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
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto mt-16 pt-8 text-sm text-gray-400">
        <a href="https://taslim.xyz" className="hover:underline">
          taslim.xyz
        </a>
      </footer>
    </div>
  );
};

export default App; 