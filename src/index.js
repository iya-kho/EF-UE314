import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Layout } from './components';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route index element={<Home />}></Route>
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
