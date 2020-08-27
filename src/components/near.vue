<template>
     <main>
        <img src="../assets/images/redmi9a1.png" alt="" class="img1">
        <div class="con1">
            <img src="../assets/images/bomm.png" alt="">
            <div class="con2">
                <ul>
                    <li v-for="(item,index) in list1">
                        <img :src="item.src" alt="">
                        <div class="con2_s">
                            <p class="p1">{{item.con1}}</p>
                            <p class="p2">{{item.con2}}</p>
                            <span class="span1">{{item.con3}}</span>
                            <span class="span2">{{item.con4}}</span>
                            <button>{{item.con5}}</button>
                        </div>
                    </li>               
                </ul>
            </div>
        </div>
       
        <div class="con3">
            <img src="../assets/images/5G_h.png" alt="">
            <ul>
                <li v-for="(item,index) in list2">
                    <img :src="item.src" alt="" v-if="{index:(index!=6)&&(index!=9)}">
                    <video :class="{video:index!=6&&index!=9}" :src="item.src" controls></video>
                    <div class="con3_s">
                        <div class="left">
                            <p class="p1">{{item.con1}}</p>
                            <p class="p2">{{item.con2}}</p>
                        </div>
                        <div class="right">
                            <span class="span1">{{item.con3}}</span>
                            <span class="span2">{{item.con4}}</span>
                            <button>{{item.con5}}</button>
                        </div>
                    </div>
                </li>
            </ul>
            <img src="../assets/images/gift.png" alt="">            
        </div>
        <div class="con3 con4">
            <img src="../assets/images/longday.png" alt="">
            <ul>
                <li v-for="(item,index) in list3">
                    <img :src="item.src" alt="">
                    <div class="con3_s">
                        <div class="left">
                            <p class="p1">{{item.con1}}</p>
                            <p class="p2">{{item.con2}}</p>
                        </div>
                        <div class="right">
                            <span class="span1">{{item.con3}}</span>
                            <span class="span2">{{item.con4}}</span>
                            <button>{{item.con5}}</button>
                        </div>
                    </div>
                </li>
            </ul>          
        </div>
        <div class="footer"></div>
     </main>
</template>
<script>
    export default {
        data(){
            return{
                list1:[
                    {
                        src:'./src/assets/images/h1.png',
                        con1:'Redmi K30 5G',
                        con2:'双模5G，120Hz流速屏',
                        con3:'￥1599起',
                        con4:'1999起',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/images/h2.png',
                        con1:'Redmi K30 Pro 系列',
                        con2:'双模5G，骁龙865，弹出全面屏',
                        con3:'￥2699起',
                        con4:'2999起',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/images/h3.png',
                        con1:'Redmi 9A',
                        con2:'5000mAh长循环大电量，6.53"超大护眼屏幕',
                        con3:'499起',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/images/h4.png',
                        con1:'Redmi K30 4G',
                        con2:'120Hz流速屏，全速热爱',
                        con3:'￥1399起',
                        con4:'1699起',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/images/h5.png',
                        con1:'Redmi 8A',
                        con2:'5000mAh超长续航',
                        con3:'￥599起',
                        con4:'699起',
                        con5:'立即购买'
                    }
                ],
                list2:[
                    {
                        src:'./src/assets/images/h_1.png',
                        con1:'小米10至尊纪念版',
                        con2:'120X 变焦 / 120W秒充 / 120Hz屏幕',
                        con3:'￥5299起',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/images/h_2.png',
                        con1:'Redmi K30 至尊纪念版',
                        con2:'120Hz弹出全面屏，天玑1000+旗舰处理器,索尼6400万四摄',
                        con3:'￥1999起',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/images/h_3.png',
                        con1:'腾讯黑鲨游戏手机3S ',
                        con2:'骁龙865处理器，120Hz刷新率',
                        con3:'￥3999起',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/images/h_4.png',
                        con1:'小米10',
                        con2:'骁龙865处理器/1亿像素8K电影相机',
                        con3:'￥3799起',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/images/h_5.png',
                        con1:'小米10移动权益版',
                        con2:'信用购机套餐最高优惠3780元',
                        con3:'￥3799起',
                        con4:'￥3999',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/images/h_6.png',
                        con1:'小米10 Pro',
                        con2:'骁龙865处理器 / 50倍数字变焦',
                        con3:'￥4999',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/video/h1.mp4',
                    },
                    {
                        src:'./src/assets/images/h_7.png',
                        con1:' Redmi K30 Pro',
                        con2:'双模5G， 高通骁龙865，弹出式超光感全面屏',
                        con3:'￥2699起',
                        con4:'￥2999',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/images/h_8.png',
                        con1:'Redmi K30 Pro 变焦版',
                        con2:'双模5G，骁龙865，弹出全面屏，索尼6400万双光学防抖四摄',
                        con3:'￥3399起',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/video/h2.mp4',
                    },
                    {
                        src:'./src/assets/images/h_9.png',
                        con1:'Redmi 10X 系列',
                        con2:'这就是街舞同款手机',
                        con3:'￥999起',
                        con5:'立即购买'
                    }
                ],
                list3:[
                    {
                        src:'./src/assets/images/h_10.png',
                        con1:'小Redmi 9A',
                        con2:'5000mAh长循环大电量，6.53"超大护眼屏幕，大音量扬声器',
                        con3:'￥499起',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/images/h_11.png',
                        con1:'Redmi 9',
                        con2:'5020mAh超长续航，1080P 全高清大屏，全场景 AI 四摄',
                        con3:'￥799起',
                        con5:'立即购买'
                    },
                    {
                        src:'./src/assets/images/h_12.png',
                        con1:'Redmi 10X 4G',
                        con2:'5020mAh超长续航，128GB大内存，4800万超清四摄',
                        con3:'￥999起',
                        con5:'立即购买'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    main{
        width: 100%;
    }
    .img1{
        width: 100%;
        display: block;
    }
    .con1{
        width: 100%;
        background-color: #56bd74;
        padding: 5px 0px;
    }
    .con1>img{
        width: 100%;
        border-bottom: 0.5px solid #ffffff;
        display: block;
    }
    .con2{
        width: 100%;
        overflow: auto;
    }
    .con2_s{
        background-color: #ffffff;
        text-align: center;
        padding-bottom: 10px;
    }
    .con2 ul{
        width: 252%;
        overflow: hidden;
    }
    .con2 ul li{
        width: 19.1%;
        float: left;
        margin: 0.4%;
        
    }
    .con2 ul img{
        width: 100%;
        display: block;
    }
    .con2 .p1{
        width: 90%;
        font-size: 17px;
        margin: 0px auto;
        font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
        font-weight: bold;
          /* 以下几行代码，超出文字出现... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .con2 .p2{
        width: 90%;
        margin: 0px auto;
        font-size: .2rem;
        color: #3c3c3c;
        height: 1.5em;
        line-height: 1.5em;
         /* 以下几行代码，超出文字出现... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .con2 .span1{
        color: #ff5850;
        font-size: 17px;
    }
    .con2 .span2{
        font-size: 16px;
         color: #3c3c3c;
         text-decoration: line-through;
    }
    .con2 button{
        width: 60%;
        font-size: 13px;
        display: block;
        background-color: #ff5850;
        color: #ffffff;
        border: none;
        margin: 0px auto;
        padding: 5px;
        border-radius: 5px;
    }
    .con3{
        width: 100%;
        background-color: #6292bb;
        padding: 8px 0px;
    }
    .con3>img{
        width: 100%;
    }
    .con3 ul img{
        width: 100%;
        display: block;
    }
    .con3 ul li{
        margin: 8px;
        border-radius: 10px;
        overflow: hidden;
    }
    .con3 ul video{
        width: 100%;
    }
    .video{
        display: none;
    }
    .con3_s{
        width: 100%;
        background-color: #ffffff;
        overflow: hidden;
        padding: 14px 0px;
    }
    .con3 ul li:nth-of-type(7) .con3_s,.con3 ul li:nth-of-type(10) .con3_s{
        display: none;
    }
    .con3 ul li:nth-of-type(7),.con3 ul li:nth-of-type(10){
        margin-left: 0px;
        margin-right: 0px;
        border-radius: 0px;
    }
    .con3 ul li:nth-of-type(7) video,.con3 ul li:nth-of-type(10) video{
        display: block;
    }
    .con3_s .left{
        width: 60%;
        float: left;
    }
    .con3_s .right{
        width: 40%;
        float: right;
        text-align: center;
    }
    .con3_s .left .p1{
        width: 90%;
        font-size: 17px;
        margin: 0px auto;
        font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
        font-weight: bold;
    }
    .con3_s .left .p2{
        width: 90%;
        margin: 0px auto;
        font-size: .2rem;
        color: #3c3c3c;
        height: 1.5em;
        line-height: 1.5em;
         /* 以下几行代码，超出文字出现... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .con3_s .right .span1{
        color: #ff5850;
        font-size: 17px;
    }
    .con3_s .right .span2{
        font-size: 16px;
         color: #3c3c3c;
         text-decoration: line-through;
    }
    .con3_s .right button{
        width: 80%;
        font-size: 13px;
        display: block;
        background-color: #ff5850;
        color: #ffffff;
        border: none;
        margin: 0px auto;
        padding: 5px;
        border-radius: 5px;
    }
    .longday{
        display: block;
        width: 100%;
        border-bottom: 0.5px solid #ffffff;
    }
    .con4{
        background-color: #ffb265;
    }
    .footer{
        width: 100%;
        height: 10%;
    }
</style>