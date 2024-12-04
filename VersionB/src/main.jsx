import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import store from './store/ReduxStore.js'
import { MantineProvider } from '@mantine/core'
import ContextProvider from "./context/Context.jsx";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <ContextProvider>
  <BrowserRouter>
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
    </MantineProvider>
  </BrowserRouter>
  
  </ContextProvider>
  </Provider>
,
)
