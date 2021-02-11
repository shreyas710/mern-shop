import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './container/Header'
import CustsLoginForm from './pages/CustsLoginForm'
import CustsSignUpForm from './pages/CustsSignUpForm';
import ShopLoginForm from './pages/ShopLoginForm'
import ShopSignUpForm from './pages/ShopSignUpForm'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Layout = React.lazy(() => import('./container/Layout'));


function App() {
  return (
    <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/custs/login" name="Customer Login Page" component={CustsLoginForm} />
              <Route exact path="/shop/login" name="Shopkeeper Login Page" component={ShopLoginForm} />
              <Route exact path="/custs/signup" name="Customer Register Page" component={CustsSignUpForm} />
              <Route exact path="/shop/signup" name="Customer Register Page" component={ShopSignUpForm} />
              {/* <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
              <Route path="/" name="Home" render={props => <Layout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
  )
}

export default App;
