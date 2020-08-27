<template>
    <main>
        <div class="cons"></div>
        <router-view></router-view>
        <header>
            <ul class="uls1">
                <li class="lis1"><img src="../assets/images/mi_logo.png" alt=""></li>
                <router-link to="/search">
                        <li class="lis2">
                        <img src="../assets/images/search.png" alt="">
                        <input type="text">
                        <p>搜索商品名称</p>
                    </li>
                </router-link>
                <li class="lis3">
                    <router-link to="/my">
                        <img src="../assets/images/person.png" alt="">
                    </router-link>
                    
                </li>
            </ul>
           <div class="con">
                 <ul class="uls2">
                    <li v-for="(item,index) in list">
                        <router-link :to="item.path">
                            <span class="wd">{{item.con}}</span>
                        </router-link>
                    </li>
                </ul>
               
                <div class="con1" v-show="num==true" :class="{'con2':n==true}">
                    <div>全部</div>   
                    <ul>
                        <li v-for="(item,index) in list"  @click="close()">
                            <router-link :to="item.path">
                                <span class="wd1">{{item.con}}</span>
                            </router-link> 
                        </li>
                    </ul>
                </div>
                <span>
                    <img src="../assets/images/nav1.png" alt="" @click="open()" class="nav1" v-show="num!=true">
                </span>
                <span>
                    <img src="../assets/images/nav1.png" alt="" @click="close()" class="nav2" v-show="num==true">
                </span>
           </div>
        </header>
        
    </main>
</template>

<script>
export default{
    data(){
        return{
            num:'',
            n:'',
            list:[
                {
                    path:'/recommend',
                    con:'推荐'
                },
                 {
                    path:'/phone',
                    con:'手机'
                },
                 {
                    path:'/clever',
                    con:'智能'
                },
                {
                    path:'/tv',
                    con:'电视'
                },
                {
                    path:'/note',
                    con:'笔记本'
                },
                {
                    path:'/house',
                    con:'家电'
                },
                {
                    path:'/near',
                    con:'生活周边'
                }
            ]
        }
    },
    methods:{
        open(){
            this.num=true;
            this.n=false;
        },
        close(){
            this.n=true;
            this.num=false;
        }
    }
}
</script>



<style scoped>
    main{
        width: 100%;
        height: 100vh;
        background-color: #f5f5f5;
    }
    .cons{
        width: 100%;
        height: 12%;
    }
    header{
        width: 100%;
        height: 12%;
        position: fixed;
        left: 0vw;
        top: 0vh;
        background-color: #eeeeee;
    }
    header .uls1{
        width: 100%;
        height: 50%;
        overflow: hidden;
    }
    li{
        float: left;
    }
    .uls1 .lis1{
        width: 15%;
        text-align: center;
    }
    .uls1 .lis2{
        width: 70%;
        position: relative;
    }
    .uls1 .lis3{
        width: 15%;
        text-align: center;
    }
    .lis1 img{
        width: 50%;
        margin-top: 13px;
    }
    .lis2 img{
        width: 10%;
        position: absolute;
        left: 5px;
        top: 10px;
    }
    .lis2 p{
        position: absolute;
        left: 34px;
        top: 10px;
        font-size: 17px;
        color: #c0c0c0;
    }
    .lis2 input{
        width: 100%;
        height: 32px;
        margin-top: 5px;
        outline: none;
        border: 1px solid #eeeeee;
    }
    .lis3 img{
        width: 42%;
        margin-top: 8px;
        
    }
    .con{
        width: 100%;
        overflow: auto;
    }
    .uls2{
        width: 137%;
    }
    .uls2 li{
        width: 12.5%; 
        margin-top: 10px;
        text-align: center;
    }
    .wd{
        display: inline-block;
        height: 4vh;
        font-size: 16px;
        text-align: center;
        color: #747474;
        border: none;
       
    }
    .router-link-active .wd{
        color: #ff4f00;
        border-bottom: 2px solid #ff4f00;
    }
    .router-link-active .wd1{
        color: #ff4f00;
        background-color: #ebcdc3;
        border-color: #ff4f00;
    }
    a{
        text-decoration: none;
    }
    .uls3 .router-link-active{
        text-decoration: none;
    }
    .con>span{
        width: 12%;
        background-color: #eeeeee;
        position: absolute;
        right: 0px;
        bottom: 10px;
        text-align: center;
    }
    .nav1{
        width: 50%;
    }
    .nav2{
        width: 50%;
        animation: move1 0.3s;
        transform: rotate(180deg);
    }
    @keyframes move1{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(180deg);
        }
    }
    .con1{
        width: 100%;
        height: 18vh;
        background-color: #eeeeee;
        position: absolute;
        top: 50px;
        left: 0px;
        animation: move2 0.05s;       
    }
    @keyframes move2{
        0%{
            height: 0vh;
        }
        100%{
            height: 20vh;
        }
    }
    .con2{
        width: 100%;
        height: 0vh;
        background-color: #eeeeee;
        position: absolute;
        top: 10vh;
        left: 0px;
        animation: move3 0.5s; 
    }
     @keyframes move3{
        0%{
            height: 20vh;
        }
        100%{
            height: 0vh;
        }
    }
    .con1 ul{
        width: 100%;
    }
    .con1 ul li{
        width: 25%;
        float: left;
        text-align: center;
    }
    .con1 span{
        display: inline-block;
        font-size: 15px;
        width: 80%;
        height: 4.2vh;
        line-height: 4.2vh;
        margin: 9px auto;
        text-align: center;
        background-color: #ffffff;
        border-radius: 5px;
        color: #3c3c3c;
        border: 1px solid #ffffff;
    }
    .con1>div{
        width: 100%;
        font-size: 16px;
        padding-left: 12px;
        color: #3c3c3c;
    }
    
</style>