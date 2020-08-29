<template>
    <main>       
        <div class="rolls"> 
            <mt-swipe :auto="3000">
                <mt-swipe-item v-for="(item,index) in list">
                    <img :src="item.src" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <ul class="uls3">
            <li v-for="(item,index) in list1">
                <router-link :to="item.path">
                    <img :src="item.src" alt="">
                </router-link>              
            </li>
        </ul>
        <ul class="uls4">
            <li><img src="../assets/images/red.png" alt="" class="red"></li>
            <li><img src="../assets/images/discount1.png" alt="" class="disc1"></li>
            <li><img src="../assets/images/discount2.png" alt="" class="disc2"></li>    
        </ul>
        <ul class="uls5">
            <li class="left">
                <img src="../assets/images/j1.png" alt="">
            </li>
            <li class="right">
                <div><img src="../assets/images/j2.png" alt=""></div>
                <div><img src="../assets/images/j3.png" alt=""></div>
            </li>
        </ul>
        <div class="con3">
            <div class="mystery">
                <img src="../assets/images/mijing.png" alt="">
            </div>
            <div class="redmi9a">
                <img src="../assets/images/redmi9a.png" alt="">
            </div>
            <ul class="uls6">
                <li v-for="(item,index) in list2">
                    <img :src="item.src" alt="">
                    <ul>
                        <li class="lis1">{{item.cov1}}</li>
                        <li class="lis2">{{item.cov2}}</li>
                        <li class="lis3">
                            {{item.cov3}}
                            <span>{{item.cov4}}</span>
                        </li>
                        <li class="lis4">
                            <span>{{item.cov5}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="con4">更多小米手机产品></div>
            <div class="mtv">
                <img src="../assets/images/mtv.png" alt="">
            </div>
            <ul class="uls6">
                <li v-for="(item,index) in list3">
                    <img :src="item.src" alt="">
                    <ul>
                        <li class="lis1">{{item.cov1}}</li>
                        <li class="lis2">{{item.cov2}}</li>
                        <li class="lis3">
                            {{item.cov3}}
                            <span>{{item.cov4}}</span>
                        </li>
                        <li class="lis4">
                            <span>{{item.cov5}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="con5">更多小米电视产品></div>
            <div class="con6">
                <img src="../assets/images/twelveStar.png" alt="">
            </div>
            <div class="con7">了解小米</div>
            <div class="con8"></div>
        </div>
    </main>
</template>

<script>
export default{
    data(){
        return{
            list:[
                {
                    src:'./src/assets/images/i1.png'
                },
                {
                    src:'./src/assets/images/i2.png'
                },
                {
                    src:'./src/assets/images/i3.png'
                },
                {
                    src:'./src/assets/images/i4.png'
                },
                {
                    src:'./src/assets/images/i5.png'
                }
            ],
            list1:[
                {
                    src:'./src/assets/images/pic1.png',
                    path:'/purchase'
                },
                {
                    src:'./src/assets/images/pic2.png',
                    path:'/purchase'
                },
                {
                    src:'./src/assets/images/pic3.png',
                    path:'/purchase'
                },
                {
                    src:'./src/assets/images/pic4.png',
                    path:'/purchase'
                },
                {
                    src:'./src/assets/images/pic5.png',
                    path:'/purchase'
                },
                {
                    src:'./src/assets/images/pic6.png',
                    path:'/purchase'
                },
                {
                    src:'./src/assets/images/pic7.png',
                    path:'/purchase'
                },
                {
                    src:'./src/assets/images/pic8.png',
                    path:'/purchase'
                },
                {
                    src:'./src/assets/images/pic9.png',
                    path:'/purchase'
                },
                {
                    src:'./src/assets/images/pic10.png',
                    path:'/purchase'
                }
            ],
            list2:[
                {
                    src:'./src/assets/images/phone1.png',
                    cov1:'小米10 Pro',
                    cov2:'骁龙865/50倍变焦',
                    cov3:'￥4999起',
                    cov4:'',
                    cov5:'立即购买'
                },
                {
                    src:'./src/assets/images/phone2.png',
                    cov1:'小米10',
                    cov2:'骁龙865/1亿像素相机',
                    cov3:'￥3799起',
                    cov4:'￥3999',
                    cov5:'立即购买'
                },
                {
                    src:'./src/assets/images/phone3.png',
                    cov1:'Redmi K30 4G',
                    cov2:'120Hz流速屏，全速热爱',
                    cov3:'￥1399起',
                    cov4:'￥1699',
                    cov5:'立即购买'
                },
                {
                    src:'./src/assets/images/phone4.png',
                    cov1:'Redmi K30 5G',
                    cov2:'双模5G，120Hz流速屏',
                    cov3:'￥1599起',
                    cov4:'￥2299',
                    cov5:'立即购买'
                },
                {
                    src:'./src/assets/images/phone5.png',
                    cov1:'Redmi Note 8 Pro',
                    cov2:'6400万全场景四摄',
                    cov3:'￥1099起',
                    cov4:'￥1399',
                    cov5:'立即购买'
                },
                {
                    src:'./src/assets/images/phone6.png',
                    cov1:'Redmi Note 8',
                    cov2:'千元4800万四摄',
                    cov3:'￥899起',
                    cov4:'￥999',
                    cov5:'立即购买'
                }
            ],
            list3:[
                {
                    src:'./src/assets/images/tv1.png',
                    cov1:'小米电视4A 65英寸',
                    cov2:'4K HDR，人工智能语音...',
                    cov3:'￥2599',
                    cov4:'￥2999',
                    cov5:'立即购买'
                },
                {
                    src:'./src/assets/images/tv2.png',
                    cov1:'小米电视4X 43英寸',
                    cov2:'FHD全高清屏，人工智能...',
                    cov3:'￥999',
                    cov4:'￥1399',
                    cov5:'立即购买'
                },
                {
                    src:'./src/assets/images/tv3.png',
                    cov1:'小米电视4C 50英寸',
                    cov2:'4K HDR，钢琴烤漆',
                    cov3:'￥1599',
                    cov4:'￥1699',
                    cov5:'立即购买'
                },
                {
                    src:'./src/assets/images/tv4.png',
                    cov1:'小米电视4C 55英寸',
                    cov2:'4K HDR，人工智能系统',
                    cov3:'￥1699',
                    cov4:'￥1999',
                    cov5:'立即购买'
                },
                {
                    src:'./src/assets/images/tv5.png',
                    cov1:'小米电视4A 32英寸',
                    cov2:'人工智能系统，高清液晶屏',
                    cov3:'￥699',
                    cov4:'￥799',
                    cov5:'立即购买'
                },
                {
                    src:'./src/assets/images/tv6.png',
                    cov1:'小米电视4A 50英寸',
                    cov2:'4K HDR，人工智能语音',
                    cov3:'￥1599',
                    cov4:'￥1699',
                    cov5:'立即购买'
                }
            ]
        }
    },
}
</script>
<style>
   .rolls .mint-swipe-items-wrap{
       padding-bottom: 50%;
   }   
</style>

<style scoped>
    .rolls{
        width: 100%;    
    }
    .rolls img{
        width: 100%;
    }
    
    li{
        float: left;
    }
    .uls3{
        width: 100%;
    }
    .uls3 li{
        width: 20%;
    }
    .uls3 img{
        width: 100%;
    }
    .con3{
        background-color: #f5f5f5;
    }
    .uls4{
        width: 100%;
    }
    .uls4 li{
        width: 33.3333%;
    }
    .uls4 li img{
        width: 100%;  
    }
    .uls5{
        width: 100%;
    }
    .uls5 li{
        float: left;
    }
    .uls5 .left{
        width: 49%;
    }
    .uls5 .right{
        width: 49%;
        margin-left: 2%;
    }
    .uls5 .left img{
        width: 100%;
    }
    .uls5 .right div{
        width: 100%;
    }
    .uls5 .right img{
        width: 100%;
    }
    .mystery{
        width: 100%;
        margin: 5px auto;
    }
    .mystery img{
        width: 100%;
    } 
    .redmi9a{
        width: 100%;
    }
    .redmi9a img{
        width: 100%;
    }
    .uls6{
        width: 100%;
        overflow: hidden;
    }
    .uls6 li{
        width: 50%;
        text-align: center;
        padding-top: 6px;
        background-color: #ffffff;
    }
    .uls6 img{
        width: 97%;
    }
    .uls6 ul{
        width: 100%;
    }
    .uls6 ul li{
        width: 100%;
    }
    .uls6 ul .lis1{
        font-size: 18px;
    }
    .uls6 ul .lis2{
        font-size: 13px;
        color: #757575;
    }
    .uls6 ul .lis3{
        font-size: 15px;
        color: #ff7250;
    }
    .uls6 ul .lis3 span{
        font-size: 14px;
        color: #757575;
        text-decoration: line-through;
    }
    .uls6 ul .lis4 span{
        display: inline-block;
        width: 50%;
        height: 35px;
        line-height: 35px;
        font-size: 15px;
        color: #ffffff;
        background-color: #ff5850;
        border-radius: 8px;
        margin-bottom: 30px;
    }
    .con4{
        width: 100%;
        line-height: 10vh;
        text-align: center;
        font-size: 18px;
        color: #666666;
        background-color: #ffffff;
        margin-bottom: 8px;
    }
    .mtv{
        width: 100%;
    }
    .mtv img{
        width: 100%;
    }
    .con5{
        width: 100%;
        line-height: 10vh;
        text-align: center;
        font-size: 18px;
        color: #666666;
        background-color: #ffffff;
        border-top: 1px solid #666666;
    }
    .con6{
        width: 100%;
        margin-top: 10px;
    }
    .con6 img{
        width: 100%;
    }
    .con7{
        width: 100%;
        height: 10vh;
        line-height: 10vh;
        background-color: #ffffff;
        font-size: 20px;
        text-align: center;
        margin-top: 10px;
        color: #8d8d8d;
    }
    .con8{
        width: 100%;
        height: 15vh;
    }
</style>