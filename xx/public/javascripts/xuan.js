window.onload=function(){
    hu();
    function hu(){
        var searchtext=document.querySelector(".search-text");
        searchtext.innerHTML=window.localStorage.getItem("cc");
        var back=document.querySelector(".back");
        //返回
        back.onclick=function(){
            window.location.href="shop.html";
        }
        

        // 商品列表渲染
        var goodsmain=document.querySelector(".goods-main");
        var ax=new XMLHttpRequest();
        ax.open("get","http://vueshop.glbuys.com/api/home/goods/search?kwords="+window.localStorage.getItem("cc")+"&otype=all&token=1ec949a15fb709370f")
        ax.send();
        ax.onreadystatechange=function(){
            if(this.readyState==4){
                var aa=JSON.parse(ax.response)
                
                console.log(aa.data)
                for(var i=0;i <aa.data.length;i++){
                    goodsmain.innerHTML+=
                    `
            <div class="goods-list">
                <div class="image"><img src="${aa.data[i].image}" alt=""></div>
                <div class="goods-content">
                    <div class="goods-title">
                    ${aa.data[i].title}
                    </div>
                    <div class="price">
                        ￥<span class="oprice">${aa.data[i].price}</span>
                    </div>
                    <div class="sales">
                        销量<span class="osales">${aa.data[i].sales}</span>次
                    </div>

                </div>
            </div>
                    `
                }
                var goodslist=document.querySelectorAll(".goods-list");//获取所有商品信息
                var prices=document.querySelectorAll(".oprice");//获取商品价格
                var ordersum=document.querySelector(".order-sum");//获取综合按键
                var ordericon=document.querySelector(".order-icon");//获取综合小图标
                var ordermenu=document.querySelector(".order-menu");//获取综合下啦列表
                var lis=ordermenu.querySelectorAll("li");//获取下啦列表的子项
                var orderitem=document.querySelectorAll(".order-item")[1];//获取销量按钮
                var osales=document.querySelectorAll(".osales");
               for(var j=0;j<goodslist.length;j++){
                   goodslist[j].index=j;
                   goodslist[j].onclick=function(){
                    //    console.log(aa.data[this.index])
                       window.localStorage.setItem("aa",aa.data[this.index].gid)
                       window.location.href="shopping.html"
                   }
               }
                //  出现下啦列表
                var ss=true;
                ordersum.onclick=function(){
                    if(ss==true){
                        ordermenu.style.display="block";
                        this.className="order-sum active"
                    }else{
                        ordermenu.style.display="none";
                        this.className="order-sum "
                    }
                    ss=!ss;
                }
                //下啦列表点击事件
                
                //  点击综合
                 lis[0].onclick=function(){
                    for(var j=0;j<lis.length;j++){
                        lis[j].className=""
                    }
                    lis[0].className="active"
                    ss=true;
                    ordermenu.style.display="none"
                    ordersum.className="order-sum"
                    goodsmain.innerHTML=""
                    for(var i=0;i <aa.data.length;i++){
                        goodsmain.innerHTML+=
                        `
                <div class="goods-list">
                    <div class="image"><img src="${aa.data[i].image}" alt=""></div>
                    <div class="goods-content">
                        <div class="goods-title">
                        ${aa.data[i].title}
                        </div>
                        <div class="price">
                        ￥<span class="oprice">${aa.data[i].price}</span>
                        </div>
                        <div class="sales">
                            销量<span class="osales">${aa.data[i].sales}</span>次
                        </div>
    
                    </div>
                </div>
                        `
                    }
                 }
                 //点击销量
                 var hh=true;
                 orderitem.onclick=function(){
                    if(hh==true){
                        goodsmain.innerHTML=""
                        this.className="order-item active"
                        var axs=new XMLHttpRequest();
                        axs.open("get","http://vueshop.glbuys.com/api/home/goods/search?kwords="+window.localStorage.getItem("cc")+"&otype=sales&token=1ec949a15fb709370f")
                        axs.send();
                        axs.onreadystatechange=function(){
                            if(this.readyState==4){
                                var cc=JSON.parse(axs.response)
                                console.log(cc)
                                for(var i=0;i<cc.data.length;i++){
                                    goodsmain.innerHTML+=
                            `
                            
                    <div class="goods-list">
                        <div class="image"><img src="${cc.data[i].image}" alt=""></div>
                        <div class="goods-content">
                            <div class="goods-title">
                            ${cc.data[i].title}
                            </div>
                            <div class="price">
                            ￥<span class="oprice">${cc.data[i].price}</span>
                            </div>
                            <div class="sales">
                                销量<span class="osales">${cc.data[i].sales}</span>次
                            </div>
        
                        </div>
                    </div>
                            `
                                }
                            }
                        }
                    }else{
                        this.className="order-item "
                        goodsmain.innerHTML="";
                        for(var i=0;i <aa.data.length;i++){
                            goodsmain.innerHTML+=
                            `
                    <div class="goods-list">
                        <div class="image"><img src="${aa.data[i].image}" alt=""></div>
                        <div class="goods-content">
                            <div class="goods-title">
                            ${aa.data[i].title}
                            </div>
                            <div class="price">
                            ￥<span class="oprice">${aa.data[i].price}</span>
                            </div>
                            <div class="sales">
                                销量<span class="osales">${aa.data[i].sales}</span>次
                            </div>
        
                        </div>
                    </div>
                            `
                        }
                    }
                    hh=!hh
                }
                 //排序
                 //降序
                 lis[1].onclick=function(){
                    goodsmain.innerHTML="";
                     //选项卡
                    for(var j=0;j<lis.length;j++){
                        lis[j].className=""
                    }
                    this.className="active"
                    ordermenu.style.display="none"
                    ss=true;
                    //选项卡结束
                     var arr=[];
                     for(var k=0;k<prices.length;k++){
                         prices[k].setAttribute("index",k);
                         arr.push(parseFloat(prices[k].innerHTML))
                         
                     }
                     for(var i = 0; i < arr.length-1; i++){
                        for(var j = 0; j < arr.length - (i+1); j++){
                            if(arr[j] > arr[j+1]){
                               var c = arr[j];
                               arr[j] = arr[j+1];
                                arr[j+1] = c;
                            }	
                        }     
                    }
                    for(var i=0;i<arr.length;i++){
                        for(var j=0;j<arr.length;j++){
                            if(arr[i]==prices[j].innerHTML){
                                var bb=prices[j].getAttribute("index")
                 goodsmain.innerHTML+=
                    `
            <div class="goods-list">
                <div class="image"><img src="${aa.data[bb].image}" alt=""></div>
                <div class="goods-content">
                    <div class="goods-title">
                    ${aa.data[bb].title}
                    </div>
                    <div class="price">
                    ￥ <span class="oprice">${aa.data[bb].price}</span>
                    </div>
                    <div class="sales">
                        销量<span class="osales">${aa.data[bb].sales}</span>次
                    </div>

                </div>
            </div>
                    `
                            }
                        }
                    }
                 }
                 //升序
                 lis[2].onclick=function(){
                    goodsmain.innerHTML="";
                     //选项卡
                    for(var j=0;j<lis.length;j++){
                        lis[j].className=""
                    }
                    this.className="active"
                    ordermenu.style.display="none"
                    ss=true;
                    //选项卡结束
                     
                     var arr=[];
                     var sf;
                     for(var k=0;k<prices.length;k++){
                         prices[k].setAttribute("index",k);
                         arr.push(parseFloat(prices[k].innerHTML))
                         
                     }
                     console.log(prices)
                     console.log(arr)
                     console.log(arr.length)
                     for(var i = 0; i < arr.length-1; i++){
                        for(var j = 0; j < arr.length - (i+1); j++){
                            if(arr[j] < arr[j+1]){
                               var c = arr[j];
                               arr[j] = arr[j+1];
                                arr[j+1] = c;
                            }	
                        }     
                    }
                    console.log(arr)
                    for(var i=0;i<arr.length;i++){
                        for(var j=0;j<arr.length;j++){
                            if(arr[i]==prices[j].innerHTML){
                                var bb=prices[j].getAttribute("index")
                 goodsmain.innerHTML+=
                    `
            <div class="goods-list">
                <div class="image"><img src="${aa.data[bb].image}" alt=""></div>
                <div class="goods-content">
                    <div class="goods-title">
                    ${aa.data[bb].title}
                    </div>
                    <div class="price">
                        <span class="oprice">${aa.data[bb].price}</span>
                    </div>
                    <div class="sales">
                        销量<span>${aa.data[bb].sales}</span>次
                    </div>

                </div>
            </div>
                    `
                            }
                        }
                    }
                 }
                //排序结束
            }//4
        } 
         // 商品列表渲染结束
        
    }
    //右侧筛选
    ke();
    function ke(){
        var screens=document.querySelector(".screen");
        var mask=document.querySelector(".mask");
        var screenbtn=document.querySelector(".screen-btn");
        var itemwrap=document.querySelector(".item-wrap");
        // var itemwraps=document.querySelectorAll(".item-wrap");
        var attrname=document.querySelectorAll(".attr-name")
        console.log(attrname)
      
        //渲染分类
        var sx=new XMLHttpRequest(); 
        sx.open("get","http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f")
        sx.send();
        sx.onreadystatechange=function(){
            if(this.readyState==4){
                var aa=JSON.parse(sx.response);
                console.log(aa.data)
                for(var i=0;i<aa.data.length;i++){
                    itemwrap.innerHTML+=
                `
                <div class="item">${aa.data[i].title}</div>
                `
                }
                //渲染品牌
        var ax=new XMLHttpRequest(); 
        console.log(window.localStorage.getItem("cc"))
        ax.open("get","http://vueshop.glbuys.com/api/home/goods/param?kwords="+window.localStorage.getItem("cc")+"&token=1ec949a15fb709370f")
        ax.send();
        ax.onreadystatechange=function(){
            if(this.readyState==4){
                var aa=JSON.parse(ax.response);
                console.log(aa.data)
                if(aa.data=="没有数据"){
                    screens.innerHTML+=""
                }else{
                    for(var i=0;i<aa.data.length;i++){
                        screens.innerHTML+=
                        `
                    <div class="attr-wrap">
                         <div class="attr-title-wrap">
                         <div class="attr-name">${aa.data[i].title}</div>
                         <div class="attr-icon"></div>
                    </div>
                    <div class="item-wrap">
                    
                    </div>
                    </div>
                        
                        `
                    var itemwraps=document.querySelectorAll(".item-wrap")
                    for(var j=0;j<aa.data[i].param.length;j++){
                        itemwraps[i+2].innerHTML+=
                        `
                        <div class="item">${aa.data[i].param[j].title}</div>
                        `
                    }
                    }
                     //分类点击
                    var attrwraps=document.querySelectorAll(".attr-wrap")
                    // 点击
                    for(var i=0;i<attrwraps.length;i++){
                        var items=attrwraps[i].querySelectorAll(".item");
                        ji(items)
                    }
                   //封装点击
                    function ji(items){
                        for(var i=0;i<items.length;i++){
                            items[i].onclick=function(){
                                   for(var j=0;j<items.length;j++){
                                    items[j].id=""  
                                }
                                this.id="focus"
                                this.onclick=function(){
                                    this.id=""
                                    ji(items)
                                }
                                
                                
                                
                            }
                        }
    
                    }
                    //分类点击结束   

                }
                
                //滚动
    // let tag = document.querySelector('.screens');
    // console.log(tag)
    //     let bs = BetterScroll.createBScroll(tag,{
    //         pullDownRefresh: {
    //             threshold: 30,
    //         },
    //         pullUpLoad: {
    //             threshold: -30,
    //         },
    //             click:true,
    //         });
        //     //滚动 
                
            }
        }
         //渲染品牌结束
            
            }
        }
        

        screenbtn.onclick=function(){
            mask.style.display="block"
            screens.className="screen move"
        }
        mask.onclick=function(){
            mask.style.display="none"
            screens.className="screen leaves"
        }



    }
}