import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Keranjang from '../views/Keranjang.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/keranjang',
        name: 'Keranjang',
        component: Keranjang,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router.beforeEach((to, from, next) => {  
//     // Determine if the route requires authentication
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         // Get value from somewhere to determine if the user is 
//         // logged in or not
//         let isLoggedIn = false;
        
//         // If user is not logged in, navigate to the named "login" route 
//         // with a query string parameter indicating where to navigate to after
//         // successful login        
//         if (!isLoggedIn) {
//             // Navigate to login route
//             next({
//                 name: "login",
//                 query: {redirect: to.fullPath}
//             });           
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });

export default router
