import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import SignIn from "./SignIn.vue";
import SignUp from "./SignUp.vue";
import MyPage from "./MyPage.vue";
import AccountList from "./AccountList.vue";
import AccountAdd from "./AccountAdd.vue";
import LoginHome from "./LoginHome.vue";
import Admin from "./Admin.vue";
import AllReadProduct from "./AllReadProduct.vue";
import Addproduct from "./AddProduct.vue";
import AllReadHistory from "./AllReadHistory.vue";
import EditProduct from "./Editproduct.vue";
import ReadHistory from "./ReadHistory.vue";
import EditUserInfo from "./EditUserInfo.vue";
import Store from "./Store.vue";
import PurchaseList from "./PurchaseList.vue";
import SingleProductDetail from "./SingleProductDetail.vue";
import SinglePurchasedItemDetail from "./SinglePurchasedItemDetail.vue";
import UserInfo from "./UserInfo.vue";
import MyPageMain from "./MyPageMain.vue";
import EveryItem from "./EveryItem.vue";
import Equipment from "./Equipment.vue";
import Consumption from "./Consumption.vue";
import Pet from "./Pet.vue";
import SearchedProduct from "./SearchedProduct.vue";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/mypage",
      component: MyPage,
      children: [
        {
          path: "",
          component: MyPageMain,
        },
        {
          path: "userinfo",

          component: UserInfo,
        },
        {
          path: "edituserinfo",
          component: EditUserInfo,
        },
        {
          path: "accountlist",
          component: AccountList,
        },
        {
          path: "accountadd",
          component: AccountAdd,
        },
        {
          path: "purchaselist",
          component: PurchaseList,
        },
        // {
        //   path: "purchaselist/singlepurchaseditem/:id",
        //   component: SinglePurchasedItemDetail,
        // },
      ],
    },
    {
      path: "/mypage/purchaselist/singlepurchaseditem/:id",
      component: SinglePurchasedItemDetail,
    },
    {
      path: "/admin",
      component: Admin,
      children: [
        {
          path: "allreadproduct",
          component: AllReadProduct,
        },
        {
          path: "allreadhistory",
          component: AllReadHistory,
        },
        {
          path: "editproduct",
          component: EditProduct,
        },
        {
          path: "addproduct",
          component: Addproduct,
        },
        {
          path: "readhistory",
          component: ReadHistory,
        },
      ],
    },
    {
      path: "/loginHome",
      component: LoginHome,
      meta: {
        auth: true,
      },
    },
    {
      path: "/store",
      component: Store,
      children: [
        {
          path: "everyitem",
          component: EveryItem,
        },
        {
          path: "equipment",
          component: Equipment,
        },
        {
          path: "consumption",
          component: Consumption,
        },
        {
          path: "pet",
          component: Pet,
        },
        {
          path: "searchedproduct",
          component: SearchedProduct,
        },
      ],
    },
    {
      path: "/store/singleproductdetail/:id",
      component: SingleProductDetail,
    },
    {
      path: "/signin",
      component: SignIn,
    },
    {
      path: "/signup",
      component: SignUp,
    },
    {
      path: "/editUserInfo",
      component: EditUserInfo,
    },
  ],
});
