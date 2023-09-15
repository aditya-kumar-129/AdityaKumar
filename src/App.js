import './App.css';
import MainSection from './components/Home/MainSection';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Resume from './components/Resume/Resume';
import { Route, Routes } from 'react-router-dom';
import PAGE_ROUTES from './PAGEROUTES';

function App() {
  return (
    <>
      <Routes>
        <Route path={PAGE_ROUTES.HOME} element={<MainSection />} />
        <Route path={PAGE_ROUTES.ABOUT} element={<About />} />
        <Route path={PAGE_ROUTES.EXPERIENCE} element={<Experience />} />
        <Route path={PAGE_ROUTES.PROJECT} element={<Project />} />
        <Route path={PAGE_ROUTES.RESUME} element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
