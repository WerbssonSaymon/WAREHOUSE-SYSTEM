
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import NotFound from '../pages/error/notFound';
import Warehouse from '../pages/warehouse/warehouse';
import WarehouseRegistration from '../pages/warehouseRegistration/warehouseRegistration';

export default function index() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/inicio" element={<Home />} />
      <Route path="/almoxarifado" element={<Warehouse/>}/>
      <Route path="/almoxarifado/cadastro" element={<WarehouseRegistration/>}/>
      <Route path="*" element={<NotFound/>} /> 
    </Routes>
  </BrowserRouter>
  )
}
