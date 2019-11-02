export const routerPath = [
    {
        path:'/',
        redirect: '/Home'
    },
    {
        path:'/Home',
        name:'Home',
        meta: { 
            title: "首页" ,
            keepAlive: true,//需要缓存
        },
        component:resolve=>{//按需加载组件(懒加载，一般用于包很大)
            require(['@/views/Home.vue'],resolve)
        },
        children:[]//子路由
    },
    {
        path: '/Login',
        meta:{
            title:'登录',
            keepAlive: false,//不需要缓存
        },
        name: 'Login',
        component: resolve=>{
            require(['@/views/Login.vue'],resolve)
        },
        children:[]
    },
    {
        path: '/About/:id',
        meta: { 
            title: '关于我们',
            keepAlive: true,//需要缓存
        },
        name: 'About',
        component: require('@/views/About.vue'),//非按需加载
        children:[]
    }
];