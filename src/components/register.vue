<template>
    <main>
        <div class="one">
             <router-link :to="{path:'login'}">
                <img src="../assets/images/回.png" alt="" width='20px' class="return">
             </router-link> 
            <img src="../assets/images/help.png" alt="" width="26px" id="one">
        </div>
        <h1>注册小米账号</h1>
        <div class="two">
                  <span>中国</span>     
                <img src="../assets/images/返回.png" alt="">
                
        </div>
        <p>成功注册帐号后，国家/地区将不能被修改</p>
        <div class="phone">  
                            <span>+86<b></b></span>
                            <img src="../assets/images/返回.png" alt="">
                            <input type="text"  placeholder="请输入手机号码" >
        </div>
         <button id="lg">立即注册</button>
         <p>已阅读并同意：小米 <span>用户协议</span>和<span>隐私政策</span></p>
         <div class="footer">
                    <div class="last">
                            <p>简体 | 繁体 | English | 常见问题</p>
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
        #one{
            float:right;
            margin-top:2px ;
        }
        h1{
            text-align:center;
            font-size: 37px;
            font-weight: 300;
        }
        .return{
            margin-top:5px;
        }
        .two{
            width:90%;
            background-color: #f0f0f0;
            position: relative;
            border-radius: 23px;
            padding: 17px 10px;
            margin: 34px auto 9px;
        }
        .two img{
            width:20px;
            position: absolute;
            top: 3vh;
            right: 5vw;
        }
       div input{
            width: 70%;
            outline:none;
            border:none;
            font-size:20px;
            margin:20px 0px 20px 10px;
            background-color: #f0f0f0;
        }
        .phone{
           width:90%;
            background-color: #f0f0f0;
            position: relative;
            border-radius: 23px;
            padding: 0px 10px;
            margin: 34px auto 9px;
            position: relative;
        }
        .phone img{
            position: absolute;
            left: 47px;
            top: 23px;
            width: 20px;
        }
        p{
            font-size: 15px;
            margin-left: 10px;
            color: gray;
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
            margin-bottom: 14px;
            font-weight:bold;
        }
        p span{
            text-decoration: underline;
        }
         .footer{
            margin-top: 30vh;
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