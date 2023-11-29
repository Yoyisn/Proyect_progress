<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import './index.css';
=======
import { ThemeProvider } from "@material-tailwind/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "./index.css";
>>>>>>> 3ecd8d8dd5e087ddbf363dbc20d63b6e233c30e6

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
