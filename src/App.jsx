import React from 'react'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home'
import Upload from './Pages/Upload';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/Upload" element = {<Upload />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App