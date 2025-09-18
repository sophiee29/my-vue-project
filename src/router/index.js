import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const router=createRouter({//objeto con 2 propiedades
    history:createWebHashHistory(),
    //creo array de rutas(por pagina)
    routes: [
        {
            path: "/",
            name:"home",
            component: Home
        }
    ]
})

export default router;