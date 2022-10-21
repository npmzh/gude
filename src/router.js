import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import myIndex from './components/myIndex'
import viDesign from './components/viDesign'
import packageDesign from './components/packageDesign'

const routes = [
    // { path: '/foo', component: Foo },
    // { path: '/bar', component: Bar }
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: myIndex
    },
    {
        path: '/viDesign',
        component: viDesign
    },
    {
        path: '/packageDesign',
        component: packageDesign
    }
]


const router = new VueRouter({
    routes
})

export default router