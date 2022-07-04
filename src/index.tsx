import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import LayOut from './components/LayOut';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<LayOut />} >
        <Route path='*' element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
