
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import Subfamilies from './pages/Subfamilies.jsx'
import GenusSearch from './pages/GenusSearch.jsx'
import GenusSpecies from './pages/GenusSpecies.jsx'
import CactoideaeGuide from './pages/Cactoideae/CactoideaeGuide.jsx'
import CactusDetails from './pages/CactusDetails.jsx'
import About from './pages/About.jsx'
import AI from './pages/AI.jsx'
import Contact from './pages/Contact'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import CactusSpeciesDetails from './pages/CactusSpeciesDetails.jsx'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/subfamilies" element={<Subfamilies />} />
          <Route path="/genera" element={<GenusSearch />} />
          <Route path="/genera/:id" element={<GenusSpecies />} />
          <Route path="/cactoideae" element={<CactoideaeGuide />} />
          <Route path="/explore/:id" element={<CactusDetails />} />
          <Route path="/cacti/:id" element={<CactusSpeciesDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
      
    </BrowserRouter>
  )
}

export default App