<template>
    <main>
        <div class="one">
                 <b></b>
                 <div>购物车</div>
                <img src="../assets/images/搜索.png" alt="" width="90vw" class="right">
       </div>
        <div class="tw"></div>
        <div class="two">
               <span>登录后享受更多优惠</span>
               <span class="dept1">去登录<b></b></span> 
               
        </div>
        <div class="three">
                <div>
                      <img src="../assets/images/购物车.jpg">
                      <span>购物车还是空的</span>
                      <span class="dept2">去逛逛</span>
                </div>
        </div>
        <div class="four">
            <img src="../assets/images/like.jpg">
        </div>
       <div>
                <ul>
                    <li v-for="(item,index) in list">
                        <img :src="item.src">
                        <p class="des">{{item.des}}</p>
                        <p>
                            <span>{{item.s}}</span>
                            <u v-if="item.u">{{item.u}}</u>
                        </p>

                    </li>
                </ul>

        </div>
     </main>
</template>

<script src="js/vue.js"></script>

<script>
        export default{
                        data(){
                            return {
                                list:[
                                {
                                    src:"./src/assets/images/驱蚊器.jpg",
                                    des:"米家驱蚊器 智能版",
                                    s:"￥59",
                                    u:""
                                },
                                 {
                                    src:"./src/assets/images/风扇.jpg",
                                    des:"米家直流变频落地扇1X",
                                    s:"￥279",
                                    u:"￥299"
                                },
                                 {
                                    src:"./src/assets/images/线.jpg",
                                    des:"手机USB micro 数据线  ",
                                    s:"￥9.9",
                                    u:""
                                },
                                 {
                                    src:"./src/assets/images/电饭煲2.jpg",
                                    des:"米家IH电饭煲 4L",
                                    s:"￥249",
                                    u:"￥299"
                                },
                                 {
                                    src:"./src/assets/images/tv.jpg",
                                    des:"米家电视音响",
                                    s:"￥399",
                                    u:""
                                },
                                 {
                                    src:"./src/assets/images/吸顶灯.jpg",
                                    des:"飞利浦吸顶灯卧室28W",
                                    s:"￥299",
                                    u:""
                                },
                                {
                                    src:"./src/assets/images/手环.jpg",
                                    des:"小米手环4",
                                    s:"￥149",
                                    u:"￥169"
                                },
                                 {
                                    src:"./src/assets/images/U盘.jpg",
                                    des:"小米USB 3.0 U盘",
                                    s:"￥79",
                                    u:""
                                },
                                 {
                                    src:"./src/assets/images/洗衣机.jpg",
                                    des:"Redmi波轮洗衣机1S 8kg",
                                    s:"￥849",
                                    u:"￥899"
                                },
                                 {
                                    src:"./src/assets/images/笔.jpg",
                                    des:"小米巨能写中性笔10支装",
                                    s:"￥9.99",
                                    u:""
                                },
                                {
                                    src:"./src/assets/images/驱蚊器.jpg",
                                    des:"米家驱蚊器 智能版",
                                    s:"￥59",
                                    u:""
                                },
                                 {
                                    src:"./src/assets/images/风扇.jpg",
                                    des:"米家直流变频落地扇1X",
                                    s:"￥279",
                                    u:"￥299"
                                },
                                 {
                                    src:"./src/assets/images/线.jpg",
                                    des:"手机USB micro 数据线  ",
                                    s:"￥9.9",
                                    u:""
                                },
                                 {
                                    src:"./src/assets/images/电饭煲2.jpg",
                                    des:"米家IH电饭煲 4L",
                                    s:"￥249",
                                    u:"￥299"
                                },
                                 {
                                    src:"./src/assets/images/tv.jpg",
                                    des:"米家电视音响",
                                    s:"￥399",
                                    u:""
                                },
                                 {
                                    src:"./src/assets/images/吸顶灯.jpg",
                                    des:"飞利浦吸顶灯卧室28W",
                                    s:"￥299",
                                    u:""
                                },
                                {
                                    src:"./src/assets/images/手环.jpg",
                                    des:"小米手环4",
                                    s:"￥149",
                                    u:"￥169"
                                },
                                 {
                                    src:"./src/assets/images/U盘.jpg",
                                    des:"小米USB 3.0 U盘",
                                    s:"￥79",
                                    u:""
                                },
                                 {
                                    src:"./src/assets/images/洗衣机.jpg",
                                    des:"Redmi波轮洗衣机1S 8kg",
                                    s:"￥849",
                                    u:"￥899"
                                },
                                {
                                    src:"./src/assets/images/笔.jpg",
                                    des:"小米巨能写中性笔10支装",
                                    s:"￥9.99",
                                    u:""
                                 },
                                {
                                    src:"          ",
                                    des:"   ",
                                    s:"   ",
                                    u:"    "
                                 },
                                 {
                                    src:"         ",
                                    des:"    ",
                                    s:"     ",
                                    u:"   "
                                 },
                                 {
                                    src:"          ",
                                    des:"   ",
                                    s:"   ",
                                    u:"    "
                                 },
                                 {
                                    src:"         ",
                                    des:"    ",
                                    s:"     ",
                                    u:"   "
                                 }
                            ]
                            }
                            
                        }
        }

</script>

<style scoped>
       
        .one img{
             position:absolute;
             right:5vw;
             top:5px;
             width:5vh;
        }
        .one{
            height: 7vh;
            width:100%;
            background-color: #f2f2f2;
            position:fixed;
        }
        .one div{
            line-height:7vh;
            text-align:center;
            width:20%;
            margin:0px auto;
            font-size:15px;
        }
        .left{
            float: left;
        }
        .right{
            float: right;
        }
        .one b{
            width: 11px;
            height: 11px;
            border-right:1px solid gray;
            border-bottom:1px solid gray;
            position:absolute;
            top:15px;
            left: 24px;
            transform: rotate(135deg);
        }
        .tw{
            height:7vh;
        }
       .two{
           height:7vh;
           line-height:7vh;
         
       }
       .two span{
           font-size:16px;
           float:left;
           margin-left:5%;
       }
       .two .dept1{
           font-size:13px;
           float:right;
           margin-right:10%;
           color:#757575;
       }
       .dept1>b{
            width: 11px;
            height: 11px;
            border-right:1px solid gray;
            border-bottom:1px solid gray;
            position:absolute;
            top:9.5vh;
            right: 4vw;
            transform: rotate(-45deg);
       }
       .three{
           height:10vh;
           line-height:10vh;
          
           background-color:#ebebeb;
       }
       .three div{
           width:70%;
           height:9vh;
           margin:0px auto;
          text-align:center;
           line-height:9vh;
       }
        .three img{
               margin-bottom:-18px;
                width:7vh;
                margin-right:5px;
        }
        .three span{
            font-size:13px;
            color:#ababab;
            margin-right:5px;
        }
        .three .dept2{
           
            width:38px;
            height:14px;
            border:1px solid #ababab;
            font-size:13px;
            padding:5px 15px;
        }
        .four img{
            width:100%;
            border-bottom:1px solid #ffffff;
        }
        ul{
            overflow: hidden;
        }
        ul li{
            float: left;
            width: 49%;
           

        }
        ul li:nth-of-type(2n){
            margin-left: 2%;
        }
       li img{
            width: 100%;
        }
        .des{
             /* 以下几行代码，超出文字出现... */
                display: -webkit-box;
                -webkit-box-orient: vertical;
                /* 行数 */
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
                font-size:15px;
                margin:1vh 3vw 
        }
        #like p{
            font-size: 7px;
            height: 9vh;
        }
        li span{
            font-size:17px;
            margin-left:2vw;
            color:#ff7517;
           
        }
        li u{
            font-size:12px;
            text-decoration:line-through;
            color:#8e8e8e;
        }
</style>
