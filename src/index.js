import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from '../src/Pages/Login/Login'
import Restriction from './Pages/Restriction/Restriction'
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import HotelList from './Components/HotelList.js/HotelList';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    {
        path: "Login",
        element: <Login />,
      },{
        path: "/Restriction",
        element: <Restriction />,
      },
      {
        path: "/HotelList",
        element: <HotelList />,
      },
])
root.render(
  

    
    <RecoilRoot>
      <RouterProvider router={router} />
    
    </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
