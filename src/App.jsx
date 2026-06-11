import React, { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import CareerPrism from './components/sections/CareerPrism';
import Contact from './components/sections/Contact';
import ChatBot from './components/chat/ChatBot';
import AdminPanel from './components/sections/AdminPanel';

function App() {
  const checkAdminRoute = () => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    return path === '/admin' || path === '/admin/' || hash === '#admin';
  };

  const [isAdminView, setIsAdminView] = useState(checkAdminRoute());

  useEffect(() => {
    const handleRouteCheck = () => {
      setIsAdminView(checkAdminRoute());
    };
    window.addEventListener('hashchange', handleRouteCheck);
    window.addEventListener('popstate', handleRouteCheck);
    return () => {
      window.removeEventListener('hashchange', handleRouteCheck);
      window.removeEventListener('popstate', handleRouteCheck);
    };
  }, []);


  if (isAdminView) {
    return <AdminPanel />;
  }

  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <CareerPrism />
      <Contact />
      <ChatBot />
    </Layout>
  );
}

export default App;



