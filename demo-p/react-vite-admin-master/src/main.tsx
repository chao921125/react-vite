import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MyRouter from './plugins/router'
import 'antd/dist/antd.css';
import './plugins/i18n';



ReactDOM.render(
  <React.StrictMode>
      <MyRouter />
  </React.StrictMode>,
  document.getElementById('root')
)
