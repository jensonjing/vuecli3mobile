<template>
    <div>
        <div id='wrap'>登录</div>
        <input class="fileipt" type="file" accept="image/*" @change="Onchange">
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
            
        };
    },
    computed: {

    },
    created() {
        
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
        }
    },
    components: {

    },
};
</script>

<style lang="scss">
#wrap{
    width:100%;
    height:px2rem(45px);
    line-height: px2rem(45px);
    font-size: px2rem(12px);
    background-color: #f00;
}
.fileipt{
    font-size: px2rem(12px);
}
</style>
