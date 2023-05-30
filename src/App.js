import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Login from './Routes/Login';
import Profile from './Routes/Profile';
import NotMatch from './Routes/NotMatch';
import SinglePage from './Routes/SinglePage';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={(
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          )}
        />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
