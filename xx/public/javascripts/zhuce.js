window.onload = function () {
  a();
  function a() {
    var inputs = document.querySelectorAll("input");
    var osure = document.querySelector(".sure-btn");
    var otip = document.querySelector(".tip");
    var btns = document.querySelector(".code-btn");
    var van = document.querySelector(".van-switch");
    var node = document.querySelector(".van-switch_node");
    var load = document.querySelector(".load");
    var vcodeimg = document.querySelector(".vcode-img");
    var oimg = vcodeimg.querySelector("img");
    var oback = document.querySelector(".back");
    oback.onclick = function () {
      window.history.go(-1);
    };
    //验证码点击
    vcodeimg.onclick = function () {
      var oajax = new XMLHttpRequest();

      oajax.open(
        "get",
        "http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f",
        true
      );
      oajax.send();
      oajax.onreadystatechange = function () {
        switch (oajax.readyState) {
          case 4:
            if (oajax.status == 200) {
              oimg.setAttribute(
                "src",
                "http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f"
              );
            }
            break;
        }
      };
    };
    console.log(van);
    var a = true;
    van.onclick = function () {
      if (a == true) {
        van.style.background = "red";
        node.className = "van-switch_node move";
        node.classList.remove("moveback");
        inputs[3].setAttribute("type", "text");
      } else {
        van.style.background = "white";
        node.className = "van-switch_node moveback";
        node.classList.remove("move");
        inputs[3].setAttribute("type", "password");
      }
      a = !a;
    };
    //提示
    var timer;
    function fn2() {
      otip.className = "tip alr";
      timer = setTimeout(() => {
        otip.classList.remove("alr");
      }, 2000);
    }
    inputs[1].onkeyup = function () {
      if (inputs[1].value[0] == 1) {
        if (inputs[1].value.length == 11) {
          btns.style.background = "white";
          btns.style.color = "#eb1625";
          btns.style.border = "1px solid #eb1625";
        } else {
          btns.style.background = "#eaeaea";
          btns.style.color = "#717376";
          btns.style.border = " 1px solid #eaeaea";
        }
      } else {
        fn2();
        otip.innerHTML = "手机号必须是1开头";
      }
      btns.onclick = function () {
        btns.style.background = "#eaeaea";
        btns.style.color = "#717376";
        btns.style.border = " 1px solid #eaeaea";
        var times;
        var i = 10;
        times = setInterval(function () {
          if (i == 0) {
            clearInterval(times);
            i = 10;
            btns.innerHTML = "获取验证码";
            btns.style.background = "white";
            btns.style.color = "#eb1625";
            btns.style.border = "1px solid #eb1625";
          } else {
            i--;
            btns.innerHTML = i + "秒后重新获得";
          }
        }, 1000);
      };
    };
    // osure.onclick=function(){
    //     load.style.display="block"
    //     var otime;
    //     clearTimeout(otime);
    //     otime=setTimeout(() => {
    //         load.style.display="none"
    //     }, 200);

    //    if(inputs[0].value==""){
    //        fn2();
    //    }else if(inputs[0].value.length<4){
    //        otip.innerHTML="输入的验证码不正确";
    //        fn2();
    //    }else if(inputs[1].value==""){
    //        otip.innerHTML="输入手机号";
    //        fn2();
    //    }else if(inputs[1].value.length<11||inputs[1].value.length>11){
    //        otip.innerHTML="输入正确的手机号";
    //        fn2();
    //     }else if(inputs[2].value==""){
    //         otip.innerHTML="输入验证码";
    //         fn2();
    //     }else if(inputs[2].value.length<4){
    //         otip.innerHTML="输入正确验证码";
    //         fn2();
    //     }else if(inputs[3].value==""){
    //         otip.innerHTML="输入密码";
    //         fn2();
    //     }else if(inputs[3].value.length>=6&&inputs[3].value.length<=16){
    //         otip.innerHTML="密码必须大于6位或小于16位";
    //         fn2();
    //     }
    // }
    $(".sure-btn")[0].onclick = function () {
        axios({
          method: "post",
          url: "http://vueshop.glbuys.com/api/home/user/reg?token=1ec949a15fb709370f",
          data:
            "cellphone=" +
            $(".cellphone input")[0].value +
            "&" +
            "password=" +
            $(".password input")[0].value,
        }).then((res) => {
            console.log(res.data)
            if(res.data.data=="此手机号已存在！"){
                otip.innerHTML="此手机号已存在！";
                fn2();  
                }else{
         load.style.display="block"
        var otime;
        clearTimeout(otime);
        otime=setTimeout(() => {
            load.style.display="none"
        }, 200);

       if(inputs[0].value==""){
           fn2();
       }else if(inputs[0].value.length<4){
           otip.innerHTML="输入的验证码不正确";
           fn2();
       }else if(inputs[1].value==""){
           otip.innerHTML="输入手机号";
           fn2();
       }else if(inputs[1].value.length<11||inputs[1].value.length>11){
           otip.innerHTML="输入正确的手机号";
           fn2();
        }else if(inputs[2].value==""){
            otip.innerHTML="输入验证码";
            fn2();
        }else if(inputs[2].value.length<4){
            otip.innerHTML="输入正确验证码";
            fn2();
        }else if(inputs[3].value==""){
            otip.innerHTML="输入密码";
            fn2();
        }else if(inputs[3].value.length<6||inputs[3].value.length>16){
            otip.innerHTML="密码必须大于6位或小于16位";
            fn2();
        }else{
            window.location.href="denglu.html"
        }
                }
        });
      };
  }
};
