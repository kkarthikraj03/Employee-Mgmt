import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Form from './components/Form'
import Details from './components/Details'
import Personal from './components/Personal'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<Form />} />
      <Route path='view' element= { <Details /> } />
      <Route path='personal' element={ <Personal /> } />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
