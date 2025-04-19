import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const anotherUser = ' variable'
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google',
  anotherUser
)
createRoot(document.getElementById('root')).render(
  // anotherElement
  reactElement
  // <App />
)
