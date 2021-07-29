window.onload=function(){
    menu();
    function menu(){
        var omenu=document.querySelector(".menu");
        var lis=omenu.querySelectorAll("li");
        var orders=document.querySelectorAll(".main");
        var back=document.querySelector(".back");
        //返回按钮
        console.log(orders)
        back.onclick=function(){
            window.history.back();
            // location.href="queren.html"
        }
        var indexs=Number(window.localStorage.getItem("menuli"));
        // 
        for(var i=0;i<lis.length;i++){
            lis[i].className="";
            orders[i].style.display="none";
            lis[indexs].className="ored";
            orders[indexs].style.display="block"
        }
        
        for(var i =0 ; i < lis.length;i++){
            lis[i].index=i;
            lis[i].onclick=function(){
                for(var j =0 ; j < lis.length;j++){
                  lis[j].className="";
                    orders[j].style.display="none";
                }
                this.className="ored";
                 orders[this.index].style.display="block"
            }   
        }
        
        let newlist=JSON.parse(localStorage.getItem('订单编号'));
        
        let allsum=JSON.parse(localStorage.getItem('allsum'));

        console.log(newlist)
        //渲染订单
        for(let i=0;i<newlist.length;i++){
            $(".order")[0].innerHTML+=
            `
            <div class="order-list">
            <div class="ordernum-wrap">
              <div class="ordernum">订单编号：${newlist[i]}</div>
              <div class="status">代付款</div>
            </div>
          <div class="mage">
            
          </div>
            <div class="total-wrap">
              <div class="total">实际支付金额：￥${allsum}</div>
              <div class="status-wrap">
                <div class="status-btn">取消订单</div>
                <div class="status-btn">去付款</div>
              </div>
            </div>
            
            `
        }
        
        let shopping=JSON.parse(localStorage.getItem('shopping'));
        console.log(shopping)
        for(let i=0;i<shopping.length;i++){
            axios({
                method:"get",
                url:"http://vueshop.glbuys.com/api/home/goods/info?gid="+shopping[i][3]+"&type=details&token=1ec949a15fb709370f",
            }).then((res)=>{
                console.log(res.data.data)
                for(let j=0;j<newlist.length;j++){
                $(".mage")[j].innerHTML+=
                `
            <div class="item-list">
              <div class="image">
                <img src=" ${res.data.data.images[0]}" alt="" />
              </div>
              <div class="title">
               ${res.data.data.title}
              </div>
              <div class="amount">X${shopping[i][2]}</div>
               </div>
                `
                }
            

            })
        }

        
    }
}