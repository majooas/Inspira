import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Boards from './pages/Boards';
import Profile from './pages/Profile';
import DesignerProfile from './pages/DesignerProfile';
import UploadProject from './pages/UploadProject';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-bttr-black font-display text-white selection:bg-primary/40 overflow-x-hidden min-h-screen flex">
        <Sidebar />
        <main className="flex-1 ml-16 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/boards" element={<Boards />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/designer/:id" element={<DesignerProfile />} />
            <Route path="/upload" element={<UploadProject />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
