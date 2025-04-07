import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const DATA = [
  { id: "todo-0", name: 'John Max Well', completed: true },
  { id: "todo-1", name: 'Frank Jr', completed: false },
  { id: "todo-2", name: 'Mind Map', completed: false },
]

const FilterBTN = [
  { id: "todo-0", type: 'button', phrase: "All" },
  { id: "todo-1", type: 'button', phrase: "Active" },
  { id: "todo-2", type: 'button', phrase: "Completed" },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA} filter={FilterBTN} />
    
    
  </StrictMode>,
)
