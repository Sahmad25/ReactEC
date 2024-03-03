
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navitems } from './components/Navitems';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';
import axios from "axios";
import { UserContextProvider } from '../context/UserContext';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

function App() {


  return (
    <UserContextProvider>
    
    <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
      <Navitems />
      <div className='min-vh-100'>
        <Outlet />
      </div>
      <Footer />
    </UserContextProvider>
  );
}

export default App
