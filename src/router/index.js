import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "Home",
    },
  },
  {
    path: "",
    component: () => import("../views/FullPage"),
    children: [
      {
        path: "/Login",
        name: "Login",
        component: () => import("../views/auth/Login"),
      },
      {
        path: "/Registration",
        name: "Registration",
        component: () => import("../views/auth/Registration"),
      },
    ],
  },
  {
    path: "",
    component: () => import("../views/Layout"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home"),
      },
      {
        path: "/motel",
        name: "Motel",
        component: () => import("../views/Motel"),
      },
      {
        path: "/house",
        name: "House",
        component: () => import("../views/House"),
      },
      {
        path: "/apartment",
        name: "Apartment",
        component: () => import("../views/Apartment"),
      },
      {
        path: `/detail/:id`,
        name: "Detail",
        component: () => import("../views/Detail"),
      },
    ],
  },
  {
    path: "",
    component: () => import("../views/LayoutUser.vue"),
    children: [
      {
        path: `/post`,
        name: "Post",
        component: () => import("../views/post/vNewPost.vue"),
      },
      {
        path: `/edit-user`,
        name: "EditUser",
        component: () => import("../views/user/vEditUser.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "Not Found",
    component: () => import("@/views/Error"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
