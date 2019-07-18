import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import BaseRoutes from './BaseRoutes.jsx';


ReactDOM.render(<Router>
                <BaseRoutes />
                </Router>
    ,document.getElementById('root'));


