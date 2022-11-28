import { createWebHistory, createRouter } from "vue-router";
import Search from "@/views/search";
import Form from "./views/form";
import Signup from "./views/signup";
import Imaging from './views/imaging';

const routes = [
  {
    path: "/",
    name: "Search",
    component: Search,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/imaging",
    name: "Imaging",
    component: Imaging,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
