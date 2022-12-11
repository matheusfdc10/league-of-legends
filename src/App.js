import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Champion from './pages/Champion';
import Footer from './components/Footer'


function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/champion/:id' element={<Champion />}/>
        </Routes>
      </Router>
    <Footer />
    </>
  );
}

export default App;
