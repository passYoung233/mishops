<template>
    <main>
       
        <header>
            <div>
                <router-link :to="{path:'login'}">
                        <img src="../assets/images/head.png" alt="" >
                </router-link>
                <span>
                        <router-link :to="{path:'login'}">登录/注册</router-link>
                </span>
            </div>
        </header>
        <div class="nav">
            <span class="ding1">我的订单</span>
            <span class="ding">全部订单<b></b></span>
        </div>
        <div class="fw">
            <div>
                <ul>
                    <li>
                        <p><img src="../assets/images/pay.png" alt=""></p>
                        <span>待付款</span>
                    </li>
                    <li>
                        <p><img src="../assets/images/car.png" alt=""></p>
                        <span>待收货</span>
                    </li>
                    <li>
                        <p><img src="../assets/images/xiu.png" alt=""></p>
                        <span>退换修</span>
                    </li>
                </ul>
            </div>
        </div>
        <section>
                <div class="vip">
                    <ul>
                            <li>
                                    <img src="../assets/images/king.png" alt="" width="35vw">
                                    <span>会员中心</span><b></b>
                            </li>
                            <li>
                                    <img src="../assets/images/money.png" alt="" width="40vw">
                                    <span>我的优惠</span><b></b>
                            </li>
                            
                    </ul>
                </div>
                <div class="vip">
                    <ul>
                            <li>
                                    <img src="../assets/images/fw.png" alt="" width="35vw">
                                    <span>服务中心</span><b></b>
                            </li>
                            <li>
                                    <img src="../assets/images/mifa.png" alt="" width="35vw">
                                    <span>小米之家</span><b></b>
                            </li>
                            
                    </ul>
                </div>
                <div class="vip">
                    <ul>
                            <li>
                                    <img src="../assets/images/fmi.png" alt="" width="35vw">
                                    <span>我的F码</span><b></b>
                            </li>
                            <li>
                                    <img src="../assets/images/pz.png" alt="" width="35vw">
                                    <span>礼物码兑换</span><b></b>
                            </li>
                            
                    </ul>
                </div>
                <div class="vip">
                    <ul>
                            <li>
                                    <img src="../assets/images/set.png" alt="" width="35vw">
                                    <span>设置</span><b></b>
                            </li>
                            
                    </ul>
                </div>
        </section>
      
    </main>
</template>
<style scoped>
    
        header{
            height:13vh;
            width: 100%;
            background:url(../assets/images/header.png) no-repeat  center 0 #f37d0f;
            background-size:100%; 
        }
       header>div{
            width: 100%;
            height:13vh;
        }
        header>div img{
           position: relative;
           left: 3vh;
           top: 2vh;
           width:10%;
        }
        header span{
            margin-left: 8%;
           line-height:13vh;
           font-size: 15px;
           color: white;
        }
         a{
            text-decoration:none;
            color:white;
        }
        .nav{
            height: 7vh;
            border-bottom:1px solid gray;
            line-height: 7vh;
        }
        .ding1{
            font-size: 15px;
            margin-left: 3vw;
        }
        .ding{
             font-size: 13px;
            float: right;
            position: relative;
            margin-right: 10vw;
        }
        .ding b{
            width: 9px;
            height: 9px;
            border-right:1px solid gray;
            border-bottom:1px solid gray;
            position:absolute;
            top:2.5vh;
            right: -3vw;
            transform: rotate(-45deg);
        }
        .fw{
            height: 13vh;
            width: 100%;
            border-bottom: 15px solid #f5f5f5;
        }
        .fw>div{
            width: 80%;
            height: 12vh;
            margin:0 auto;
        }
        .fw img{
            height:4vh;
            margin-left: 4px;
            margin-bottom:2vh;
             margin-top:1.5vh;
        }
        .fw li{
            float: left;
            margin-right: 27vw;
            line-height: 12vh;
            text-align:center;
            
        }
        .fw li:nth-of-type(1){
            margin-left:auto ;
        }
        .fw li:nth-of-type(2){
            margin-left:auto ;
            margin-right:auto;
        }
        .fw li:nth-of-type(3){
            margin-right:auto ;
            float:right;
        }
        .fw p{
            height: 10px;
        }
        .fw span{
           
         
            font-size: 1.5vh;
            color: #999999;
        }
        section b{
            width: 9px;
            height: 9px;
            border-right:1px solid gray;
            border-bottom:1px solid gray;
            position:absolute;
            top:22px;
            right: -30px;
            transform: rotate(-45deg);
        }
        .vip{
            
            height:19vh;
             border-bottom: 2vh solid #f5f5f5; 
        }
        .vip li{
            width:80%;
            height:9vh;
            background:white;
            margin:0 auto;
            line-height:9vh;
            font-size:15px;
            position:relative; 
        }
        .vip li:nth-of-type(1){
            border-bottom:3px solid #f5f5f5;
        }
        .vip img{
            position:absolute;
            left:-39px;
            top:14px;
        }
        section span{
           margin-left:20px;
        }
</style>

