import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Delivery from './components/Delivery'
// import OrderingGuide from './components/OrderingGuide'
import About from './components/About'
import Admin from './components/Admin'
import Contact from './components/Contact'
import OrderingGuide from './components/OrderingGuide'
import History from './components/History'

Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
    {path: '/', name: 'homeLink', component: Home },
    {path: '/menu', name: 'menuLink',component: Menu },
    {path: 'contact', name: 'contactLink', component: Contact},
    {
        path: '/admin',
        name: 'adminLink',
        component: Admin,
        beforeEnter: (to, from, next) => {
            alert('This area is for authorized users only, please login to continue');
            next()
        }
    },
    {path: '/about', name: 'aboutLink', component: About, children: [
            {path: '/history', name: 'historyLink', component: History},
            {path: '/delivery', name: 'deliveryLink', component: Delivery},
            {path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide},
        ]},
    {path: '*', redirect: '/'}
]

const router = new VueRouter({
    routes,
    mode: 'history',
})


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')