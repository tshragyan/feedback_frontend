import {createRouter, createWebHistory} from "vue-router";
import List from "@/pages/List.vue";
import Create from "@/pages/Create.vue";
export default createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            component: List
        },
        {
            path: '/create',
            component: Create
        }
    ]
})