window.onload=function(){
    var a=true;
    $(".van-switch").click(()=>{
        if(a==true){
           $(".van-switch")[0].style.background="red";
           $(".van-switch_node")[0].className="van-switch_node move";
           $(".van-switch_node")[0].classList.remove("moveback");
            $("input")[0].setAttribute("type","text")
            }else{
                $(".van-switch")[0].style.background="white";
                $(".van-switch_node")[0].className="van-switch_node moveback"
                $(".van-switch_node")[0].classList.remove("move");
                $("input")[0].setAttribute("type","password")
            }
            a=!a;
    })
    //有问题
    $(".save-btn").click(()=>{
        let uid=JSON.parse(localStorage.getItem('message'));
        console.log(uid[0])
        console.log($(".passwords")[0].value)
        axios({
            method:"POST",
            url:"http://vueshop.glbuys.com/api/home/user/modpwd?token=386777c139fd9e2ac5",
            data:"uid:"+492295053+"&"+"pwd:"+123123
        }).then((res)=>{
            console.log(res.data)
        })
    })
    console.log($(".back")[0])
    // 有问题
    $(".back").click(()=>{
       window.location.href="my.html"
    })
}