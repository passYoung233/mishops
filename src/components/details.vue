<template>
    <main>
            <div class="head">
                <span>
                    <router-link to="/search">
                        <img src="../assets/images/detailback.png" alt="">
                    </router-link>
                </span>
                <p>商品</p>
                <span class="show">
                    <img src="../assets/images/分享.jpg" alt="">
                </span>
            </div>
            <div class="footer">
                    <div>
                        <ul>
                            <li>
                                <img src="../assets/images/首页.png" alt="">
                                <p>首页</p>
                            </li>
                            <li>
                                <img src="../assets/images/客服.png" alt="">
                                <p>客服</p>
                            </li>
                            <li>
                                <img src="../assets/images/car3.png" alt="">
                                <p>购物车</p>
                            </li>
                        </ul>
                    </div>
                    <button>加入购物车</button>
            </div>
            <div class="lbt">
                <mt-swipe :auto="2000">
                <mt-swipe-item><img src="../assets/images/detail1.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/detail2.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/detail3.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/detail4.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/detail5.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/detail6.jpg" alt=""></mt-swipe-item>
                 <mt-swipe-item><img src="../assets/images/detail7.jpg" alt=""></mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="pay">
                    <span>￥2999</span>
                    <b>￥3699</b>
            </div>
            <div class="summary">
                <h3>Redmi K30 Pro 系列</h3> 
                <p>「8GB+256GB到手价仅2999元；享信用卡24期免息，低至125元/期；购机抽奖赢70英寸电视」</p>
                <ul>
                    <li>①  高通骁龙865旗舰处理器，双模5G，与众不同的性能旗舰</li>
                    <li>②  50mm长焦微距，仿佛拥有了一台显微镜</li>
                    <li>③  弹出式超光感全面屏，更极致的全面屏</li>
                </ul>
                <div>
                    北京消费券，指定产品满2000元享9折，最高优惠400元>
                </div>
            </div>
            <div class="function">
                    <ul>
                        <li v-for="(item,index) in list">
                                <img :src="item.src" alt="">
                                <p class="des">{{item.des}}</p>
                                <span class="s">{{item.s}}</span>
                        </li>
                    </ul>
            </div>
            <div class="select">
                <div class="selected">已选</div>
                <div class="thing">
                    <span>Redmi K30 Pro 8GB+256GB 天际蓝 x 1</span>
                    <img src="../assets/images/返回.png" alt="">
                </div>
            </div>
             <div class="select">
                <div class="selected">送至</div>
                <div class="send">
                    <span><img src="../assets/images/gps.png" alt="">北京市 东城区</span>
                    <b>有现货</b>                    
                    <img src="../assets/images/返回.png" alt="">
                    <p>21点前付款，预计8月28日送达</p>
                </div>
            </div>
            <div  class="other">
                <ul>
                   <li v-for="(item,index) in list1">
                                <img :src="item.src" alt="">
                                <span>{{item.s}}</span>
                    </li>
                </ul>
                <img src="../assets/images/返回.png" alt="" class="back">
            </div>
            <div class="recommend">
                <h4>推荐套餐</h4>
                <div class="part"> 
                    <img src="../assets/images/detail-k30p.jpg" alt="">
                    <p>Redmi K30 Pro 8GB+256GB 月幕白</p>
                    <b>￥2999</b>
                </div>
                <div class="plus">
                    <img src="../assets/images/+.jpg" alt="">
                </div>
                <div class="pa">
                        <ul>
                             <li v-for="(item,index) in list2" class="part">
                                <img :src="item.src" alt="">
                                <p>{{item.s}}</p>
                                <b>{{item.b}}</b>
                        </li>
                        </ul>
                </div>
                <div class="sum">
                        <span>总价</span>
                        <b>￥4026</b>
                        <u>￥4456</u>
                        <i>节省￥430</i>
                        <button>购买此套餐（4件商品）</button>
                </div>
            </div>
            <div class="user"> 
                <p>
                    <span>米粉点评团</span>
                    <img src="../assets/images/返回.png" alt="">
                </p>
                      <div class="user1"> 
                        <ul>
                            <li v-for="(item,index) in list3" class="part1">
                                <div class="upper">
                                    <img :src="item.src1" alt="" class="eva1">
                                </div>
                                <p>{{item.p}}</p>
                                <img :src="item.src2" alt="" class="eva2">
                                <span>{{item.s}}</span>
                                <img :src="item.src3" alt="" class="eva3">
                                <b>{{item.b}}</b>
                            </li>
                        </ul>
                       </div> 
                </div>
            <div class="lbt1">
                <mt-swipe :auto="2000">
                <mt-swipe-item><img src="../assets/images/轮播图1.1.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/轮播图1.2.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/轮播图1.3.jpg" alt=""></mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="lhs">商品介绍</div>
            <div class="rhs">规格参数</div>
            <div class="much">
                    <img src="../assets/images/详情页内容1.jpg" alt="">
                    <img src="../assets/images/详情页内容2.jpg" alt="">
                    <img src="../assets/images/详情页内容3.jpg" alt="">
                    <img src="../assets/images/详情页内容4.jpg" alt="">
                    <img src="../assets/images/详情页内容5.jpg" alt="">
                    <img src="../assets/images/详情页内容6.jpg" alt="">
                    <img src="../assets/images/详情页内容7.jpg" alt="">
                    <img src="../assets/images/详情页内容8.jpg" alt="">
                    <img src="../assets/images/详情页内容9.jpg" alt="">
                    <img src="../assets/images/详情页内容10.jpg" alt="">
                    <img src="../assets/images/详情页内容11.jpg" alt="">
                    
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
                                    src:"./src/assets/images/cpu.png",
                                    des:"CPU",
                                    s:"骁龙865",
                                   
                                },
                                 {
                                    src:"./src/assets/images/camera.png",
                                    des:"四摄像头",
                                    s:"6400万+1300万+500万+200万像素",
                                   
                                },
                                 {
                                    src:"./src/assets/images/screen.png",
                                    des:"超大屏",
                                    s:"6.67英寸",
                                   
                                 },
                                 {
                                    src:"./src/assets/images/bigscreen.png",
                                    des:"屏幕分辨率",
                                    s:"2400×1080",
                                   
                                },
                                 {
                                    src:"./src/assets/images/play.png",
                                    des:"极速畅玩",
                                    s:"8GB",
                                   
                                },
                                 {
                                    src:"./src/assets/images/hdd.png",
                                    des:"存储容量",
                                    s:"256GB",
                                   
                                 },
                                 {
                                    src:"./src/assets/images/height.png",
                                    des:"普通厚度",
                                    s:"8.9mm",
                                   
                                },
                                 {
                                    src:"./src/assets/images/longtime.png",
                                    des:"超长待机",
                                    s:"4700mAh",
                                   
                                },
                                 {
                                    src:"./src/assets/images/net.png",
                                    des:"运营商网络",
                                    s:"双模5G全网通",
                                   
                                 },
                                 {
                                    src:"./src/assets/images/dbnet.png",
                                    des:"网络模式",
                                    s:"双卡双待",
                                   
                                }
                                ],
                                list1:[
                                    {
                                        src:"./src/assets/images/yes.png",
                                        s:"小米自营"
                                    },
                                    {
                                        src:"./src/assets/images/yes.png",
                                        s:"小米发货"
                                    },
                                    {
                                        src:"./src/assets/images/yes.png",
                                        s:"7天无理由退货"
                                    }
                                ],
                                list2:[
                                    {
                                        src:"./src/assets/images/背夹.jpg",
                                        s:"冰封散热背夹 白色",
                                        b:"￥99"
                                    },
                                     {
                                        src:"./src/assets/images/耳机.jpg",
                                        s:"小米活塞耳机 清新版 黑色",
                                        b:"￥29"
                                    },
                                     {
                                        src:"./src/assets/images/小米手表.jpg",
                                        s:"小米手表 标准版 典雅黑",
                                        b:"￥899"
                                    }
                                ],
                                list3:[
                                    {
                                        src1:"./src/assets/images/评价1.jpg",
                                        p:"每一份包装盒都可能是一个小米之家新店",
                                        src2:"./src/assets/images/头像1.jpg",
                                        s:"星期六兴趣培训班",
                                        src3:"./src/assets/images/浏览.jpg",
                                        b:"2.5万"
                                    },
                                    {
                                        src1:"./src/assets/images/评价2.jpg",
                                        p:"每一份包装盒都可能是一个小米之家新店",
                                        src2:"./src/assets/images/头像2.jpg",
                                        s:"星期六兴趣培训班",
                                        src3:"./src/assets/images/浏览.jpg",
                                        b:"2.5万"
                                    },
                                    {
                                        src1:"./src/assets/images/评价3.jpg",
                                        p:"每一份包装盒都可能是一个小米之家新店",
                                        src2:"./src/assets/images/头像2.jpg",
                                        s:"星期六兴趣培训班",
                                        src3:"./src/assets/images/浏览.jpg",
                                        b:"2.5万"
                                    },
                                    {
                                        src1:"./src/assets/images/评价4.jpg",
                                        p:"每一份包装盒都可能是一个小米之家新店",
                                        src2:"./src/assets/images/头像1.jpg",
                                        s:"星期六兴趣培训班",
                                        src3:"./src/assets/images/浏览.jpg",
                                        b:"2.5万"
                                    },
                                    {
                                        src1:"./src/assets/images/评价1.jpg",
                                        p:"每一份包装盒都可能是一个小米之家新店",
                                        src2:"./src/assets/images/头像2.jpg",
                                        s:"星期六兴趣培训班",
                                        src3:"./src/assets/images/浏览.jpg",
                                        b:"2.5万"
                                    }
                                ]
                            }
                        }
                    }
</script>
<style scoped>
    .head{
        width:100%;
        height:63px;
        background-color:white;
        position: fixed;
    }
    .head img{
        position: absolute;
        width: 8vh;
        left: 18px;
        top:4px;
    }
    .head p{
        text-align: center;
        line-height: 63px;
        color: orangered;
    }
    .footer{
        width: 100%;
        height: 62px;
        background-color:white;
        position: fixed;
        bottom: 0px;
    }
    .footer div{
        width: 40%;
        height: 63px;
    }
    .footer img{
        width: 40px;
    }
    .footer li{
        float:left;
        margin-left: 10px;
        text-align: center;
    }
    .footer p{
        font-size: 11px;
        color: #acacac;
        margin-top: -5px;
    }
    .footer button{
        position:absolute;
        bottom: 8px;
        right: 24px;
        width: 52%;
        height: 41px;
        border-radius: 33px;
        border:1px solid white;
        background-color: #ff7905;
        color: white;
        font-size: 16px;
    }
    .show{
        position: absolute;
        width: 8vh;
        right: 25px;
        top:0px;
    }
     .lbt img{
         width: 100%;
     }
     .lbt1{
         width:90%;
          margin: 0px auto 3vh auto;
     }
     .lbt1 img{
         width: 100%;
         border-radius: 10px;
     }
     .pay span{
         color:#ff6700 ;
         font-family: Avenir,Arial,sans-serif;
         font-weight: bold;
         font-size: 27px;
         margin-left: 15px;
         margin-top: 10px;
     }
     .pay b{
         color: grey;
         text-decoration: line-through;
         font-weight: normal;
         font-size: 15px;
     }
     .summary{
         margin: 10px 20px;
     }
     .summary h3{
         font-family:Avenir;
         font-size: 18px;
         font-weight: bold;
         margin-bottom: 10px;
     }
      .summary p{
         font-family:Avenir;
         font-size: 14px;
     }
      .summary li{
         font-family:Avenir;
         font-size: 13px;
     }
     .summary div{
         width: 96%;
         border-radius: 10px;
         height: 20px;
         background-color: #f0f0f0;
         font-size: 12px;
         line-height: 20px;
         margin: 18px 0px;
         text-align: center;
     }
     .function{
         border-top: 1px solid gray;
         border-bottom: 13px  solid #f6f6f6;
         width: 100%;
        overflow:auto;
     }
     .function ul{
        width: 220%;
      
        
     }
    .function li{
        overflow:auto;
        float:left;
        width:10%;
        text-align:center;
        padding: 15px 0px;
    }
    .function img{
        width:17px
    }
    .function p{
        font-size:13px;
    }
    .s{
        font-size:11px;
          /* 以下几行代码，超出文字出现... */
                display: -webkit-box;
                -webkit-box-orient: vertical;
                /* 行数 */
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
    }
    .select{
        padding-left: 10px;
        padding-top: 10px;
        width: (100%-10px);
        height: 40px;
    }
    .selected{
        margin-left: 10px;
        width: 10%;
        height: 40px;
        float: left;
        font-size: 15px;
        line-height: 30px;
    }
    .thing{
        width: 85%;
        height: 40px;
        float:right;
        border-bottom: 1px solid gray;
    }
    .select span{
        font-size: 15px;
    }
    .select img{
        width: 17px;
        float: right;
        line-height: 40px;
        margin: 6px 15px 0px 0px ;
    }
    .send{
        width: 85%;
        height: 40px;
        float:right;
    }
    .send b{
        color:#ff7905;
        font-size:15px;
    }
    .send p{
        font-size: 14px;
        color: #9a9a9a;
    }
    .send>span img{
        width: 17px;
       float: left;
        line-height: 40px;
        margin: 6px 5px 0px 0px ;
    }
    .other{
        padding-left: 20px;
        width: (100%-10px);
        height: 32px;
        background-color: #fcfcfc;
        margin-top: 15px;
        line-height: 32px;
    }
    .other span{
        font-size: 12px;
        color:#a4a4a4;
    } 
    .other img{
        width: 12px;
    }
    .other li{
        float: left;
        margin-right:15px;
    }
    .back{
        float: right;
        margin-top: 10px;
        margin-right: 18px;
    }
    .recommend{
       margin-left:22px;
       margin-bottom: 22px;
    }
    .recommend h4{
        margin: 15px 0px;
        font-size: 17px;
    }
    .recommend img{
        width:85px;
    }
    .recommend p{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .part{
        width: 25%;
        height: 22vh;
        border: 1px solid #a4a4a4;
        padding: 5px;
        border-radius: 10px;
        text-align: center;
        float: left;
    }
    .part p{
        font-size: 12px;
    }
    .part b{
        font-size: 12px;
    }
    .plus{
        width: 14%;
        height: 22vh;
        text-align: center;
        line-height: 22vh;
        float: left;
    }
    .plus img{
        width: 18px;
    }
    .pa{
        overflow-x: auto;
        overflow-y: hidden;
        width: 50%;
        height: 24vh;
    }
    .pa ul{
        width: 193%;
        overflow: hidden;
    }
    .pa li{
        margin-left: 10px;
        float: left;
        width:26.333%;
    }
    .sum{
        text-align:center;
    }
    .sum span{
        font-size:15px
    }
    .sum b{
        font-size: 17px;
        color: orangered;
    }
    .sum u{
        font-size: 10px;
        text-decoration: line-through;
        color: #a4a4a4;
    }
    .sum i{
        font-size: 10px;
        font-style: normal;
        color: #a4a4a4;
    }
    .sum button{
        width:100%;
        height:40px;
        background-color: orangered;
        color: white;
        font-size:16px;
        border: 1px solid white;
        border-radius: 20px;
        padding: 10px 20px;
        margin: 16px 0px 18px -22px;
    }
    .user{
       margin: 18px auto;
       width: 95%;
    }
    .user span{
        font-size: 17px;
    }
    .user>p img{
        width: 17px;
        float:right;
        margin-top: 5px;
    }
      .part1{
        width: 25%;
        height: 33vh;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 10px;
        text-align: center;
        float: left;
    }
    .user1{
         margin: 3vh auto 5vh auto;
        width: 95%;
        overflow-x:auto;
        overflow-y:hidden;
    }
    .user1 ul{
        width:281%;
    }
    .user1 p{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        font-size: 15px;
    }
    .user1 li{
        width:17%;
        margin-left: 2vw;
    }
    .user1 span{
        font-size:12px;
    }
    .user1 b{
        font-size:10px
    }
    .eva1{
        width:100%;
        border-radius: 10px;
        display: block;
    } 
    .eva2{
        width:13%;
        border-radius: 50%;
    } 
      .eva3{
        width:7%;
    } 
    .upper{
        width: 100%;
        height: 24vh;
    }
    .lhs{
        width: 50%;
        color: orangered;
        font-size: 15px;
        height: 5vh;
        text-align: center;
        float: left;
        margin-bottom: 3vh;
    }
    .rhs{
        width: 50%;
        font-size: 15px;
        height: 5vh;
        float:right;
        text-align: center;
        margin-bottom: 3vh;
    }
    .much img{
        width: 100%;
        display: block;
    }
</style>
<style>
     .lbt .mint-swipe-items-wrap{
            padding-bottom: 110%;
     }
      .lbt1 .mint-swipe-items-wrap{
            padding-bottom: 27.77%;
     }
</style>
