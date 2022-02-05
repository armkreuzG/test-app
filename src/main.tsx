import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Header from './Header'
import App from './App'
import Footer from './Footer'

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <Header />
      <div className='main'>
        <App />
      </div>
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
