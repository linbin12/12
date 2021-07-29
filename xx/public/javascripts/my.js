window.onload=function(){
    fal();
    function fal(){
        var personal=document.querySelector(".personal");
        var lis=personal.querySelectorAll("li");
        var order=document.querySelector(".order");
        //获取查看全部订单按钮
        var orderli=order.querySelectorAll("li")[1];
        orderli.onclick=function(){
        let list = JSON.parse(localStorage.getItem('message')) 
        if(list.length==0){
        window.location.href="denglu.html"
        }else{
            window.localStorage.setItem("menuli","0");
            window.location.href="dingdan.html"
        } 
            
        }
        //订单副按钮
        var menu=document.querySelector(".menu");
        var menuli=menu.querySelectorAll("li");
        for(let i=0;i<menuli.length;i++){
            menuli[i].index=i;
            menuli[i].onclick=function(){
        let list = JSON.parse(localStorage.getItem('message')) 
        if(list.length==0){
        window.location.href="denglu.html"
        }else{
            i=i+1
            window.localStorage.setItem("menuli",i);
            window.location.href="dingdan.html"
        } 


               
            }
        }
        //个人信息
        lis[0].onclick=function(){
        let list = JSON.parse(localStorage.getItem('message')) 
        if(list.length==0){
        window.location.href="denglu.html"
        }else{
        window.location.href="geren.html";
        }   
        }
        //地址
        lis[1].onclick=function(){
        let list = JSON.parse(localStorage.getItem('message')) 
        if(list.length==0){
        window.location.href="denglu.html"
        }else{
        window.location.href="address.html";
        }   
           
        }
        //绑定手机
        lis[2].onclick=function(){
            let list = JSON.parse(localStorage.getItem('message')) 
        if(list.length==0){
        window.location.href="denglu.html"
        }else{
            window.location.href="bangdingshouji.html";
        } 
           
        }
        //修改密码
        lis[3].onclick=function(){
            let list = JSON.parse(localStorage.getItem('message')) 
        if(list.length==0){
        window.location.href="denglu.html"
        }else{
            window.location.href="xiugaimima.html";
        } 
           
        }
        //我的收藏
        lis[4].onclick=function(){
            let list = JSON.parse(localStorage.getItem('message')) 
        if(list.length==0){
        window.location.href="denglu.html"
        }else{
            window.location.href="shoucang.html";
        } 
           
        }
        
        //个人信息
        fnsd();
        function fnsd(){
        let list = JSON.parse(localStorage.getItem('message')) 
        console.log(list)
        if(list.length==0){
            $(".name img")[0].src="./images/user/my/default-head.png";
            $(".name li")[0].innerHTML="昵称："
            $(".name li")[1].innerHTML="我的积分：0"
            $(".sign a")[0].innerHTML="登录/注册"
            $(".sign").click(()=>{
                location.href="denglu.html"
            })
        }else{
            $(".sign a")[0].innerHTML="安全退出"
            axios({
                method:"get",
                url:"http://vueshop.glbuys.com/api/user/myinfo/userinfo/uid/"+list[0]+"?token=1ec949a15fb709370f"
            }).then((res)=>{
                console.log(res.data.data)
                if(res.data.data.head==""){
                    $(".name img")[0].src="./images/user/my/default-head.png";
                }else{
                    $(".name img")[0].src=res.data.data.head;
                }
                $(".name li")[0].innerHTML="昵称："+res.data.data.nickname
                $(".name li")[1].innerHTML="我的积分："+res.data.data.points
            })
            $(".sign").click(()=>{
                $(".van-overlay")[0].style.display="block"
                // 确定
                $(".clearmess-right").click(()=>{
                    $(".van-overlay")[0].style.display="none"
                    var arr=[]
                    localStorage.setItem("message",JSON.stringify(arr))
                    fnsd();
                })
                $(".clearmess-left").click(()=>{
                    $(".van-overlay")[0].style.display="none"
                    fnsd();
                })

            })
        }
    }
        

    }
    
}