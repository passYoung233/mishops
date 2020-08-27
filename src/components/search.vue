<template>
   <main>
        <header>
            <ul>
                <router-link to="/index">
                    <li class="lis1"><img src="../assets/images/return.png" alt=""></li>
                </router-link>
                
                <li class="lis2"><input type="text" placeholder="  搜索商品名称"></li>
                <li class="lis3"><img src="../assets/images/search.png" alt=""></li>
            </ul>
        </header>
        <div class="cons"></div>
        <div class="content">
            <p>搜索发现</p>
            <img src="../assets/images/remember.png" alt="">
            <ul>
                <li v-for="(item,index) in list">
                    <router-link to="/details">
                        {{item.con}}
                        <img :src="item.src" alt="">
                    </router-link>
                    
                </li>
            </ul>
        </div>
   </main>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {
                    con:'Redmi K30 Pro'
                },
                {
                    con:'七夕购机 一见倾心',
                    src:'./src/assets/images/act.png'
                },
                {
                    con:' K30 5G 120Hz流速屏'
                },
                {
                    con:'小米手机'
                },
                {
                    con:'小米10'
                },
                {
                    con:'空调'
                },
                {
                    con:'家电',
                    src:'./src/assets/images/sort.png'
                },
                {
                    con:'电视',
                    src:'./src/assets/images/sort.png'
                },
                {
                    con:'全部商品'
                },
                {
                    con:'耳机'
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
        background-color: #f2f2f2;
        position: fixed;
        top: 0px;
        left: 0px;
    }
    .cons{
        width: 100%;
        height: 8vh;
    }
    header ul li{
        float: left;
    }
    header ul{
        width: 100%;
    }
    header ul .lis1{
        width: 15%;
        text-align: center;
    }
    header ul .lis2{
        width: 70%;
        text-align: center;
    }
    header ul .lis3{
        width: 15%;
        text-align: center;
    }
    header ul .lis1 img{
        width: 50%;
        margin-top: 1.8vh;
    }
    header ul .lis2 input{
        width: 100%;
        height: 4vh;
        border: none;
        margin-top: 1.8vh;
        outline: none;
    }
    header ul .lis3 img{
        width: 60%;
        margin-top: 1.3vh;
    }
    .content{
        padding: 20px;
    }
    .content>p{
        width: 100%;
    }
    .content>img{
        width: 100%;
        display: block;
        border-radius: 8px;
         margin: 15px 0px;
    }
    .content ul{
        width: 100%;
    }
    .content ul li{
        width: 50%;
        float: left;
        font-size: 13px;
        margin-bottom: 15px;
    }
    .content ul img{
        width: 26px;
    }
    a{
        color: black;
        text-decoration: none;
    }
</style>