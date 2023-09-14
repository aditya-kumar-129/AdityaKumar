import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

function App() {
  return (
    <Box>
      <Navbar />
      <MainSection />
      <Footer />
    </Box>
  );
}

export default App;
