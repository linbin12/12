window.onload=function(){
    $(".back").click(()=>{
        window.location.href="my.html"
    })
    let fav = JSON.parse(localStorage.getItem('fav')) 
    console.log(fav)
    for(let i=0;i<fav.length;i++){
        axios({
            method:"POST",
            url:"http://vueshop.glbuys.com/api/home/goods/info?gid="+fav[i]+"&type=details&token=1ec949a15fb709370f"
        }).then((res)=>{
            console.log(res.data.data)
            $(".main")[0].innerHTML+=
        `
       <div class="goods-list">
        <div class="image">
            <img src="${res.data.data.images[0]}" alt="">
        </div>
        <div class="title">
           ${res.data.data.title}
        </div>
        <div class="price">
           ￥ ${res.data.data.price}
        </div>
        <div class="btn-wrap">
            <div class="btn">购买</div>
            <div class="btn">删除</div>
        </div>
    </div> 

        `
        var goodslist=document.querySelectorAll(".goods-list");
        for(let j=0;j<goodslist.length;j++){
            console.log(2)
            var btn=goodslist[j].querySelectorAll(".btn");
            console.log(btn)
            //删除
            btn[1].onclick=function(){
                $(this).parent().parent().remove();
                fav.splice(j, 1)
                localStorage.setItem('fav', JSON.stringify(fav))
            }
            //购买
            btn[0].onclick=function(){
                console.log(j)
                window.location.href="shopping.html"
                window.localStorage.setItem("aa",fav[j])
            }
        }

        })
        
    }


    
}