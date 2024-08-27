import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { range } from './components/Range/Generator/generator'

console.log('Iterator function:')
for (const value of range(0, 10, 1)) {
    console.log(value)
}

console.log([...range(1, 10, 1)])

const iterator = range(1, 10, 1)
console.log(iterator.next())



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
