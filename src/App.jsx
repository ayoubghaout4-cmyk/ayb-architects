import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import ScrollToTop from './components/ScrollToTop'
import useSmoothScroll from './hooks/useSmoothScroll'

import Home from './pages/Home'
import ProjectIndex from './pages/ProjectIndex'
import ProjectPage from './pages/ProjectPage'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import './components/reveal.css'
import './components/parallax.css'
import './App.css'

export default function App() {
  useSmoothScroll()

  return (
    <>
      <Cursor />
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectIndex />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
