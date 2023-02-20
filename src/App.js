import { BrowserRouter,Route,Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import React, { Component } from 'react'
import Inti from "./komponen/inti";
import LoginForm from "./Components/LoginForm";
export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
      {/* <LoginForm/> */}
       <Sidebar/>
      </BrowserRouter>
    
    
    
    )
  }
}



