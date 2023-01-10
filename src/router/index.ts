import {createRouter, createWebHistory} from 'vue-router'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {name: 'home', path: '/', component: () => import('../views/HelloWorld.vue')},
        { name:'test',path:'/test',component:()=>import('../views/test.vue')},
        { name:'test2',path:'/test2',component:()=>import('../views/test2.vue')},
    ]
})
export default routes