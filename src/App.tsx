import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout/Layout';
import Advantages from './components/Advantages/Advantages';
import Reviews from './components/Reviews/Reviews';
import Spinner from './components/Spinner/Spinner';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CampersPage = lazy(() => import('./pages/CampersPage/CampersPage'));
const CamperDetailsPage = lazy(() => import('./pages/CamperDetailsPage/CamperDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CampersPage />} />
            <Route path="/catalog/:id/" element={<CamperDetailsPage />}>
              <Route path="features" element={<Advantages />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="/favorites" element={<FavoritesPage />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <Toaster position="top-right" />
      </Suspense>
    </>
  );
}

export default App;
