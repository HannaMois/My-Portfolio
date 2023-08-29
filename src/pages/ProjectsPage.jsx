import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { projects } from 'constants/projects';

const MyProjects = () => {
  const { projectId } = useParams();
  const selectedProject = projects.find(
    project => project.id.toString() === projectId
  );

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  const { title, description, image, code, website } = selectedProject;

  return (
    <>
      <NavLink to={'/home'}>Go Back</NavLink>
      <div>
        <img src={image} alt="project" width="100%" height="247px" />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={website} target="_blank" rel="noreferrer">
          Website
        </a>
        <a href={code} target="_blank" rel="noreferrer">
          Code on GitHub
        </a>
      </div>
    </>
  );
};

export default MyProjects;
