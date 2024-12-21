import React from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:8000/api/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="card bg-light text-dark">
      <div className="card-body">
      <ul className="list-group">
        {projects.map(project => (
            <li key={project.id} className="list-group-item text-center">{project.title}</li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
