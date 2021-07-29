window.onload=function(){
    let list = JSON.parse(localStorage.getItem('recent')) 
    console.log(list)
    var sum=window.localStorage.getItem("sum")
    var freight=Number(window.localStorage.getItem("freight"))
    sum=Number(sum).toFixed(2)
    var shopping=JSON.parse(localStorage.getItem('shopping')) 
    console.log(shopping)
    var kk=JSON.parse(localStorage.getItem('nums')) 
    
    
    hgt();
    function hgt(){
        var subheader=document.querySelector(".sub-header");
        var back=subheader.querySelector(".back");
        var arrow=document.querySelector(".arrow");
        //提交订单
        var balancebtn=document.querySelector(".balance-btn");
        balancebtn.onclick=function(){
            window.location.href="xiadan.html"
        }

        arrow.onclick=function(){
            window.location.href="querendizhi.html"
        }
        console.log(back)
        back.onclick=function(){
            window.location.href="shopcar.html"
        }
        for(let i =0;i<shopping.length;i++){
            fksd(shopping[i],i,kk);
        }
        function fksd([color,size,num,gid],i,kk){
            var ax=new XMLHttpRequest();
            ax.open("get","http://vueshop.glbuys.com/api/home/goods/info?gid="+gid+"&type=details&token=1ec949a15fb709370f")
            ax.send();
            ax.onreadystatechange=function(){
                if(this.readyState==4){
                    var cc=JSON.parse(ax.response);
                    console.log(cc)
                    var goodswrap=document.querySelector(".goods-wrap");
                    goodswrap.innerHTML+=
                    `
                    <div class="goods-list">
                    <div class="image">
                        <img src="${cc.data.images[0]}" alt="">
                    </div>
                    <div class="goods-param">
                        <div class="title">
                            ${cc.data.title}
                        </div>
                        <div class="attr">
                            <span>:</span>
                            <span>${size}</span>
                        </div>
                        <div class="amount">
                            X ${kk[i]}
                        </div>
                        <div class="price">
                            ￥${cc.data.price}
                        </div>
                    </div>

                </div>

                    `
                    var totalwrap=document.querySelectorAll(".total-wrap");
                    var sumli=totalwrap[0].querySelectorAll("li");//获取商品总额
                    var yunli=totalwrap[1].querySelectorAll("li");//获取运费总额
                    var pricewrap=document.querySelector(".price-wrap");
                    var tisum=pricewrap.querySelectorAll("span")//提交总额
                    sumli[1].innerHTML=
                    `
                    ￥${sum}
                    `
                    yunli[1].innerHTML=
                    `
                    ￥${freight}
                    `
                    tisum[1].innerHTML=
                    `
                    ￥${parseFloat(sum)+freight}
                    `
                    
                    window.localStorage.setItem("allsum",JSON.stringify(parseFloat(sum)+freight))
                }
            }
         }
    }
}