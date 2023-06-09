import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import { AuthContextProvider } from './components/store/authContext';
import { CartContextProvider } from './components/store/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthContextProvider><CartContextProvider><BrowserRouter><App/></BrowserRouter></CartContextProvider></AuthContextProvider>);