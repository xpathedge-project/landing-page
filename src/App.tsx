import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Root from './pages/Root';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
