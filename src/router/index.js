import Vue from 'vue';
import VueRouter from 'vue-router';
import { routerPath } from './router';
import { otherPath } from './other';

Vue.use(VueRouter)

let Routers = routerPath.concat(otherPath);
const router = new VueRouter({
  mode: 'history', //去掉url中的#(使用此参数需要慎重，build后项目部署上线刷新会导致找不到路径404等错误，需要nginx配合设置找不到路径时统一回到index.html中)
  routes: Routers
})

export default router;

/** 
 * to表示即将进入的页面路由，
 * from表示当前导航正要离开的路由
 * next: Function:执行效果依赖 next 方法的调用参数。
 * next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
 * next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
 * next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
 * next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
*/
router.beforeEach((to, from, next) => {
    //console.log(to);
    //console.log(from);
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    };
    const isLogin = sessionStorage.getItem("sessiontoken");
    if (isLogin){
        next();
    }else{
        if (to.fullPath == "/Login") {
            next();
        }else{
            next({path: '/Login'})
        };
    };
});