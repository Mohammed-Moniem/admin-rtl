import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { AppHeader, AppSidebar } from 'src/components'
import AppContent from 'src/components/AppContent'

const PrivateRoute = ({ Component, routes, ...rest }) => {
  const location = useLocation()

  const { isLoggedIn } = useSelector((state) => state.authentication)

  return !isLoggedIn ? (
    <Navigate to={'/'} state={{ from: location.pathname }} />
  ) : (
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

export default PrivateRoute
