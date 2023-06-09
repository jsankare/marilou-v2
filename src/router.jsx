import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Prestations from './pages/Prestations'
import Values from './pages/Values'
import Contact from './pages/Contact'
import TermsOfService from './pages/TermsOfService';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/values" element={<Values />} />
      <Route path='/prestations' element={<Prestations />} />
      <Route  path='/contact' element={<Contact />} />
      <Route  path='/legal' element={<TermsOfService />} />
      {/*
      <Route path="/404" element={<Missdirection />} />
      <Route path="*" element={<Navigate to="/404" />} /> 
      */}
    </Routes>
  );
}

export default AppRouter;
