import VueRouter from 'vue-router';

import first from '../../components/first.vue'
import car from '../../components/car.vue'
import index from '../../components/index.vue'
import sort from '../../components/sort.vue'
import star from '../../components/star.vue'
import my from '../../components/my.vue'
import recommend from '../../components/recommend.vue'
import phone from '../../components/phone.vue'
import clever from '../../components/clever.vue'
import tv from '../../components/tv.vue'
import note from '../../components/note.vue'
import house from '../../components/house.vue'
import near from '../../components/near.vue'
import search from '../../components/search.vue'
import login from '../../components/login.vue'
import login2 from '../../components/login2.vue'
import register from '../../components/register.vue'
import advice from '../../components/advice.vue'
import update from '../../components/update.vue'
import mind from '../../components/mind.vue'
import purchase from '../../components/purchase.vue'
import time1 from '../../components/time1.vue'
import time2 from '../../components/time2.vue'
import time3 from '../../components/time3.vue'
import time4 from '../../components/time4.vue'
import details from '../../components/details.vue'


export default new VueRouter({
    routes:[

        {
            path:'/',
            component:first, 
            children:[
                {
                    path:'/index',
                    component:index,
                    children:[
                        {
                            path:'/recommend',
                            component:recommend
                        },
                        {
                            path:'/phone',
                            component:phone
                        },
                        {
                            path:'/clever',
                            component:clever
                        },
                        {
                            path:'/tv',
                            component:tv
                        },
                        {
                            path:'/note',
                            component:note
                        },
                        {
                            path:'/house',
                            component:house
                        },
                        {
                            path:'/near',
                            component:near
                        }
                    ],
                    redirect:'/recommend'
                },
                {
                    path:'/car',
                    component:car
                },
                {
                    path:'/sort',
                    component:sort
                },
                {
                    path:'/star',
                    component:star,
                    children:[
                        {
                            path:'/advice',
                            component:advice
                        },
                        {
                            path:'/update',
                            component:update
                        },
                        {
                            path:'/mind',
                            component:mind
                        }
                    ],
                    redirect:'/advice'
                },
                {
                    path:'/my',
                    component:my
                }
            ],
            redirect:'/index',
        },
        {
            path:'/search',
            component:search
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/login2',
            component:login2
        },
        {
            path:'/register',
            component:register
        },
        {
            path:'/purchase',
            component:purchase,
            children:[
                {
                    path:'/time1',
                    component:time1
                },
                {
                    path:'/time2',
                    component:time1
                },
                {
                    path:'/time3',
                    component:time1
                },
                {
                    path:'/time4',
                    component:time1
                }

            ],
            redirect:'/time1'
        },
        {
            path:'/details',
            component:details
        },    
        {
            path:'/*',
            redirect:'/index'
        }
    ]
})