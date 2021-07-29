window.onload=function(){
    var van=document.querySelector(".van-switch");
    var node=document.querySelector(".van-switch_node");
   var inputs=document.querySelectorAll("input");
   var sure=document.querySelector(".sure-btn");
   var oback=document.querySelector(".back");
   var a=true;
     oback.onclick=function(){
        window.history.go(-1);
     }
    van.onclick=function(){
        if(a==true){
        van.style.background="red";
        node.className="van-switch_node move";
        node.classList.remove("moveback");
        inputs[1].setAttribute("type","text")
        }else{
            van.style.background="white";
            node.className="van-switch_node moveback"
            node.classList.remove("move");
            inputs[1].setAttribute("type","password")
        }
        a=!a;
    }
    sure.onclick=function(){
        if($(".code-wrap input")[0].value==""){
            $(".van-toast")[0].innerHTML="请输入手机号"
           $(".van-toast")[0].style.display="block";
           timer = setTimeout(() => {
            $(".van-toast")[0].style.display="none";
          }, 2000);
        }else if($(".password input")[0].value==""){
            $(".van-toast")[0].innerHTML="请输入密码"
            $(".van-toast")[0].style.display="block";
            timer = setTimeout(() => {
             $(".van-toast")[0].style.display="none";
           }, 2000);
        }else{
           $.ajax({
               type:"POST",
               dataType:"json",
               url:"http://vueshop.glbuys.com/api/home/user/pwdlogin?token=1ec949a15fb709370f",
               data:{
                   "cellphone":$(".code-wrap input").val(),
                   "password":$(".password input").val(),
               },
               success:function(data){
                  if(data.code==302){
                    $(".van-toast")[0].innerHTML="请输入正确手机号"
                    $(".van-toast")[0].style.display="block";
                    timer = setTimeout(() => {
                     $(".van-toast")[0].style.display="none";
                   }, 2000);
                  }else if(data.data=="您输入的用户名不存在"){
                    $(".van-toast")[0].innerHTML="用户名不存在"
                    $(".van-toast")[0].style.display="block";
                    timer = setTimeout(() => {
                     $(".van-toast")[0].style.display="none";
                   }, 2000);
                  }else if(data.data=="您输入的用户名或密码不正确"){
                    $(".van-toast")[0].innerHTML="用户名或密码不正确"
                    $(".van-toast")[0].style.display="block";
                    timer = setTimeout(() => {
                     $(".van-toast")[0].style.display="none";
                   }, 2000);
                  }else{
                      let arr=[];
                      console.log(data)
                      arr.push(data.data.uid);
                      arr.push(data.data.nickname);
                      arr.push(data.data.auth_token);
                      console.log(arr)
                      localStorage.setItem("message",JSON.stringify(arr))
                      location.href="my.html"
                  }
               }
           })
        }
    }

}