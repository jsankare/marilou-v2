import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Prestations from './pages/Prestations'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/prestations' element={<Prestations />} />
      {/*
      <Route path="/404" element={<Missdirection />} />
      <Route path="*" element={<Navigate to="/404" />} /> 
      */}
    </Routes>
  );
}

export default AppRouter;
