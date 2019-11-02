export const otherPath = [
    {
        path:'/News',
        name:'News',
        meta: { 
            title: "新闻页" ,
            keepAlive: true,//需要缓存
        },
        //按需加载组件(懒加载，一般用于包很大)
        component: resolve=>{require(['@/views/News.vue'],resolve)},
        children:[]//子路由
    },
];