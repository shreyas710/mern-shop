import React from 'react'
import {
  Header,
  Footer,
  Sidebar
} from './index'
import SearchContextProvider from './../contexts/SearchContext'
const Layout = (props) => {

  return (
    <div>
        <SearchContextProvider >
          <Header {...props}/>
          <Sidebar />
          <Footer />
        </SearchContextProvider>
    </div>
   
  )
}

export default Layout