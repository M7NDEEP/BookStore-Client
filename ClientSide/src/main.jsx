import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from "./routers/router";
import AuthProvider from './contexts/AuthProvider';

// Use createRoot to enable concurrent mode and render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode helps catch common mistakes and improvements during development
  <React.StrictMode>
    {/* Wrap the entire application with the AuthProvider to manage user authentication */}
    <AuthProvider>
      {/* Provide the router configuration to the entire app using RouterProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
