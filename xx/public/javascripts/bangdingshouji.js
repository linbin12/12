window.onload=function(){
    fff();
    function fff(){
        var back=document.querySelector(".back");
        back.onclick=function(){
            window.location.href="my.html";
        }
        

        var tipstext=document.querySelector(".tipstext");
        var inputs=document.querySelectorAll("input");
        var tips=document.querySelector(".tips");
        var codebtn=document.querySelector(".code-btn");
        var timer;
        function fn22(){
            tips.className="tips alr";
            timer=setTimeout(() => {
                tips.classList.remove("alr"); 
            }, 2000);
         }
        inputs[0].onkeyup=function(){
            if(inputs[0].value[0]==1){
                // tips.style.display="none"
                if(inputs[0].value.length==11){
                    codebtn.id="reds";
                    codebtn.onclick=function(){
                        codebtn.id="";
                        var times;
                        var i = 10;
                        times=setInterval(function(){
                            if(i==0){
                                clearInterval(times);
                                i=10;
                                codebtn.innerHTML="获取验证码";
                                codebtn.id="reds"
                            }else{
                                i--;
                                codebtn.innerHTML=i+"秒后重新获得";  
                            }
                        },1000)	
                    }
                }else{
                    codebtn.id="";
                } 
            }else if(inputs[0].value==""){
                // tips.style.display="none"   
            } else{
                codebtn.id="";
                tipstext.innerHTML="请输入正确的手机号"
                fn22();  
            }
        }
        var saves=document.querySelector(".save-btn");
        saves.onclick=function(){
            if(inputs[0].value==""){
                tipstext.innerHTML="请输入手机号"
                fn22();     
            }else{
                if(inputs[1].value==""){
                    console.log(1)
                    tipstext.innerHTML="请输入验证码"
                    fn22();  
                }else{
                    console.log(2)
                    window.location.href="my.html";
                }
            } 
        }
       
        
    }
}