import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(proj => proj.id === id);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.detail}</p>
      {/* 추가적인 상세 내용 */}
    </div>
  );
};

export default ProjectDetails;
