window.onload=function(){
    fj();
    function fj(){
        var back=document.querySelector(".back");
        //返回
        back.onclick=function(){
            window.location.href="queren.html"
        }
        //查看订单
        var list=document.querySelectorAll(".list");
        console.log(list)
        list[2].onclick=function(){
            window.location.href="dingdan.html";
            window.localStorage.setItem("menuli","0");   
        }
        //付款
        var paybtn=document.querySelector(".pay-btn");
        paybtn.onclick=function(){
            window.location.href="dingdan.html";
            window.localStorage.setItem("menuli","1");   
        }
        //订单编号
        var ordernum=document.querySelector(".ordernum");
        //随机10位
        var d=""
        for(var i=0;i <10;i++){
            var  c=parseInt(Math.random()*10)
            c=String(c);
            d+=c;
        }
        ordernum.innerHTML="订单编号："+d
         
        var newlist;
        if ("订单编号" in localStorage) {
            newlist=JSON.parse(localStorage.getItem('订单编号'));
        } else {
             newlist=[];  
        }
        console.log(newlist)
        newlist.push(d)
        localStorage.setItem('订单编号', JSON.stringify(newlist))
    }
}