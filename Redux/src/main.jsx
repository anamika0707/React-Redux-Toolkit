import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <StrictMode>
     <Provider store={store}> {/*hum app ko provider ke andar isliye wrap ker rhe hai tak jo store hai wo pure application ke components dwara chahe wo parent component ho ya child koi bhi ise access ker sakega  accessible ho*/}
      <App />
    </Provider>
  </StrictMode>
  
)
