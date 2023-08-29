import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
// import Loader from './Loader/Loader';

const MyProjects = lazy(() => import('pages/ProjectsPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const LoaderPage = lazy(() => import('pages/LoaderPage'));

export function App() {
  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <Header />
      <Suspense>
        {/* <Loader /> */}

        <Routes>
          <Route path="/" element={<LoaderPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<MyProjects />} />
        </Routes>
      </Suspense>
    </>
  );
}
