import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RoutineProvider } from './context/RoutineContext.jsx'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <DndProvider backend={HTML5Backend}>
      <RoutineProvider>
        <App />
      </RoutineProvider>
    </DndProvider>
  </React.StrictMode>,
)
