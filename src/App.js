import './App.css';

import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import BookTable from './components/BookingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/book-table" element={<BookTable />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
