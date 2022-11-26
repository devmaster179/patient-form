import { createWebHistory, createRouter } from "vue-router";
import Search from "@/views/search";
import Imaging from "./views/imaging";
import Email from "./views/email";
import Birthday from "./views/birthday";
import Name from "./views/name";
import Health from "./views/health";
import Phone from "./views/phone";
import Confirm from "./views/confirm";

const routes = [
  {
    path: "/",
    name: "Search",
    component: Search,
  },
  {
    path: "/imaging",
    name: "Imaging",
    component: Imaging,
  },
  {
    path: "/email",
    name: "Email",
    component: Email,
  },
  {
    path: "/birthday",
    name: "Birthday",
    component: Birthday,
  },
  {
    path: "/name",
    name: "Name",
    component: Name,
  },
  {
    path: "/health",
    name: "Health",
    component: Health,
  },
  {
    path: "/phone",
    name: "Phone",
    component: Phone,
  },
  {
    path: "/confirm",
    name: "Confirm",
    component: Confirm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
