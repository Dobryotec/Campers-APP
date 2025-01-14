import { Routes, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import { Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import CampersPage from './pages/CampersPage/CampersPage';
import CamperDetailsPage from './pages/CamperDetailsPage/CamperDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Features from './components/Features/Features';
import Reviews from './components/Reviews/Reviews';

import css from './App.module.css';

function App() {
  return (
    <>
      <header className={css.header}>
        <Container>
          <Navigation />
        </Container>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CampersPage />} />
            <Route path="/catalog/:id/" element={<CamperDetailsPage />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
