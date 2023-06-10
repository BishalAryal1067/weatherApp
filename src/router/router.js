import { createRouter, createWebHistory } from "vue-router";

const vueRouter = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: 'HomeComponent'
        }, 
        // {
        //   path :'/error',
        //   component: 'ErrorComponent.vue'
        // }
    ]
});

export default vueRouter;