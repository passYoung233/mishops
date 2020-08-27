<template>
    <main>
        <header>
            <ul>
                小米秒杀
                <router-link to="/index">
                    <img src="../assets/images/return.png" alt="" class="img1">
                </router-link>
                
                <img src="../assets/images/base.png" alt="" class="img2">
                <img src="../assets/images/car3.png" alt="" class="img3">
            </ul>
        </header>
        <nav>
            <ul class="uls2">
                <li v-for="(item,index) in list1">
                    <router-link :to="item.path">
                        <p class="p1">{{item.con1}}</p>
                        <p class="p2">{{item.con2}}</p>
                    </router-link> 
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    data(){
        return{
            list1:[
                {
                    con1:'10:00',
                    con2:'抢购中',
                    path:'/time1'
                },
                {
                    con1:'14:00',
                    con2:'即将开始',
                    path:'/time2'
                },
                {
                    con1:'20:00',
                    con2:'即将开始',
                    path:'/time3'
                },
                {
                    con1:'22:00',
                    con2:'即将开始',
                    path:'/time4'
                }
            ]
        }
    }
}
</script>

<style scoped>
    header{
        width: 100%;
        height: 8vh;
        line-height: 8vh;
        background-color: #f2f2f2;
        text-align: center;
        font-size: 18px;
    }
    .img1{
        width: 8%;
        position: absolute;
        left: 5px;
        top: 10px;
    }
    .img2{
        width: 6.5%;
        position: absolute;
        top: 12px;
        right: 65px;
    }
    .img3{
        width: 10%;
        position: absolute;
        top: 5px;
        right: 10px;
    }
    .uls2{
        width: 100%;
        text-align: center;
        padding: 5px 0px;
        overflow: hidden;
        border-bottom: 7px solid #f2f2f2;
    }
    .uls2 li{
        width: 25%;
        float: left;
    }
    a{
        color: black;
        text-decoration: none;
    }
    .router-link-active .p1,.router-link-active .p2{
        color: #ff6700;
    }
    .p1{
        font-size: 20px;
    }
    .p2{
        font-size: 13px;
    }
    
</style>