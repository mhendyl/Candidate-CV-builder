import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CV from './screens/CVOne';
import Home from './screens/Home/Home';
import CVBuilder from './screens/CVBuilder';
import AddCandidate from './screens/addCandidate';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-candidate" element={<AddCandidate />} />
      <Route path="/cv-builder" element={<CVBuilder />} />
      {/* <Route path="/cv-preview/:id" element={<CV />} /> */}
      <Route path="/edit-data/:id" element={<AddCandidate />} />
    </Routes>
  </Router>
);

export default AppRoutes;
