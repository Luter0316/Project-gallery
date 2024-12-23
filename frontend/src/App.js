import React from 'react';
import { Helmet } from 'react-helmet';
import Projects from './components/Projects';
import ProjectInfo from './components/ProjectInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const title = 'Список проектов';

function App() {
  return (
    <div className="container-fluid bg-secondary text-white" style={{ height: '100vh', overflow: 'auto' }}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="row justify-content-center" style={{ height: '50vh' }}>
        <div className="col-md-8 align-self-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectInfo />} />
            </Routes>
        </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;