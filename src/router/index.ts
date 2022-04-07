import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/index.html",
    redirect: "/",
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/private/HomeView.vue"),
    redirect: "/reception",
    children: [
      {
        path: "/reception",
        name: "reception",
        component: () => import("../views/private/Reception.vue"),
      },
      {
        path: "/meeting",
        name: "meeting",
        component: () => import("../views/private/Meeting.vue"),
      },
      {
        path: "/folder",
        name: "folder",
        component: () => import("../views/private/Folder.vue"),
      },
      {
        path: "/following",
        name: "following",
        component: () => import("../views/private/Following.vue"),
      },
      {
        path: "/advices",
        name: "advices",
        component: () => import("../views/private/Advices.vue"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/singin",
    name: "signin",
    component: () => import("../views/public/SingIn.vue"),
  },
  {
    path: "/singup",
    name: "singup",
    component: () => import("../views/public/SingUp.vue"),
  },
  {
    path: "/resetpassword",
    name: "resetpassword",
    component: () => import("../views/public/ResetPassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
