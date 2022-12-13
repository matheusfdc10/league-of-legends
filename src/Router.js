import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Champion from './pages/Champion';

function Router() {
 
  return (
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home />}/>
          <Route path='/champion/:id' element={<Champion />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default Router;
