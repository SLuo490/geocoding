import './App.css';
import Home from './pages/home';
import Manual from './pages/manual';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/manual' element={<Manual />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
