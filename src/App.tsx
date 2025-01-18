import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Spinner from './components/Spinner/Spinner';

import css from './App.module.css';

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CampersPage = lazy(() => import('./pages/CampersPage/CampersPage'));
const CamperDetailsPage = lazy(() => import('./pages/CamperDetailsPage/CamperDetailsPage'));
const Features = lazy(() => import('./components/Features/Features'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const Container = lazy(() => import('./components/Container/Container'));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <header className={css.header}>
          <Container>
            <Navigation />
          </Container>
        </header>
        <main className={css.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CampersPage />} />
            <Route path="/catalog/:id/" element={<CamperDetailsPage />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </Suspense>
    </>
  );
}

export default App;
