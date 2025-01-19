import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import Advantages from './components/Advantages/Advantages';
import Reviews from './components/Reviews/Reviews';
import Spinner from './components/Spinner/Spinner';

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CampersPage = lazy(() => import('./pages/CampersPage/CampersPage'));
const CamperDetailsPage = lazy(() => import('./pages/CamperDetailsPage/CamperDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const Container = lazy(() => import('./components/Container/Container'));

import css from './App.module.css';

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
              <Route path="features" element={<Advantages />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Toaster position="top-right" />
      </Suspense>
    </>
  );
}

export default App;
