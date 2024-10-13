import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import PlanWedding from './components/PlanWedding';
import Support from './components/Support';

function App() {
  const appName = "Wed Charm";
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navigation name = {appName} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/plan-wedding" element={<PlanWedding />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
