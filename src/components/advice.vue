<template>
    <main>
        <section>
            <div class="con1">
                <div class="con1_s">
                    <div class="left">兴趣圈</div>
                    <div class="right">1.8万人已加入 <img src="../assets/images/goto.png" alt="" class="img2"><img src="../assets/images/tips.png" alt="" class="img1"></div>
                </div>
                <div class="con1_r">
                    <ul>
                        <li v-for="(item,index) in list1">
                            <img :src="item.src" alt="">
                            <p class="p1">{{item.con1}}</p>
                            <p class="p2">{{item.con2}}</p>
                            <span v-if="item.con3">{{item.con3}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <ul class="uls1">
                <li v-for="(item,index) in list2">
                    <img :src="item.src" alt="">
                </li>
            </ul>
            <ul class="uls2 uls2_s">
                <li v-for="(item,index) in list3" v-if="index%2==0">
                <img :src="item.src1" alt="">
                    <div class="content">                     
                        <div class="head">
                            <span v-if="item.con1">{{item.con1}}</span>
                            <span v-if="item.src2"><img :src="item.src2" alt=""></span>                      
                            {{item.con2}}
                        </div>
                        <p>{{item.con3}}</p>
                        <div class="foot">
                            <div class="left">
                                <img :src="item.src3" alt="">
                                {{item.con4}}
                            </div>
                            <div class="right">
                                <img :src="item.src4" alt="">
                                {{item.con5}}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="uls2 uls2_r">
                <li v-for="(item,index) in list3" v-if="index%2==1">
                    <img :src="item.src1" alt="">
                    <div class="content">                     
                        <div class="head">
                            <span v-if="item.con1">{{item.con1}}</span>
                            <span v-if="item.src2"><img :src="item.src2" alt=""></span>                      
                            {{item.con2}}
                        </div>
                        <p>{{item.con3}}</p>
                        <div class="foot">
                            <div class="left">
                                <img :src="item.src3" alt="">
                                {{item.con4}}
                            </div>
                            <div class="right">
                                <img :src="item.src4" alt="">
                                {{item.con5}}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>           
        </section>
        <footer></footer>
    </main>
</template>

<script>
export default {
    data(){
        return{
            list1:[
                {
                    src:"./src/assets/images/s1.png",
                    con1:'我和小米十年',
                    con2:'一往无前'
                },
                {
                    src:"./src/assets/images/s2.png",
                    con1:'K30',
                    con2:'K30讨论圈'
                },
                {
                    src:"./src/assets/images/s3.png",
                    con1:'5G讨论组',
                    con2:'关于5G的一切',
                    con3:'5G'
                },
                {
                    src:"./src/assets/images/s4.png",
                    con1:'居家男人',
                    con2:'打造智慧家庭'
                },
                {
                    src:"./src/assets/images/s5.png",
                    con1:'小米10',
                    con2:'小米10讨论圈'
                },
                {
                    src:"./src/assets/images/s6.png",
                    con1:'意见反馈',
                    con2:'收集您的建议'
                },
                {
                    src:"./src/assets/images/s7.png",
                    con1:'萌宝俱乐部',
                    con2:'育儿伊甸园'
                },
                {
                    src:"./src/assets/images/s8.png",
                    con1:'学生部落',
                    con2:'年轻就这样'
                },
                {
                    src:"./src/assets/images/s9.png",
                    con1:'MIUI11',
                    con2:'升级刷机一点通',
                    con3:'系统'
                },
                {
                    src:"./src/assets/images/s10.png",
                    con1:'游戏玩家',
                    con2:'集结游戏党'
                },
                {
                    src:"./src/assets/images/s11.png",
                    con1:'Redmi9',
                    con2:'新品讨论圈'
                },
                {
                    src:"./src/assets/images/s12.png",
                    con1:'10X系列',
                    con2:'全芯超越'
                },
                {
                    src:"./src/assets/images/s13.png",
                    con1:'米10青春版',
                    con2:'轻薄5G手机'
                },
                {
                    src:"./src/assets/images/s14.png",
                    con1:'王一博',
                    con2:'王一博粉丝集合'
                }
            ],
            list2:[
                {
                    src:'./src/assets/images/a1.png'
                },
                {
                    src:'./src/assets/images/a2.png'
                },
                {
                    src:'./src/assets/images/a3.png'
                },
                {
                    src:'./src/assets/images/a4.png'
                }
            ],
            list3:[
                {
                    src1:'./src/assets/images/mi1.png',
                    src3:'./src/assets/images/b1.png',
                    src4:'./src/assets/images/eye.png',
                    con1:'#',
                    con2:'我和小米一往无前，留金句赢小爱',
                    con3:'十年期待，不负所望，款款精品，米粉至爱，支持小米，一直相伴',
                    con4:' 鲨鱼',
                    con5:' 1.5万'
                },
                {
                    src1:'./src/assets/images/mi2.png',
                    src2:'./src/assets/images/bag.png',
                    src3:'./src/assets/images/b2.png',
                    src4:'./src/assets/images/eye.png',
                    con2:' Redmi 10X Pro 5G 8GB+128GB',
                    con3:'小米618宠粉直播中奖名单公布',
                    con4:' 小米直播',
                    con5:' 4.3万'
                },
                {
                    src1:'./src/assets/images/mi3.png',
                    src3:'./src/assets/images/b3.png',
                    src4:'./src/assets/images/eye.png',
                    con1:'#',
                    con2:'晒出年轻人的第一款小米产品！ ',
                    con3:'厨刀好伴侣，远离细菌，圈厨除菌刀架',
                    con4:' 顾拜蛋蛋',
                    con5:' 6.2万'
                },
                {
                    src1:'./src/assets/images/mi4.png',
                    src2:'./src/assets/images/bag.png',
                    src3:'./src/assets/images/b4.png',
                    src4:'./src/assets/images/eye.png',
                    con2:'Redmi Note 7',
                    con3:'Redmi Note 7，聚划算！',
                    con4:' 李小白JieaoLee',
                    con5:' 14.4万'
                },
                {
                    src1:'./src/assets/images/mi5.png',
                    src2:'./src/assets/images/bag.png',
                    src3:'./src/assets/images/b5.png',
                    src4:'./src/assets/images/eye.png',
                    con2:'小米10 青春版 5G',
                    con3:'每一次的期待，小米都会急速送到你手中。',
                    con4:' 快乐小米',
                    con5:' 4.3万'
                },
                {
                    src1:'./src/assets/images/mi6.png',
                    src2:'./src/assets/images/bag.png',
                    src3:'./src/assets/images/b6.png',
                    src4:'./src/assets/images/eye.png',
                    con2:'Redmi Note 8',
                    con3:'9102年了，你居然还为找遥控器而苦恼？',
                    con4:' 手机小课堂',
                    con5:' 14.3万'
                },
                {
                    src1:'./src/assets/images/mi7.png',
                    src2:'./src/assets/images/bag.png',
                    src3:'./src/assets/images/b7.png',
                    src4:'./src/assets/images/eye.png',
                    con2:'小米9 Pro 5G',
                    con3:'雷军：明后年会迎来5G手机的全面换机潮',
                    con4:' 商城早报',
                    con5:' 14万'
                },
                {
                    src1:'./src/assets/images/mi8.png',
                    src3:'./src/assets/images/b8.png',
                    src4:'./src/assets/images/eye.png',
                    con3:'雷军：小米为什么能够不断创新？',
                    con4:' 小米官宣',
                    con5:' 14.1万'
                },
                {
                    src1:'./src/assets/images/mi9.png',
                    src3:'./src/assets/images/b9.png',
                    src4:'./src/assets/images/eye.png',
                    con1:'#',
                    con2:'『晒出我的6400万』手机摄影',
                    con3:'Redmi6400万，小米1亿像素相机',
                    con4:' 小米手机',
                    con5:' 13.7万'
                },
                {
                    src1:'./src/assets/images/mi10.png',
                    src3:'./src/assets/images/b10.png',
                    src4:'./src/assets/images/eye.png',
                    con1:'#',
                    con2:'好物推荐',
                    con3:'Redmi红米8系列，五星高品质入门机',
                    con4:' Redmi红米手机',
                    con5:' 13.4万'
                },

            ]
        }
    }
}
</script>

<style scoped>
    section{
        padding: 7vh 2vh;
        background-color: #f5f5f5;
        overflow: hidden;
    }
    .con1{
        width: 100%;
        background-color: #ffffff;
        padding-bottom: 20px;
        border-radius: 0px 0px 13px 13px;
    }
    .con1_s{
        width: 100%;
        height: 5vh;
        overflow: hidden;
        position: relative;
    }
    .con1_s .left{
        float: left;
        font-weight: bold;
        position: absolute;
        left: 5px;
        top: 1vh;
    }
    .con1_s .right{
        width: 39%;
        float: right;
        font-size: 14px;
        font-weight: bold;
        position: absolute;
        right: 0px;
        bottom: 0px;
    }
    .con1_s .img1{
        width: 13%;
        border-radius: 50%;
        float: right;
        border: 1px solid #ff5b00;
    }
    .con1_s .img2{
        width: 3.5%;
        float: right;
        margin-top: 5px;
        margin-left: 8px;
    }
    .con1_r{
        width: 100%;
        overflow: auto;
        margin-top: 3vh;
    }
    .con1_r::-webkit-scrollbar{
        height:0px;
    }
    .con1_r ul{
        width: 400%;
        overflow: hidden;
    }
    .con1_r ul li{
        width: 7.14%;
        position: relative;
        float: left;
    }
    .con1_r ul img{
        width: 70%;
        display: block;
        border-radius: 50%;
        margin: 20px auto 0px auto;
    }
    .con1_r ul .p1{
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 14px;
    }
    .con1_r ul .p2{
        width: 100%;
        color: #9f9f9f;
        text-align: center;
        font-size: 13px;
    }
    .con1_r ul span{
        font-size: 14px;
        height: 13px;
        line-height: 13px;
        background: #ff2929;
        color: #fff;
        text-align: center;
        padding: .02rem .1rem;
        border-radius: 2rem 2rem 2rem 0;
        position: absolute;
        white-space: nowrap;
        left: 50%;
        top: 12px;
    }
    .uls1{
        width: 100%;
        overflow: hidden;
    }
    .uls1 li{
        width: 25%;
        float: left;
        margin-top: 10px;
        text-align: center;
    }
    .uls1 li img{
        width: 90%;
    }
    .uls2{
        width: 49%;
        overflow: hidden;
    }
    .uls2 li>img{
        display: block;
        width: 100%;
        height: 67.2%;
        margin: 0px auto;
    }
    .uls2 li{
        width: 100%;
        margin: 10px 0px;        
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        padding-bottom: 10px;
    }
    .uls2 .head{
        width: 95%;
        font-size: 13px;
        color: #7f7f7f;
    }
    .uls2 .head img{
        width: 10%;    
    }
    .uls2 p{
        width: 96%;
        font-size: 15px;
        color: #333333;
          /* 以下几行代码，超出文字出现... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .uls2 .foot{
        width: 100%;
        overflow: hidden;
    }
    .uls2 .foot .left{
        width: 60%;
        float: left;
        font-size: 13px;
          /* 以下几行代码，超出文字出现... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .uls2 .left img{
        width: 20%;
        border-radius: 50%;
    }
    .uls2 .foot .right{
        float: right;
        width: 40%;
        font-size: 13px;
    }
    .uls2 .right img{
        width: 20%;
    }
    .uls2_s{
        float: left;
    }
    .uls2_r{
        float: right;
    }
    .uls2 .content{
        width: 100%;
        padding: 5px;
    }
    footer{
        width: 100%;
        height: 10vh;
    }
</style>