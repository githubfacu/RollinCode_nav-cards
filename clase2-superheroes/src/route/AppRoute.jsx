import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Marvel from '../pages/Marvel'
import DC from '../pages/DC'
import SearchPage from '../pages/SearchPage'
import Layout from '../components/Layout'
import Detalle from '../pages/Detalle'



const AppRoute = () => {
  return (
    <>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/marvel' element={<Marvel />} />
                    <Route path='/dc' element={<DC />} />
                    <Route path='/search-page' element={<SearchPage />} />
                    <Route path='/detalle/:id' element={<Detalle />} />
                </Routes>
            </Layout> 
          
        </BrowserRouter>
    </>
  )
}

export default AppRoute