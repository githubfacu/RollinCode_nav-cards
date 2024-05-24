import React from 'react'
import Header from './Header'


const Layout = ({children}) => {


  return (
    <>
        <Header />
        <div style={{padding: 8, backgroundColor: 'rgb(249, 249, 236)'}}>
          {children}
        </div>
    </>
  )
}

export default Layout