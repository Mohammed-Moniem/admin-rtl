import React from 'react'
import AppContent from 'src/components/AppContent'
import { AppSidebar, AppHeader } from '../components/index'

const DefaultLayout = ({ routes }) => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent routes={routes} />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  )
}

export default DefaultLayout
