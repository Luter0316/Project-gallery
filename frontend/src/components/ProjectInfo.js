import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectInfo = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/projects/${id}/`)
      .then(response => {
        setProject(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="card bg-light text-dark">
      <h1 className="text-center mt-5 mb-5">Редактирование информации</h1>
      <div className="card-body">
        <h2 className="text-center card-title">{project.title}</h2>
        <p className="text-center card-text">{project.description}</p>
        {project.image ? (
          <img src={`http://localhost:8000${project.image}`} alt='Фото' className="card-img" />
        ) : (
          <p className="text-center text-secondary">Фото отсутствует</p>
        )}
      </div>
      <button onClick={handleCancel} className="btn btn-primary">Вернуться</button>
    </div>
  );
};

export default ProjectInfo;
