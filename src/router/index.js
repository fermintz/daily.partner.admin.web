import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import Base from "../components/layout/base.vue";
import CalcList from "../views/calcList.vue";
import Sales from "../views/sales.vue";
import ShopInfo from "../views/shopInfo.vue";
import Product from "../views/product.vue";
import OrderList from "../views/orderList";
import UnderwayOrder from "../views/underwayOrder";
import OrderDetail from "../views/orderDetail"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path:"/",
    name:'base',
    component: Base,
    children:[
      {
        path: "/underwayOrder",
        name: "underwayOrder",
        component: UnderwayOrder,
      },
      {
        path: "/orderList",
        name: "orderList",
        component: OrderList,
      },
      {
        path: "/",
        name: "calcList",
        component: CalcList,
      },
      {
        path: "/sales",
        name: "sales",
        component: Sales,
      },
      {
        path: "/shopInfo",
        name: "shopInfo",
        component: ShopInfo,
      },
      {
        path: "/product",
        name: "product",
        component: Product,
      },
      {
        path: "/orderDetail",
        name: "orderDetail",
        component: OrderDetail,
      },      

    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
