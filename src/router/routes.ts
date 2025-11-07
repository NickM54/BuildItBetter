import Home from "@/pages/home.vue";
import Index from "@/pages/index.vue";
import { type RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Index,
    children: [{ path: "", component: Home }],
  },
];
