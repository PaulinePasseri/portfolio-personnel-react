import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import App from './App'
import Home from './Pages/Home/home'
import Projects from './Pages/Projects/projects'
import Skills from './Pages/Skills/skills'
import Formations from './Pages/Formations/formations'
import Contact from './Pages/Contact/contact'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Router>
        <div className='main-container'>
          <div className="header-container">
            <Header/>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projects/>}/>
            <Route path="/competences" element={<Skills/>}/>
            <Route path="/formations" element={<Formations/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </App>
  </React.StrictMode>,
)