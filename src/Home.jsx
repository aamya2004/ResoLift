import React from 'react'
import Header from './components/Header'
import { NavLink, Outlet } from "react-router-dom";
import Body from './components/Body';
const Home = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

export default Home