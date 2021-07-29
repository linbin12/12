
window.onload=function(){
    ofn1();
    function ofn1(){
        var head=document.querySelector(".details-header");
        var lis=head.querySelectorAll("li");
        var pages=document.querySelectorAll(".page")
        var shopcar=head.querySelector("span");
        var back=head.querySelector(".back");
        back.onclick=function(){
            window.history.back(-1);
        }
        shopcar.onclick=function(){
            window.location.href="shopcar.html";
        }
        for(var i = 0 ; i < lis.length;i++){
            lis[i].index=i;
            lis[i].onclick=function(){
                for(var j = 0; j < lis.length;j++){
                    lis[j].className="";
                    pages[j].style.display="none";
                }
                this.className="active";
                pages[this.index].style.display="block"
            }
        }
        //收藏
        console.log($(".fav")[0])
       $(".fav")[0].onclick=function(){
        var fav;
        if ("fav" in localStorage) {
            fav=JSON.parse(localStorage.getItem('fav')) ;
        } else {
            fav=[];
        }
        var id=window.localStorage.getItem("aa");
        // for(let i =0;i<fav.length;i++){
           
        // }
        fav.push(id)
        
        // window.localStorage.setItem("fav",JSON.stringify(fav))
        // console.log(typeof(fav[0]))
        // console.log(typeof(id))
        // console.log(fav[0]==id)
        var brr=[]
        for(let i=0;i<fav.length;i++){
            if(brr.indexOf(fav[i])==-1){
                brr.push(fav[i]);
                $(".can-toast__text")[0].innerHTML="收藏成功"
                $(".van-toast")[0].style.display="block"
                timer=setTimeout(function(){
                    $(".van-toast")[0].style.display="none"
                },1500);
            }else{
                $(".can-toast__text")[0].innerHTML="已收藏过"
                $(".van-toast")[0].style.display="block"
                timer=setTimeout(function(){
                    $(".van-toast")[0].style.display="none"
                },1500);
            }
        }
        console.log(brr)
        fav=brr
        window.localStorage.setItem("fav",JSON.stringify(fav))
       }

    }
    //购买 
    fm();
    function fm(){
        var omask=document.querySelector(".mask");
        var oclose=document.querySelector(".close");
        var btn=document.querySelector(".sure-btn");
        var cart=document.querySelector(".cart");
        var fav=document.querySelector(".fav");
        var panel=document.querySelector(".cart-panel")
        //商品详细信息
        var pages=document.querySelectorAll(".page")
        console.log(window.localStorage.getItem("aa"))
        var jy=new XMLHttpRequest();
        jy.open("get","http://vueshop.glbuys.com/api/home/goods/info?gid="+window.localStorage.getItem("aa")+"&type=details&token=1ec949a15fb709370f")
        jy.send();
        jy.onreadystatechange=function(){
            if(this.readyState==4){
                var dd=JSON.parse(jy.response)
                // console.log(dd.data.bodys)
                pages[1].innerHTML=
            `
            <div class="mains">
            ${dd.data.bodys}
            </div>
            `
            }
            
        }

        //渲染
        var ohrb=new XMLHttpRequest();
        ohrb.open("get","http://vueshop.glbuys.com/api/home/goods/info?gid="+window.localStorage.getItem("aa")+"&type=spec&token=1ec949a15fb709370f")
        ohrb.send();
        ohrb.onreadystatechange=function(){
            if(this.readyState==4){
                var ores=JSON.parse(ohrb.response)
                var vttrname=document.querySelectorAll(".attr-name");
                var valwrap=document.querySelectorAll(".val-wrap");
                for(var i=0;i<ores.data.length;i++){
                    vttrname[i].innerHTML=
                `
                ${ores.data[i].title}
              
                `
                aa=i;
                console.log(aa)
                for(var j=0;j<ores.data[i].values.length;j++){
                   
                    valwrap[aa].innerHTML+=
                    `
                    <span class="val">${ores.data[aa].values[j].value}</span>
             
                    `  
                     
                } 
                }
                
        var valwrap=document.querySelectorAll(".val-wrap");
        var valcolor=valwrap[0].querySelectorAll(".val");
        console.log(valcolor)
        var valsize=valwrap[1].querySelectorAll(".val");
         //类型
        for(let i =0 ;i < valcolor.length;i++){
            valcolor[i].onclick=function(){
                for(var j=0;j<valcolor.length;j++){
                    valcolor[j].className="val";
                }
                this.className="val active"
                // window.localStorage.setItem("color",this.innerHTML)
            }
        }
        for(var i=0;i<valsize.length;i++){
            valsize[i].onclick=function(){
                for(var j=0;j<valsize.length;j++){
                    valsize[j].className="val";
                }
                this.className="val active"
                // window.localStorage.setItem("size",this.innerHTML)
            }
        }
        //提示
        var otip=document.querySelector(".tips");
        var tips=otip.querySelector(".tips-text")
        console.log(otip)
        console.log(tips)
        var timer;
        function fn2(){
        otip.className="tips alr";
        timer=setTimeout(() => {
            otip.classList.remove("alr"); 
        }, 2000);
        }
        var surebtn=document.querySelector(".sure-btn");
             
            // let newlist =[];//有问题
            
            $('.sure-btn').click(() => {
                console.log($('#val-wrap2 .val'))
                if(!$('#val-wrap1 .val').hasClass('active')){
                    tips.innerHTML="请选择颜色"
                    fn2();
                }else if(!$('#val-wrap2 .val').hasClass('active')){
                    if($('#val-wrap2 .val').length==0){
                        fk();
                    }else{
                      tips.innerHTML="请选择尺寸"
                      fn2();
                    }
                    
                }else{
                    fk();
                //     function fk(){
                //     window.localStorage.setItem("color",$("#val-wrap1 .active").html())
                //     window.localStorage.setItem("size",$("#val-wrap2 .active").html())
                //     window.localStorage.setItem("num",$(".amount-input input").val())
                //     // console.log($("#val-wrap1 .active").html())//获取颜色
                //     // console.log($("#val-wrap2 .active").html())//获取大小
                //     // console.log($(".amount-input input").val())//获取值
                //     // window.localStorage.setItem("shop",window.localStorage.getItem("aa"))
                //     console.log(window.localStorage.getItem("shop"))
                //     tips.innerHTML="加入购物车成功"
                //     fn2();
                    
                //     var newlist
                //     if ("recent" in localStorage) {
                //         newlist=JSON.parse(localStorage.getItem('recent')) ;
                //     } else {
                //         newlist=[];
                //     }
                //     let arr=[];
                //     arr.push($("#val-wrap1 .active").html());
                //     if($("#val-wrap2 .active").html()==""){
                //         arr.push("");
                //     }else{
                //         arr.push($("#val-wrap2 .active").html());
                //     }
                //     arr.push($(".amount-input input").val());
                //     arr.push(window.localStorage.getItem("aa"));
                //     console.log(arr)
                //     newlist.push(arr)
                //     localStorage.setItem('recent', JSON.stringify(newlist))
                //     // let list = JSON.parse(localStorage.getItem('recent')) 
                // }
                }
            })

            function fk(){
                window.localStorage.setItem("color",$("#val-wrap1 .active").html())
                window.localStorage.setItem("size",$("#val-wrap2 .active").html())
                window.localStorage.setItem("num",$(".amount-input input").val())
                // console.log($("#val-wrap1 .active").html())//获取颜色
                // console.log($("#val-wrap2 .active").html())//获取大小
                // console.log($(".amount-input input").val())//获取值
                // window.localStorage.setItem("shop",window.localStorage.getItem("aa"))
                console.log(window.localStorage.getItem("shop"))
                tips.innerHTML="加入购物车成功"
                fn2();
                //判断是否存在数据
                var newlist
                if ("recent" in localStorage) {
                    newlist=JSON.parse(localStorage.getItem('recent')) ;
                } else {
                    newlist=[];
                }
                let arr=[];
                arr.push($("#val-wrap1 .active").html());
                if($("#val-wrap2 .active").html()==""){
                    arr.push("");
                }else{
                    arr.push($("#val-wrap2 .active").html());
                }
                arr.push($(".amount-input input").val());
                arr.push(window.localStorage.getItem("aa"));
                console.log(arr)
                newlist.push(arr)
                localStorage.setItem('recent', JSON.stringify(newlist))
                // let list = JSON.parse(localStorage.getItem('recent')) 
            }
        // surebtn.onclick=function(){



            //有问题
            //   for(var l=0;l<valcolor.length;l++){
            //        if(valcolor[l].id==""){
            //         tips.innerHTML="请选择颜色"
            //        fn2();
            //        }else{
            //         for(var l=0;l<valsize.length;l++){
            //             if(valsize[l].id==""){
            //              tips.innerHTML="请选择尺寸"
            //               fn2();
            //             }else{
            //                 tips.innerHTML="加入购物车成功"
            //                 fn2();
            //                 var os=document.querySelectorAll("#active")
            //                 console.log(os)
            //             //    if(os.length==1){
            //             //        window.localStorage.setItem("color",os[0].innerHTML);
            //             //        console.log(window.localStorage.getItem("color"))
            //             //    }
            //             }
            //        }
            //        }
            //   }
              
          
        // }
        

        //数量
        var dec=document.querySelector(".dec")
        var inc=document.querySelector(".inc")
        var amountinputs=document.querySelector(".amount-input");
        var inputs=amountinputs.querySelector("input")
         console.log(inputs)
        dec.onclick=function(){
            if(inputs.value==1){
                inputs.value=1;
            }else{
                inputs.value--
            }
            
        }
        inc.onclick=function(){
           
            inputs.value++;
            
        }
        
        cart.onclick=function(){
            omask.style.display="block";
            panel.className="cart-panel up";
            for(var j=0;j<valcolor.length;j++){
                valsize[j].id="";
            }
            for(var j=0;j<valcolor.length;j++){
                valcolor[j].id="";
            }
            
        }
        oclose.onclick=function(){
            omask.style.display="none";
            panel.className="cart-panel down"
        }
        omask.onclick=function(){
            omask.style.display="none";
            panel.className="cart-panel down"
        }

            }
        }
        
        
    }

    ff();
    function ff(){
        var head=document.querySelector(".details-header");
        var opage=document.querySelectorAll(".page")
        var lis=head.querySelectorAll("li");
        var omore=document.querySelector(".reviews-more");
        omore.onclick=function(){
            opage[0].style.display="none"
            opage[1].style.display="none"
            opage[2].style.display="block";
            lis[2].className="active";
            lis[0].className="none";

        }
    

    }
    //渲染商品信息
    fk();
    function fk(){
       var goodsimg=document.querySelector(".goods-img");
       var goodswrap=document.querySelector(".goods-wrap");
       var axs=new XMLHttpRequest;
       axs.open("get","http://vueshop.glbuys.com//api/home/goods/info?gid="+window.localStorage.getItem("aa")+"&type=details&token=1ec949a15fb709370f")
       axs.send();
       axs.onreadystatechange=function(){
           if(this.readyState==4){
               var bb=JSON.parse(axs.response);
               console.log(bb);
               goodsimg.innerHTML=
               `
               <img src="${bb.data.images[0]}" alt="">
               `
               goodswrap.innerHTML=
               `
               <div class="goods-title">${bb.data.title}</div>
               <div class="price">￥${bb.data.price}</div>
               <div class="goods-code">商品编号：${bb.data.gid}</div>
               `
           }
       }
    }
    

    // //渲染轮播图
    //轮播图
  
     fh();
     function fh(){
        var swiper=document.querySelector(".swiper-wrapper");
        var bb=window.localStorage.getItem("aa");
        var goodmain=document.querySelector(".good-main");
        var xs=new XMLHttpRequest();
        xs.open("get","http://vueshop.glbuys.com//api/home/goods/info?gid="+bb+"&type=details&token=1ec949a15fb709370f")
        xs.send();
        xs.onreadystatechange=function(){
            if(this.readyState==4){
                var res=JSON.parse(xs.response);
                console.log(res.data)
                for(var i =0; i <res.data.images.length;i++){
                    swiper.innerHTML+=
                     `
                      <div class="swiper-slide"><img src="${res.data.images[i]}" alt=""></div>  
                     `
                    }
                    var mySwiper = new Swiper ('.swiper-container', {
                        loop: true, // 循环模式选项
                        autoplay:true,
                        // 如果需要分页器
                      pagination: {
                       el: '.swiper-pagination',
                      },
                   
                   }) 
                   goodmain.innerHTML=
                   `
                   <div class="goods-title">
                   ${res.data.title}
               </div>
               <div class="price">
                 ￥${res.data.price}
               </div>
               <ul class="sales-wrap">
                   <li>快递：${res.data.freight}元</li>
                   <li>月销量：${res.data.sales}件</li>
               </ul>   
                  `

                 }
                }
            }
        
           
    
}