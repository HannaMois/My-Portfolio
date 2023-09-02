import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const MyProjects = lazy(() => import('pages/ProjectsPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const ActivatePage = lazy(() => import('pages/LoaderPage'));

export function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<ActivatePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<MyProjects />} />
        </Routes>
      </Suspense>
    </>
  );
}
