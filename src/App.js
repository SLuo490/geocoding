import './App.css';
import Home from './pages/Home';
import Doc from './pages/Doc';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Doc' element={<Doc />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
