import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from "./Routes/Routes.jsx";
import { ToastContainer } from 'react-toastify';
import FriendProvider from './Context/Context.jsx';

// App entry point: wraps routing, toast notifications, and shared interaction state.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </FriendProvider>
  </StrictMode>,
)
