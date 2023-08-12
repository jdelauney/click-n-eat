import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage.tsx";
import {OrderPage} from "./components/pages/order/OrderPage.tsx";
import {Toaster} from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/order/:userName",
    element: <OrderPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Toaster
      position="bottom-right"
      reverseOrder={false}
    />
  </React.StrictMode>,
)