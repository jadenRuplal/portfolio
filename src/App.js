import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe.js'

import Header from './shared/Header'

function App() {
  return (
    <>
      <p>hello</p>
         <Header/>
        <Routes>
        <Route
						path='/'
						element={<AboutMe/>}
					/>
          
        </Routes> 
    </>
  )
}

export default App
