import { useLocation } from 'react-router-dom';
import { Login } from '../pages/Login';
import Market from '../pages/Market/Market';
import { Signup } from '../pages/Signup';
import { Dashboard } from '../pages/Dashboard';
import Payment from '../pages/Market/Payment/Payment';
import { Home } from '../pages/Home/Home';

export const Main = () => {
  const location = useLocation();

  console.log('Current path:', location.pathname);

  if (location.pathname === '/' || location.pathname === '/home') {
    return <Home />;
  } else if (location.pathname === '/market') {
    return <Market />;
  } else if (location.pathname === '/dashboard') {
    return <Dashboard />;
  } else if (location.pathname === '/signup') {
    return <Signup />;
  } else if (location.pathname === '/login') {
    return <Login />;
  } else if (location.pathname === '/payment') {
    return <Payment />;
  }
};
