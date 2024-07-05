import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { ShareContext } from './context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <ShareContext> */}
    <App />
    {/* </ShareContext> */}
  </BrowserRouter>
)
