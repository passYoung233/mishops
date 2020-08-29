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
            src:'./src/assets/images/type烤箱.png',
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

</script>
<style scoped>
    .tup{
            width: 90%;
            margin-left: 2vw;
        }
</style>