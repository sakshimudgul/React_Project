import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,

}from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Products from './Pages/Products';
import Layout from './Layouts/Layout';

function App() {

  const router = createBrowserRouter( createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/products" element={<Products/>}/>
      
    </Route>
  ))
  return <RouterProvider router ={router}/>;
}

export default App