<template>
   <main>
    <router-view></router-view>
    <ul class="uls">
        <li v-for="(item,index) in list" @click="clicks(index)" :class="{lis:num==index}">
            <router-link :to="item.path">
                <img :src="item.src"  class="src">
                <img :src="item.pic" class="pic">
                <a class="wd">{{item.con}}</a>
            </router-link>
        </li>
    </ul>
   </main>
</template>
<script>
export default{
    // 如果数据是在data放置的话，图片的路径是相对于index.html写
    // 如果路径直接写在src的话，相对于当前的vue
    data(){
        
        return{
            num:0,
            list:[
                {
                    path:'/index',
                    con:'首页',
                    pic:'./src/assets/images/m1.png',
                    src:'./src/assets/images/m2.png'
                },
                 {
                    path:'/sort',
                    con:'分类',
                    pic:'./src/assets/images/sort1.png',
                    src:'./src/assets/images/sort2.png'
                },
                 {
                    path:'/star',
                    con:'星球',
                    pic:'./src/assets/images/star1.png',
                    src:'./src/assets/images/star2.png'
                },
                {
                    path:'/car',
                    con:'购物车',
                    pic:'./src/assets/images/car1.png',
                    src:'./src/assets/images/car2.png'
                },
                {
                    path:'/my',
                    con:'我的',
                    pic:'./src/assets/images/my1.png',
                    src:'./src/assets/images/my2.png'
                }
            ]
        }
    },
    mounted(){
        if(localStorage.m){
             this.num=localStorage.m
        }
     
    },
    methods:{
        clicks(a){
            this.num=a;
            localStorage.m=this.num
        }
    }
}
</script>

<style scoped>
     .uls .src{
        display:inline-block;
    }
     .uls .pic{
        display:none
    }
     .uls .lis .src{
        display: none;
    }
    .uls .lis .pic{
        display: inline-block;
    }
    ul{
        width: 100%;
        height: 10%;
        position: fixed;
        bottom: 0vh;
        left: 0vh;
        background-color: #ffffff;
    }
    ul li{
        margin-top: 10px;
        height: 80%;
        width: 20%;
        float:left;
        text-align: center;
    }
    img{
        width: 40%;
    }
    a{
        display: block;
        font-size: 15px;
        color: #acacac;
        text-decoration: none;
    }
    .router-link-active .wd{
        color: #ff6700;
    }
       .lis .src{
        display: none;
    }
    .lis .pic{
        display: inline-block;
    }
    .lis a{
         color: #ff6700;
    }
</style>