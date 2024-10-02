import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import Main from './components/MainContent';
 
import Contact from './pages/Contact'; 


import ContactForm from "./pages/ContactForm"

function App() {

  return (
    <Router>
      <Header />
      <Routes>
      
        <Route path="/" element={<Main />} />
    
        <Route path="/contact" element={<Contact />} />
        
       
        <Route path="/contactForm" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;

