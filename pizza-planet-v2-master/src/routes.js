import Home from './components/Home.vue'
//import Menu from './components/Menu.vue'
const Menu = () => import('./components/Menu.vue')

//import About from './components/About.vue'
const About = () => import('./components/About.vue')

import Contact from './components/Contact.vue'
import Delivery from './components/Delivery.vue'
import History from './components/History.vue'
import OrderingGuide from './components/OrderingGuide.vue'

//import Admin from './components/Admin.vue'
const Admin = () => import('./components/Admin.vue')

export const routes = [
  {
    path: '/',
    name: "homeLink",
    components:
    {
      default: Home,
      "ordering-guide": OrderingGuide,
      "delivery": Delivery,
      "history": History
    }
  },
  { path: '/menu', name: 'menuLink', component: Menu },
  { path: '/contact', name: 'contactLink', component: Contact },
  {
    path: '/admin',
    name: 'adminLink',
    component: Admin,
    beforeEnter: (to, from, next) => {
      alert('This area is for authorised users only, please login to continue');
      next();
    }
  },
  {
    path: '/about', name: 'aboutLink', component: About, children: [
      { path: 'history', name: 'historyLink', component: History },
      { path: 'delivery', name: 'deliveryLink', component: Delivery },
      { path: 'ordering-guide', name: 'orderingGuideLink', component: OrderingGuide }
    ]
  },
  // catch all needed when using history mode, redirect to home page
  { path: '*', redirect: '/' }
];