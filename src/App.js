import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoadingProgressBar from './components/LoadingProgressBar';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import projects from './data/projects';
import Footer from './components/Footer';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? (
        <LoadingProgressBar />
      ) : (
        <MainApp />
      )}
    </ThemeProvider>
  );
};

const MainApp = () => {
  const { theme } = useTheme();
  const [showTyped, setShowTyped] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyped(false);
    }, 5000); // 5초 후에 타이핑 애니메이션을 멈추고 텍스트를 고정

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home projects={projects} />} />
          <Route path="/project-details/:id" element={<ProjectDetails projects={projects} />} />
        </Routes>
      </Router>
      <ThemeSwitcher />
      <Footer />
    </div>
  );
};

export default App;
