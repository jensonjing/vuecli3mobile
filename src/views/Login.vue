<template>
    <div>
        <div id='wrap'>登录</div>
        <input type="file" accept="image/*" @change="Onchange">
        <van-cell-group>
            <van-cell title="单元格">
                <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                <van-icon
                 slot="icon"
                 :name="imgg" 
                />
                <van-icon
                    slot="right-icon"
                    name="search"
                    style="line-height: inherit;"
                />
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>

// 引入公共方法
import { utility } from '../assets/lib/common.js'

export default {
    props: {

    },
    data() {
        return {
            imgg:require('../assets/logo.png')
        };
    },
    computed: {

    },
    created() {
        console.log(utility);
        this.init();
        this.$https.getData({
            aa:45
        }).then(res=>{

        })
    },
    mounted() {
        
    },
    activated() {//该钩子在进入当前路由时执行
        
    },
    deactivated (){//该钩子在离开当前路由时执行

    },
    watch: {

    },
    methods: {
        Onchange(e){
            let that = this;
            console.log(e.target.files[0]);
            let fileObj = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(fileObj);
            reader.onload = function(){
                let readerStr = reader.result;
                that.compress(readerStr,function(res){
                    console.log(res);
                })
            }
        },
        init(){
            let params = {
                AAB301:420100
            };
            this.$https.getInfo(params).then(res=>{
                console.log(res);
            });
        }
    },
    components: {

    },
};
</script>

<style lang="scss">
#wrap{
    width:px2rem(45px);
    height:px2rem(45px);
    background-color: #f40;
}
</style>
