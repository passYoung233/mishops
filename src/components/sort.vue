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
                        <!-- <img src="../assets/images/xiaomi120.png" alt=""> -->
                        <component  :is="msg" ></component>
                        <div class="nul"></div>
                </div>
        </div>
    </main>
</template>
<script>
        import mitype from './mitype.vue';
        import redtype from './redtype.vue';
        export default{
                data(){
                    return{
                    a:'',
                    num:0,
                    list:[
                        {
                                id:"mi",
                                con:"小米手机"
                        },
                        {
                                id:"red",
                                con:"Redmi手机"
                        },
                        {
                                id:"mi",
                                con:"黑鲨手机"
                        },
                        {
                                id:"red",
                                con:"5G合约"
                        },
                        {
                                id:"mi",
                                con:"小米众筹"
                        },
                        {
                                id:"red",
                                con:"电视"
                        },
                        {
                                id:"mi",
                                con:"大家电"
                        },
                        {
                                id:"red",
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
                                id:"red",
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
                                id:"red",
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
                        'mi':mitype,
                        'red':redtype
                },
        
                methods:{
                    change(a,b){
                        this.num=b;
                        this.msg=a.id;
                       
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