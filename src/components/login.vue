<template>
    <main>
        
        <div class="one">
            <router-link :to="{path:'my'}"> 
                <img src="../assets/images/回.png" alt="" width='20px' class="return">  
            </router-link> 
            <img src="../assets/images/help.png" alt="" width="26px"  id="one"> 
        </div>
        <div class="two">
             <img src="../assets/images/mi-logo.png" alt="">
        </div>
        <p>小米账号登录</p>
        <div>
                <div>
                        <div class="phone">  
                            <span>+86<b></b></span>
                            <input type="text"  placeholder="手机号码" >
                        </div>
                        <div  class="msg">
                            <input type="text"  placeholder="短信验证码" >
                            <a href="#">获取验证码</a>
                        </div>
                </div>
                <div class="enroll">
                    <button id="lg">立即登录/注册</button>
                    <button id="lo">
                            <router-link :to="{path:'login2'}">用户名密码登录</router-link>
                    </button>
                    <p>收不到验证码？</p>
                </div>
                <div class="other">
                    <p>——————其他方式登录——————</p>
                    <div >
                        <ul>
                            <li><img src="../assets/images/微博.png" alt=""></li>
                            <li><img src="../assets/images/支付宝.png" alt=""></li>
                            <li><img src="../assets/images/微信.png" alt=""></li>
                            <li><img src="../assets/images/苹果logo.png" alt=""></li>
                        </ul>
                    </div>
                </div>
                <div class="footer">
                    <div class="last">
                            <p>简体 | 繁体 | English | 常见问题 | 隐私政策</p>
                    </div>
                </div>
        </div>
     </main>
</template>


<style scoped>
        main{
            margin:0px 15px;
        }
        .one{
            width:100%;
            height:31px;
        }
        .one .return{
            position: absolute;
            top: 1vh;
            left: 1vh;
        }
        #one{
            float:right;
            margin-top:2px ;
            position: absolute;
            top: 0.5vh;
            right: 1vh;
        }
        .two {
            height:49px;
            width:49px;
            border-radius:4px;
            background-color:#ff6700;
            margin:0px auto;
           
        }
        p{
            text-align:center;
            margin-top:2vh;
            margin-bottom:1vh;
            font-size:24px;
        }
        div span{
            color:#a4a4a4;
            font-size:22px;
            position:relative;
             margin-right:30px;
        }
         b{
            width: 9px;
            height: 9px;
            border-right:1.5px solid gray;
            border-bottom:1.5px solid gray;
            position:absolute;
            top:1.5vh;
            left: 13vw;
            transform: rotate(-45deg);
        }
        .phone{
            width:100%;
            border-bottom:1.5px solid #e7e7e7
            
        }
        div input{
            width: 70%;
            border:1px solid gray;
            outline:none;
            border:none;
            font-size:23px;
            margin:20px 0px;
        }
        .msg{
            width:100%;
            border-bottom:1.5px solid #e7e7e7;
        }
        .msg a{
            width:30%;
            text-decoration:none;
            color:#0d84ff;
        }
        #lg{
            width:100%;
            background-color:#ff6700;
            color:#fff;
            font-size:23px;
            border-radius:30px;
            padding:10px 40px;
            border:1px solid white;
            margin-top:20px;
            font-weight:bold;
            outline: none;
        }
        #lo{
             width:100%;
            background-color:#f0f0f0;
            color:black;
            font-size:23px;
            border-radius:30px;
            padding:10px 40px;
            border:1px solid white;
            margin-top:3vh;
            margin-bottom: 1vh;
            font-weight:bold;
        }
        .enroll p{
                color:#9f9f9f;
                font-size: 20px;
                text-align: center;
                margin-bottom: 5vh;
        }
        .enroll a{
             text-decoration:none;
             color: black;
        }
        .other{
            height: 15vh;
        }
        .other li{
            width:25%;
            float: left;
            text-align: center;
        }
        .other p{
            color:#9f9f9f;
            font-size: 15px;
            margin-bottom: 19px;
        }
        .other img{
            width: 30px;
        }
        .other div{
            width:50%;
            margin:10px auto;
        }
        .footer{
            height: 3vh;
            margin-left: auto;
            margin-right: auto;
        }
        .last{
            width: 80%;
            margin: 0px auto;
            height: 3vh;
        }
        .footer p{
            font-size: 15px;
            text-align: center;
        }
</style>