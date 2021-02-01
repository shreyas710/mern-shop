import React from 'react'
import SidebarContextProvider from '../contexts/sidebarContext'
import {
  Sidebar,
  Header
} from './index'

const Layout = () => {

  return (
      <SidebarContextProvider>
           <div className="c-app c-default-layout">
                <Sidebar/>
                <div className="c-wrapper">
                    <Header/>
                    {/* <div className="c-body">
                    <TheContent/>
                    </div>
                    <TheFooter/> */}
                </div>
            </div>
      </SidebarContextProvider>
   
  )
}

export default Layout