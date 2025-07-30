import { useState } from 'react'
import Header from './components/Navbar/Header.jsx'
import Card from './components/Card/Card.jsx'
import Waves from './components/Waves/Waves.jsx'

function App() {
  return (
    <>
      <div className="relative min-h-screen">
        <Header />
        {/* <div className="">
          <Card title="Title here" className="bg-yellow-200">
            <div>
              Description goes here
            </div>
          </Card >
        </div> */}
        <Waves />
      </div>
    </>
  )
}

export default App
