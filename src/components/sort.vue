<template>
     <main>
        <div class="one">
                 <b></b>
                 <div>分类</div>
                 <router-link :to="{path:'search'}"> 
                        <img src="../assets/images/搜索.png" alt="" width="90vw" class="right">
                 </router-link>
        </div>
        <div>
                <ul class="two">
                        <li v-for="(item,index) in list" @click="change(item,index)" >
                                <span :class="{current:num==index}">{{item.con}}</span>
                        </li>
                </ul> 
                <div class="three">
                        <img src="../assets/images/xiaomi120.png" alt="">
                        <component  :is="msg" :a="mi"></component>
                        <div class="nul"></div>
                </div>
        </div>
    </main>
</template>
<script>
        export default{
                data(){
                    return{
                    a:'',
                    num:'',
                    list:[
                        {
                                id:"mi",
                                con:"小米手机"
                        },
                        {
                                id:"mi",
                                con:"Redmi手机"
                        },
                        {
                                id:"mi",
                                con:"黑鲨手机"
                        },
                        {
                                id:"mi",
                                con:"5G合约"
                        },
                        {
                                id:"mi",
                                con:"小米众筹"
                        },
                        {
                                id:"mi",
                                con:"电视"
                        },
                        {
                                id:"mi",
                                con:"大家电"
                        },
                        {
                                id:"mi",
                                con:"电脑办公"
                        },
                        {
                                id:"mi",
                                con:"小爱智能"
                        },
                        {
                                id:"mi",
                                con:"路由器 "
                        },
                        {
                                id:"mi",
                                con:"生活电器"
                        },
                        {
                                id:"mi",
                                con:"厨房电器"
                        },
                        {
                                id:"mi",
                                con:"智能穿戴"
                        },
                        {
                                id:"mi",
                                con:"智能家居"
                        },
                        {
                                id:"mi",
                                con:"小米手机"
                        },
                        {
                                id:"mi",
                                con:"小米手机"
                        },
                        {
                                id:"mi",
                                con:"小米手机"
                        },
                        {
                                id:"mi",
                                con:"小米手机"
                        },
                        {
                                id:"mi",
                                con:"小米手机"
                        },
                        {
                                id:"mi",
                                con:"小米手机"
                        },
                        {
                                id:"mi",
                                con:"小米手机"
                        },
                        {
                                id:"mi",
                                con:"小米手机"
                        },
                        {
                                id:"mi",
                                con:"小米手机"
                        },
                        {
                                id:"mi",
                                con:"小米手机"
                        },
                    ],
                    msg:'mi',
                    mi:'小米手机',
                    }
                },
                mounted(){
                        this.change(this.list[0],0)
                },
                components:{
                        'mi':{
                                template:` <div class="mi">    
                                <div>
                                        <p>—— {{a.title1}} ——</p>
                                </div>
                                <ul>       
                                        <li v-for="(item,index) in a.list1">
                                        <img :src="item.src" alt="">
                                        <p>{{item.p}}</p>
                                        </li>
                                </ul>
                                <div>
                                        <p>—— {{a.title2}} ——</p>
                                </div>
                                <ul>       
                                        <li v-for="(item,index) in a.list2">
                                        <img :src="item.src" alt="">
                                        <p>{{item.p}}</p>
                                        </li>
                                </ul>
                                <div>
                                        <p>—— {{a.title3}} ——</p>
                                </div>
                                <ul>       
                                        <li v-for="(item,index) in a.list3">
                                        <img :src="item.src" alt="">
                                        <p>{{item.p}}</p>
                                        </li>
                                </ul>
                                </div>`,
                   props:['a'],
                   data(){
                           return{

                           }
                        },
                },
                },
                methods:{
                    change(a,b){
                        this.num=b;
                        this.msg=a.id;
                        if(a.con=="小米手机"||a.con!="Redmi手机"){
                                this.mi={
                                        title1:'小米数字系列',
                                        list1:[
                                                {
                                                   src:"./src/assets/images/mi10u.png",
                                                   p:"小米10至尊版"
                                                },
                                                 {
                                                   src:"./src/assets/images/mi10q.png",
                                                   p:"小米10 青春"
                                                },
                                                 {
                                                   src:"./src/assets/images/10mipro.png",
                                                   p:"小米10 Pro"
                                                },
                                                 {
                                                   src:"./src/assets/images/10mi.png",
                                                   p:"小米10"
                                                }
                                        ],
                                         title2:'小米MIX系列',
                                        list2:[
                                                {
                                                   src:"./src/assets/images/mix.png",
                                                   p:"小米MIX Alpha"
                                                },   
                                        ],
                                         title3:'小米手机配件',
                                        list3:[
                                                {
                                                   src:"./src/assets/images/配件1.png",
                                                   p:"无线充"
                                                },
                                                {
                                                   src:"./src/assets/images/配件2.png",
                                                   p:"充电器"
                                                },
                                                {
                                                   src:"./src/assets/images/配件3.png",
                                                   p:"车充"
                                                },
                                                {
                                                   src:"./src/assets/images/配件4.png",
                                                   p:"数据线"
                                                },
                                                {
                                                   src:"./src/assets/images/配件5.png",
                                                   p:"自拍杆"
                                                },
                                                {
                                                   src:"./src/assets/images/配件6.png",
                                                   p:"小米手机保护壳"
                                                }
                                        ]
                                }
                        }else if(a.con=="Redmi手机"){
                                this.mi={
                                        title1:'Redmi红米 K系列',
                                        list1:[
                                                {
                                                   src:"./src/assets/images/k30u.png",
                                                   p:"K30 至尊版"
                                                },
                                                {
                                                   src:"./src/assets/images/30pro.png",
                                                   p:"K30 Pro"
                                                },
                                                {
                                                   src:"./src/assets/images/30prob.png",
                                                   p:"K30 Pro 变焦版"
                                                },
                                                {
                                                   src:"./src/assets/images/30i.png",
                                                   p:"Redmi K30i"
                                                },
                                                {
                                                   src:"./src/assets/images/304g.png",
                                                   p:"Redmi K30 4G"
                                                },
                                                {
                                                   src:"./src/assets/images/305g.png",
                                                   p:"Redmi K30 5G"
                                                }
                                        ],
                                         title2:'Redmi红米 X系列',
                                        list2:[
                                                {
                                                   src:"./src/assets/images/10x5g.png",
                                                   p:"10X 5G"
                                                },
                                                {
                                                   src:"./src/assets/images/10xpro.png",
                                                   p:"10X Pro 5G"
                                                },
                                                {
                                                   src:"./src/assets/images/10x4g.png",
                                                   p:"10X 4G    "
                                                },
                                        ],
                                         title3:'Redmi红米 数字系列',
                                        list3:[
                                                {
                                                   src:"./src/assets/images/9a.png",
                                                   p:"Redmi 9A"
                                                },
                                                {
                                                   src:"./src/assets/images/9.png",
                                                   p:"Redmi 9"
                                                },
                                                {
                                                   src:"./src/assets/images/8.png",
                                                   p:"Redmi 8"
                                                },
                                                {
                                                   src:"./src/assets/images/8a.png",
                                                   p:"Redmi 8A"
                                                },
                                                {
                                                   src:"./src/assets/images/7a.png",
                                                   p:"Redmi 7A"
                                                }
                                        ]
                                }
                        }
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
            background-color: #f2f2f2;
            position:relative;
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
        .two{
            width: 24%;
            float: left;
            height: 90vh;
            overflow: auto;
            border-right:1px solid #f4f4f4;
        }
        .two li{
            height:7vh;
            line-height:7vh;
            font-size:15px;
            text-align:center;
        }
        .three{
            width: 75%;
            float: right;
            height: 90vh;
            overflow: auto;
        }
        .three>img{
            width: 90%;
            margin-left: 2vw;
        }
        b{
           width: 11px;
            height: 11px;
            border-right:1px solid gray;
            border-bottom:1px solid gray;
            position:absolute;
            top:15px;
            left: 24px;
            transform: rotate(135deg);
        }
        .current{
            color:#fca16c;
        }
        a{
            text-decoration:none;
            color:black;
        }
        .nul {
            width: 100%;
            height: 10vh;
        }
       
</style>
<style >
        .mi{
            margin:0px 15px;
            width:90%
        }
        .phone{
            width:100%;
        }
        .mi ul{
            overflow:hidden;
        }
        .mi ul li{
            float:left;
            width:33.33%;
           text-align: center;
           margin:34px 0px;
        }
        .mi li img{
             width:64%;
        }
        .mi li p{
             font-size:13px;
             line-height:2vh;
        }
        .mi div{
             height:10vh;
             width:100%;
             line-height:10vh;
             text-align:center;
             font-size:15px;
             color:#666666;
        }
</style>