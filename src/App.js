import './App.css';
import MainSection from './components/Home/MainSection';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/about'} element={<About />} />
        <Route path={'/'} element={<MainSection />} />
      </Routes>
    </>
  );
}

export default App;
