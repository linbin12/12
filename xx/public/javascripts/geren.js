window.onload=function(){
    sh();
    function sh(){
    var uls=document.querySelectorAll(".list");
    var choose=document.querySelector(".choose");
    var overlay=document.querySelector(".van-overlay")
    var is=choose.querySelector("i")
    var divs=choose.querySelectorAll("div");
    var inputs=document.querySelectorAll("input");
    var rightbtn=document.querySelector(".right-btn");
    // console.log(inputs)
    //保存
    rightbtn.onclick=function(){
        // window.location.href="my.html"
        let list = JSON.parse(localStorage.getItem('message')) 
        console.log(list)
        // $.ajax({
        //     type:"POST",
        //     dataType:"json",
        //     url:"http://vueshop.glbuys.com/api/user/myinfo/updateuser?token=1ec949a15fb709370f",
        //     data:{
        //         uid:114487517,
        //         nickname:"超级bug",
        //         gender:1,
        //     },
        //     success:function(data){
        //         console.log(data)
        //     }
        // })
        var sex;
        if( $(".sex")[0].value=="男"){
            sex=1
        }else{
            sex=2
        }
        axios({
            method:"post",
            url:"http://vueshop.glbuys.com/api/user/myinfo/updateuser?token=1ec949a15fb709370f",
            data:"uid="+list[0]+"&"+"nickname="+$(".names")[0].value+"&"+"gender="+sex
        }).then((res)=>{
            console.log(res.data)
        })
    }
    uls[1].onclick=function(){ 
        choose.className="choose up"
        overlay.style.display="block"
    }
    overlay.onclick=function(){
        choose.className="choose down"
        overlay.style.display="none"
    }
    is.onclick=function(){
        choose.className="choose down"
        overlay.style.display="none"
    }
    divs[1].onclick=function(){
        inputs[1].value="男";
        choose.className="choose down"
        overlay.style.display="none"
    }
    divs[2].onclick=function(){
        inputs[1].value="女";
        choose.className="choose down"
        overlay.style.display="none"
    }
    divs[3].onclick=function(){
        choose.className="choose down"
        overlay.style.display="none"
    }
    
   console.log($(".head li")[1].children[0])
   let list = JSON.parse(localStorage.getItem('message')) 
   axios({
    method:"get",
    url:"http://vueshop.glbuys.com/api/user/myinfo/userinfo/uid/"+list[0]+"?token=1ec949a15fb709370f"
}).then((res)=>{
    console.log(res.data.data)
    if(res.data.data.head==""){
        $(".head li")[1].children[0].src="./images/user/my/default-head.png"
    }else{
        $(".head li")[1].children[0].src=res.data.data.head
    }
    if(res.data.data.gender==1){
        $(".sex")[0].value="男"
    }else{
        $(".sex")[0].value="女"
    }
    $(".names")[0].value=res.data.data.nickname
})
  
  }

}