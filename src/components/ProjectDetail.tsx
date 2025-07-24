import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetailLayout from './project-details/ProjectDetailLayout';
import ProjectGallery from './project-details/ProjectGallery';
import ProjectFeatures from './project-details/ProjectFeatures';
import TechnicalDetails from './project-details/TechnicalDetails';
import LiveLinks from './project-details/LiveLinks';
import { projectsData } from '../data/projectsData';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || '1');
  const project = projectsData.find(p => p.id === projectId) || projectsData[0];

  return (
    <ProjectDetailLayout project={project}>
      <div className="space-y-12">
        {/* Project Overview */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{project.subtitle}</p>
          <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">{project.longDescription}</p>
        </div>

        {/* Live Links (for Client & Startup Websites) or Project Gallery (for other projects) */}
        {project.id === 7 ? (
          <LiveLinks project={project} />
        ) : (
          <ProjectGallery project={project} />
        )}

        {/* Features and Technologies */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-effect rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Features Component */}
        <ProjectFeatures project={project} />

        {/* Technical Details */}
        <TechnicalDetails project={project} />
      </div>
    </ProjectDetailLayout>
  );
};

export default ProjectDetail;
