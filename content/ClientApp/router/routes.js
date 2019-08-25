import CounterExample from 'components/counter-example';
import FetchData from 'components/fetch-data';
import HomePage from 'components/home-page';
import About from 'components/about';

import Login from 'components/Login/Login';
import Logout from 'components/Logout/Logout';

import store from '../store';

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/login');
};

export const routes = [
  {
    name: 'Login',
    path: '/login',
    component: Login,
    display: 'Login',
    icon: 'list'
  },
  {
    name: 'Logout',
    path: '/logout',
    component: Logout,
    display: 'Logout',
    icon: 'list'
  },
  {
    name: 'home',
    path: '/',
    component: HomePage,
    display: 'Home',
    icon: 'home'
  },
  {
    name: 'about',
    path: '/about',
    component: About,
    display: 'About Template',
    icon: 'info'
  },
  {
    name: 'counter',
    path: '/counter',
    component: CounterExample,
    display: 'Counter',
    icon: 'graduation-cap'
  },
  {
    name: 'fetch-data',
    path: '/fetch-data',
    component: FetchData,
    display: 'Data',
    icon: 'list'
  }
];
