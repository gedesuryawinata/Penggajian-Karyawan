import React from 'react'
import { BrowserRouter as Router, Navigate,Route} from 'react-router-dom'

import Home from './Home'
export default function Inti() {
  return (
    <Router>
        <Route path="/home" Component={Home} />
        <Route path="/login" />
        <Route path="/register" />
        <Navigate  from="/" exact to="/home" />

    </Router>
  )
}

