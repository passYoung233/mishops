<template>
    <main>
          <div class="con1">
            <div class="left">抢购中 先下单先得哦</div>
            <div class="right">距结束 <span id="h"></span>:<span id="m"></span>:<span id="s"></span></div>
          </div>
          <ul class="uls1">
              <li v-for="(item,index) in list1">
                <img :src="item.src1" alt="" v-if="item.src1">
                <div class="left" v-if="!item.src1"><img :src="item.src2" alt=""></div>
                <div class="right" v-if="!item.src1">
                    <p class="p1">{{item.con1}}</p>
                    <p class="p2">{{item.con2}}</p>
                    <div class="foot">
                        <div class="left">
                            <div>
                                <span class="span1">{{item.con3}}</span>
                                <span class="span2">{{item.con4}}</span>
                                <div class="process">{{item.con5}}</div>
                            </div>
                        </div>
                        <div class="right">{{item.con6}}</div>
                    </div>
                </div>
              </li>
          </ul> 
    </main>
</template>

<script>
export default {
    data() {
        return {
            list1:[
                {
                    src1:'./src/assets/images/mi_10.png',
                },
                {
                    src2:'./src/assets/images/pur1.png',
                    con1:'米家驱蚊器基础版 3个装 白色',
                    con2:'3个装 长效驱蚊',
                    con3:'￥64.5',
                    con4:'￥129',
                    con5:'已有16人设置提醒',
                    con6:'登录后抢购'
                },
                {
                    src2:'./src/assets/images/pur2.png',
                    con1:'17PIN 星果杯 樱花粉',
                    con2:'随心随行，悦饮随心',
                    con3:'￥64.5',
                    con4:'￥129',
                    con5:'已有16人设置提醒',
                    con6:'登录后抢购'
                },
                {
                    src2:'./src/assets/images/pur3.png',
                    con1:'米家驱蚊器基础版 3个装 白色',
                    con2:'随心随行，悦饮随心',
                    con3:'￥64.5',
                    con4:'￥129',
                    con5:'已有16人设置提醒',
                    con6:'登录后抢购'
                },
                {
                    src2:'./src/assets/images/pur4.png',
                    con1:'米家驱蚊器基础版 3个装 白色',
                    con2:'随心随行，悦饮随心',
                    con3:'￥64.5',
                    con4:'￥129',
                    con5:'已有16人设置提醒',
                    con6:'登录后抢购'
                },
                {
                    src1:'./src/assets/images/pur5.png',
                },
                {
                    src2:'./src/assets/images/pur6.png',
                    con1:'米家驱蚊器基础版 3个装 白色',
                    con2:'随心随行，悦饮随心',
                    con3:'￥64.5',
                    con4:'￥129',
                    con5:'已有16人设置提醒',
                    con6:'登录后抢购'
                },
                {
                    src2:'./src/assets/images/pur7.png',
                    con1:'米家驱蚊器基础版 3个装 白色',
                    con2:'随心随行，悦饮随心',
                    con3:'￥64.5',
                    con4:'￥129',
                    con5:'已有16人设置提醒',
                    con6:'登录后抢购'
                },
                {
                    src2:'./src/assets/images/pur8.png',
                    con1:'米家驱蚊器基础版 3个装 白色',
                    con2:'随心随行，悦饮随心',
                    con3:'￥64.5',
                    con4:'￥129',
                    con5:'已有16人设置提醒',
                    con6:'登录后抢购'
                },
                
                

            ]
        }
    },
    mounted(){
                var h1=document.getElementById('h');
                var m1=document.getElementById('m');
                var s1=document.getElementById('s');
                setInterval(function(){
                    var now=new Date();
                    var old=new Date('2020,11,11');
                    var t=old.getTime()-now.getTime();
                    var d=parseInt(t/(24*3600*1000));
                    var l1=t%(24*3600*1000);
                    var h=parseInt(l1/(3600*1000));
                    var l2=l1%(3600*1000);
                    var m=parseInt(l2/(60*1000));
                    var l3=l2%(60*1000);
                    var s=parseInt(l3/1000);
                    h1.innerHTML=h;
                    m1.innerHTML=m;
                    s1.innerHTML=s;
                },0)
        },

}
</script>

<style scoped>
    .con1{
        overflow: hidden;
        padding: 10px;
    }
    .con1 .left{
        width: 50%;
        float: left;
    }
    .con1 .right{
        width: 35%;
        float: right;
    }
    #h,#m,#s{
        display: inline-block;
        width: 18px;
        height: 18px;
        line-height: 18px;
        background-color: #666666;
        color: #ffffff;
    }
    .uls1{
        width: 100%;
        overflow: hidden;
    }
    .uls1 li{
        
        float: left;
        padding: 8px;
        border-top: 0.04px solid gray;
    }
    .uls1 li>img{
        width: 100%;
    }
    .uls1 li>.left{
        width: 30%;
        float: left;
    }
    .uls1 li>.left img{
        width: 100%;
        display: block;
    }
    .uls1 li>.right{
        width: 70%;
        float: right;
        margin-top: 10px;
    }
    .uls1 li>.right .p1{
        width: 100%;
        font-size: 14px;
    }
    .uls1 li>.right .p2{
        width: 100%;
        font-size: 14px;
        color: #9a9a9a;
    }
    .uls1 .foot{
        width: 100%;
        overflow: hidden;
    }
    .uls1 .foot .left{
        width: 50%;
        float: left;
    }
    .uls1 .foot .span1{
        color: red;
    }
    .uls1 .foot .span2{
        color: gray;
        font-size: 13px;
        text-decoration: line-through;
    }
    .uls1 .foot .process{
        width: 100%;
        font-size: 15px;
    }
    .uls1 .foot .right{
        width: 35%;
        float: right;
        background-color: #ff6000;
        padding: 5px;
        text-align: center;
        color: #ffffff;
        margin-top: 11px;
        border-radius: 5px;
    }

</style>