// export default router
import { createWebHistory, createRouter } from "vue-router";

import MainIntroView from '../views/main/MainIntroView.vue'
import DefailtPageView from '../views/common/DefaultView.vue'

const routes = [
  {
    path: "/",            // route 를 찾을 수 있는 url path
    name: "home",         // route 로 연결할 때 사용하는 이름(선택)
    component: MainIntroView,  // route 에서 불러와질 컴포넌트
  },
  {
    path: "/default",
    name: "default",
    component: DefailtPageView
  }
  // {
  //   path: "/:title",      // 동적으로 적용할 부분은 앞에 콜론(:)이 붙는다 > 동적 라우팅으로 지정한 :title 은 {{ $route.params.title }} 과 같은 형태로 사용할 수 있다.
  //   name: "homeDetail",
  //   component: HomeDetail,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
