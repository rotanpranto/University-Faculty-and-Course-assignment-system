import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AdminAuthContextProvider } from './context/AdminAuthContext';
import { FacultyAuthContextProvider } from './context/FacultyAuthContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
          
       
       <FacultyAuthContextProvider> 
       <AdminAuthContextProvider>
          <App/>
          </AdminAuthContextProvider>
          </FacultyAuthContextProvider>
          
   
    </React.StrictMode>
);
