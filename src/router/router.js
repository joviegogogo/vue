import Vue from "vue";
import Router from "vue-router";
import Header from "../components/Header/Headers.vue";
import Footer from "../components/Footer/Footers";

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/header',
      component: Header,
    },
    {
      path: '/footer',
      component: Footer,
    },
  ]
});