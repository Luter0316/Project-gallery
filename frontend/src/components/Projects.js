import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
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
      <h1 className="text-center mt-5 mb-5">Список проектов</h1>
        <ul className="list-group">
          {projects.map(project => (
            <li key={project.id} className="list-group-item text-center">
              <Link to={`/projects/${project.id}`} className='text-decoration-none text-dark'>{project.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
