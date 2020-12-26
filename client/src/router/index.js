import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Spinner } from '@components/Spinner';
import { Navbar } from '@components/Navbar';

const Home = lazy(() => import('@pages/Home'));
const Profile = lazy(() => import('@pages/Profile'));
const SignUp = lazy(() => import('@pages/SignUp'));
const SignIn = lazy(() => import('@pages/SignIn'));
const Order = lazy(() => import('@pages/Order'));


export function RouterView() {
  return (
    <Router>
      <Suspense fallback={Spinner}>
        <header><Navbar /></header>
        <section>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/order' component={Order} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
          </Switch>
        </section>
        <footer>
          Footer
        </footer>
      </Suspense>
    </Router>
  );
}