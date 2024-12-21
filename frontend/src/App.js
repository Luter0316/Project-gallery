import React from 'react';
import { Helmet } from 'react-helmet';
import Projects from './components/Projects';

const title = 'Список проектов';

function App() {
  return (
    <div className="container-fluid bg-secondary text-white" style={{ height: '100vh', overflow: 'auto' }}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="row justify-content-center" style={{ height: '50vh' }}>
        <div className="col-md-8 align-self-center">
          <h1 className="text-center mt-5 mb-5">{title}</h1>
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;