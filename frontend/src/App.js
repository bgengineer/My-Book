import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Show from './pages/Show'
import Create from './pages/Create'
import Update from './pages/Update'
import Delete from './pages/Delete'
import { store } from './Redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/book/details/:id' element={<Show />}/>
        <Route path='/book/create' element={<Create />}/>
        <Route path='/book/update/:id' element={<Update />}/>
        <Route path='/book/delete/:id' element={<Delete />}/>
      </Routes>
      </Provider>
    </div>
  )
}

export default App