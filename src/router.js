import Home from "./pages/Home.vue";
import Counter from "./pages/Counter.vue";
import Error from "./pages/Error.vue";
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/counter",
      component: Counter,
    },
    {
      path: "/:pathMatch(.*)*",
      component: Error,
    },
  ], // short for `routes: routes`
});
