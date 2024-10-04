
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import NotFound from '../pages/error/notFound';
import Warehouse from '../pages/warehouse/warehouse';
import Supplier from '../pages/supplier/supplier';
import SupplierAdd from '../pages/supplier/supplierAdd';

export default function index() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/inicio" element={<Home />} />
      <Route path="/almoxarifado" element={<Warehouse/>}/>
      <Route path="/fornecedor" element={<Supplier/>}/>
      <Route path="/fornecedor/cadastro" element={<SupplierAdd/>}/>
      <Route path="*" element={<NotFound/>} /> 
    </Routes>
  </BrowserRouter>
  )
}
