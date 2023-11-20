import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Menu from './components/Menu';
import Questoes from "./components/Questoes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <Menu />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="usuarios" element={<Questoes />} />
        </Routes>
 </BrowserRouter>
);