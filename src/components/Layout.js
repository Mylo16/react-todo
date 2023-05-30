import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { AuthProvider } from '../Context/AuthContext';

const Layout = () => (
  <div className="wrapper">
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  </div>
);
export default Layout;
