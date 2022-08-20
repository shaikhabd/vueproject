import { createRouter , createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import SignUp from '../views/SignUp.vue'
import GetStarted from '../views/GetStarted.vue'
const routes =[
    {
        path: '/',
        name:'HomePage',
        component: HomePage
    },
    {
        path: '/signup',
        name:'SignUp',
        component: SignUp
    },
    {
        path: '/getstarted',
        name:'GetStarted',
        component: GetStarted
    }
]

const router =  createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router