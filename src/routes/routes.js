// import React from 'react'

// const routes = [{ path: '/dashboard', name: 'الرئيسية', element: Dashboard }]

// export default routes

import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const Dashboard = lazy(() => import('../views/dashboard/Dashboard'))
const Login = lazy(() => import('../views/pages/login/Login'))
const NotFound = lazy(() => import('../views/pages/page404/Page404'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

//Construct private routes array
const privateRoutes = [
  {
    path: '/dashboard',
    name: 'الرئيسية',
    element: Dashboard,
  },

  {
    path: '/does-not-exist',
    name: 'غير موجود',
    element: NotFound,
  },
  {
    path: '*',
    name: 'غير موجود',
    element: NotFound,
  },
]

//Construct public routes array
const publicRoutes = [
  {
    path: '/login',
    element: Login,
    hideLayout: false,
  },
  {
    path: '/',
    element: Login,
    hideLayout: false,
  },
  {
    path: '*',
    name: 'غير موجود',
    element: NotFound,
  },
]

const Router = () => {
  // const dispatch = useDispatch();
  // const tokens = getObject('tokens');
  // if (tokens) {
  //   dispatch(loadUser());
  // }

  const { isLoggedIn } = useSelector((state) => state.authentication)

  return (
    <>
      {!isLoggedIn ? (
        <Suspense fallback={loading}>
          <Routes>
            {publicRoutes.map((route, idx) => (
              <Route
                key={`Public-${idx.toString()}`}
                path={route.path}
                element={
                  <PublicRoute
                    hideLayout={route.hideLayout}
                    Component={route.element}
                    key={`Public-${idx.toString()}`}
                  />
                }
              />
            ))}
          </Routes>
        </Suspense>
      ) : (
        <PrivateRoute routes={privateRoutes} />
      )}
    </>
  )
}

export default Router
