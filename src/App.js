import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

// Lazy-loaded components for better performance
const Home = lazy(() => import('./components/Home'));
const Report = lazy(() => import('./components/Report'));
const AIModels = lazy(() => import('./components/AiModel'));
const SystemFeatures = lazy(() => import('./components/SystemFeatures'));
const TestCollision = lazy(() => import('./components/TestCollision'));
const TestedVideos = lazy(() => import('./components/Testedvideo'));

// Loader component while pages load
const Loader = () => (
  <div style={{ textAlign: 'center', marginTop: '20%' }}>
    <h2 style={{ color: '#00f3ff', fontFamily: "'Orbitron', sans-serif" }}>
      Loading...
    </h2>
  </div>
);

function App() {
  return (
    <Router>
      <GlobalStyles /> {/* Apply global styles */}
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/models" element={<AIModels />} />
          <Route path="/features" element={<SystemFeatures />} />
          <Route path="/test-collision" element={<TestCollision />} />
          <Route path="/test-video" element={<TestedVideos />} />
          {/* 404 Not Found Route */}
          <Route
            path="*"
            element={
              <div style={{ textAlign: 'center', marginTop: '20%' }}>
                <h1 style={{ color: '#ff0048', fontFamily: "'Orbitron', sans-serif" }}>
                  404 - Page Not Found
                </h1>
                <p>The page you are looking for does not exist.</p>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;