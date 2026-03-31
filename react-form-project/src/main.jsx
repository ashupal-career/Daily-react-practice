import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewForm from './components/NewForm.jsx'

createRoot(document.getElementById('root')).render(
    // <App />
    <NewForm/>
)
