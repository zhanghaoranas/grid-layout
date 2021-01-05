import { createRouter, createWebHashHistory } from "vue-router"
import Hello from '../components/Hello.vue';
import BaseExample from '../components/BaseExample.vue';
const Home = { template: '<div>Home</div>' }


const routes = [
    { path: '/', component: Hello },
    { path: '/basic-example', component: BaseExample },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})