<template>
<main>
        <img :src="src" alt="" class="tup">
        <div class="mi">    
            <div>
                    <p>—— {{title1}} ——</p>
            </div>
            <ul>       
                    <li v-for="(item,index) in list1">
                    <img :src="item.src" alt="">
                    <p>{{item.p}}</p>
                    </li>
            </ul>
            <div>
                    <p>—— {{title2}} ——</p>
            </div>
            <ul>       
                    <li v-for="(item,index) in list2">
                    <img :src="item.src" alt="">
                    <p>{{item.p}}</p>
                    </li>
            </ul>
            <div>
                    <p>—— {{title3}} ——</p>
            </div>
            <ul>       
                    <li v-for="(item,index) in list3">
                    <img :src="item.src" alt="">
                    <p>{{item.p}}</p>
                    </li>
            </ul>
        </div>
</main>
</template>

<script>
export default{
    data(){
        return{
            src:'./src/assets/images/xiaomi120.png',
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
    }
}

</script>
<style scoped>
    .tup{
            width: 90%;
            margin-left: 2vw;
        }
</style>