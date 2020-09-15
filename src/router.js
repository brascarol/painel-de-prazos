import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store'
import Login from './components/Login.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    meta: {
      publica: true,
    },
  },
  {
    path: "/template",
    name: "template",
    component: () => import("./components/Template.vue"),
    children: [
      {
        path: "/",
        name: "principal",
        component: () => import("./components/Dashboard.vue")
      },
      {
        path: "prazos",
        name: "prazos",
        component: () => import("./components/Prazos.vue")

      },
      {
        path: "config",
        name: "config",
        component: () => import("./components/Configuracoes.vue")

      }
    ],
  },
  {
    path: "/publico",
    name: "publico",
    component: () => import("./components/Publico.vue"),
    meta: {
      publica: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((routeTo, routeFrom, next) => {
  if (routeTo.name === 'login') {
    console.log(store.getters.isLogado)

    if(store.getters.isLogado){      
      next("/template");
      return;
    }
}


if (!routeTo.meta.publica && !store.state.token) {
  next("/");
  return;
}
  next();
  });
export default router;
