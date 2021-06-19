import React from 'react'
import ChatContainer from './components/ChatContainer.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
       <Nav/>
       <div className="container">
         <ChatContainer/>
       </div>
       <Footer/>
    </>
  )
}

export default App
