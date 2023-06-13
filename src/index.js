// Library Basic
import React from 'react'
import ReactDom from 'react-dom'
// Components
import App from './App'
// Library Export 
import {BrowserRouter} from 'react-router-dom'
// Create Root Dom 
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
)