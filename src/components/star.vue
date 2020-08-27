<template>
    <main>
        <router-view></router-view>
        <header>
            <ul>
                <router-link to="/advice">
                    <li class="lis1">推荐</li>
                </router-link>
                 <router-link to="/update">
                    <li class="lis2">上新了小米</li>
                </router-link>
                 <router-link to="/mind">
                    <li class="lis3">小米智能生活</li>
                </router-link>
                <li class="lis4"><img src="../assets/images/bell.png" alt=""></li>
                
                <li class="lis5">
                    <router-link to="/login">
                        <img src="../assets/images/login.png" alt="">
                    </router-link>
                </li>
            </ul>
        </header>
        <img src="../assets/images/sent.png" alt="" class="sent">
    </main>
</template>


<style scoped>
    .router-link-active .lis1,.router-link-active .lis2,.router-link-active .lis3{
        color: #ff6700;
    }
    a{
        color: black;
    }
    .sent{
        width: 20%;
        position: fixed;
        bottom: 12%;
        left: 50%;
        transform: translate(-50%);
    }
    header{
        width: 100%;
        height: 7vh;
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: #ffffff;
    }
    header li{
        float: left;
    }
    header .lis1{
        width: 20%;
        text-align: center;
        font-weight: bold;
        line-height: 7vh;
        font-size:16px;
    }
    header .lis2{
        width: 25%;
        font-weight: bold;
        line-height: 7vh;
        font-size:16px;
    }
    header .lis3{
        width: 26%;
        font-weight: bold;
        line-height: 7vh;
        font-size:16px;
    }
    header .lis4{
        width: 14.5%;
        text-align: center;
    }
    header .lis5{
        width: 14.5%;
        text-align: center;
    }
    header .lis4 img{
        width: 85%;
        display: block;
    }
    header .lis5 img{
        width: 53%;
        margin-top: 1.3vh;
    }
    
</style>