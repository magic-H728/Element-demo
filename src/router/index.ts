import {createRouter, createWebHistory} from 'vue-router'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {name: 'home', path: '/', component: () => import('../views/HelloWorld.vue')},
        // { name: 'getcrouse', path: '/getcrouse', component: () => import('../views/getcrousePage.vue') },
        // { name:'test',path:'/test',component:()=>import('../views/test.vue')}
    ]
})
export default routes