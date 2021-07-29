
window.onload=function(){
fn1();
}
function fn1(){
    var width1=document.querySelector(".swiper-container");
    var search1=document.querySelector(".top-search");
window.onscroll=function(){
    var top=document.body.scrollTop || document.documentElement.scrollTop;//兼容写法
    if (top > width1.clientHeight) {
      search1.id="aa"
    }else {
        search1.id=""
}
}  
fn2();
function fn2(){
 var search=document.querySelector(".onsearch");
 var os=document.querySelector(".search-component");
 var pages=document.querySelector(".page");
 var close=document.querySelector(".close");
 var topsearch=document.querySelector(".top-search");
 var sort=document.querySelector("#sort");
 var oi =topsearch.querySelector("i");
 var back=document.querySelector(".back");
 var op=topsearch.querySelector("p");
 var searchs=document.querySelector(".search1");
 var osort=document.querySelector("#sort")
 var oback=osort.querySelector(".back")
 var aa; 
 
// 列表里点搜索框
 searchs.onclick=function(){
  pages.style.display="none";
  os.style.display="block";//搜索框
  sort.style.display="none";//列表框
  console.log(1111)
 }
 //转登录
op.onclick=function(){
  window.location.href="denglu.html";
}
// 主页点击搜索框
 search.onclick=function(){
   pages.style.display="none";//主页
   os.style.display="block";
  console.log(1111)
 }
//  点击列表
 oi.onclick=function(){
     aa=1;
     sort.style.display="block";
     pages.style.display="none";

 }
 //出错
 if(aa==1){
  var back=os.querySelector(".close");
  back.onclick=function(){
   pages.style.display="none";
   os.style.display="none";//搜索框
   sort.style.display="block";//列表框
   aa=""
 }
}else{
  //  搜索框点击关闭
   close.onclick=function(){
   pages.style.display="block";
   os.style.display="none";
   aa="";
}
}
//  点击列表的返回
 back.onclick=function(){
  sort.style.display="none";
  pages.style.display="block";
 }
}

var recommend1=document.querySelector(".orecommend")
    axios.get("/ocom").then((res)=>{
    console.log(res.data)
     recommend1.innerHTML=template("tpl-recommend",res.data);
     console.log(recommend1.children)
for(var i = 0 ; i < recommend1.children.length ; i++){
  recommend1.children[i].index=i;
  recommend1.children[i].onclick=function(){
    window.location.href="shopping.html";
    console.log(res.data.ocom[this.index].gid)
    window.localStorage.setItem("aa",res.data.ocom[this.index].gid);
    }
    }
 
})
//列表框
ke();
function ke(){
  var list

  var aa=document.querySelector(".classify-wrap");
  // console.log(bb)
  var ax=new XMLHttpRequest();
  ax.open("get","http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f");
  ax.send();
  ax.onreadystatechange=function(){
    if(this.readyState==4){
      var ss=JSON.parse(ax.response);
      console.log(ss)
      for(var i=0;i<ss.data.length;i++){
        aa.innerHTML+=
        `
        <div class="classify-item  aa">
               ${ss.data[i].title}
                             </div>
        `
      }
      var oitem=document.querySelectorAll(".classify-item");
      oitem[0].className="classify-item  aa red"
      

    //滚动
    // let tag = document.querySelector('.classify-wrap-area');
    //     let bs = BetterScroll.createBScroll(tag,{
    //         pullDownRefresh: {
    //             threshold: 30,
    //         },
    //         pullUpLoad: {
    //             threshold: -30,
    //         },
    //             click:true,
    //         });
    //         bs.on('pullingDown', () => {
    //             bs.finishPullDown();
    //             bs.refresh();
    //         });
    //         bs.on('pullingUp', () => {
    //             bs.finishPullDown();
    //             bs.refresh();
    //     });
          

    //首页点击导航
  var navs=document.querySelectorAll(".nav-shop");
  console.log(navs)
  for(let i=0;i<navs.length;i++){
    navs[i].onclick=function(){
      console.log(1)
      var pages=document.querySelectorAll(".page");
      pages[0].style.display="none"
      pages[1].style.display="block"
      var bb=document.querySelector(".good-content-main");
      bb.innerHTML=""
      // 点击样式
      list=document.querySelectorAll(".aa");
      for(var j=0;j<list.length;j++){
        list[j].className="classify-item  aa"
      }
      list[i].className="classify-item  aa red"
      fc(i+492)
      function fc(a){
        var bb=document.querySelector(".good-content-main");
        bb.innerHTML=""
        var bx=new XMLHttpRequest();
        bx.open("get","http://vueshop.glbuys.com/api/home/category/show?cid="+a+"&token=1ec949a15fb709370f");
        bx.send();
        bx.onreadystatechange=function(){
          if(this.readyState==4){
            var ss=JSON.parse(bx.response);
            console.log(ss.data);
            if(ss.data=="没有数据"){
              bb.innerHTML="没有相关商品!"
            }else{

            for(var i=0;i<ss.data.length;i++){
              bb.innerHTML+=
              `
               <div class="goods-wrap">
              <div class="classify-name">
                  ${ss.data[i].title}
              </div>
              <div class="goods-items-wrap">
                  
              </div> 
              `
            }
            var wraps=document.querySelectorAll(".goods-items-wrap")
            var ox=new XMLHttpRequest();
            ox.open("get","http://vueshop.glbuys.com/api/home/category/show?cid="+a+"&token=1ec949a15fb709370f")
            ox.send();
            ox.onreadystatechange=function(){
              if(this.readyState==4){
                var dd=JSON.parse(ox.response);
                console.log(dd.data)
                for(let i=0;i<wraps.length;i++){
                  if(dd.data[i].goods==null){
                    continue;
                  }else{
                    for(var j=0;j<dd.data[i].goods.length;j++){
                      wraps[i].innerHTML+=
                      `
                      <ul>
                          <li><img src="${dd.data[i].goods[j].image}" alt=""></li>
                          <li>${dd.data[i].goods[j].title}</li>
                      </ul>
                      `
   
                    }
                     var owrap=document.querySelectorAll(".goods-items-wrap")[i];
                     var uls=owrap.querySelectorAll("ul");
                     console.log(uls)
                     for(var j=0;j<uls.length;j++){
                       uls[j].index=j;
                       uls[j].onclick=function(){
                         window.location.href="shopping.html"
                        //  console.log(i)
                        //  console.log(dd.data)
                         window.localStorage.setItem("aa",dd.data[i].goods[this.index].gid)
                         console.log(window.localStorage.getItem("aa"))
                         
                       }
                     }
                     //

                  }
                 
                }
                
                
              }
            }
            //点击跳转结束
          }
          }
      
          }
        }

     }
  }
   
  
  list=document.querySelectorAll(".aa");
  console.log(ss);
  for(var i=0;i<list.length;i++){
    list[i].index=i;
    list[i].onclick=function(){
      for(var j=0;j<list.length;j++){
        list[j].className="classify-item  aa"
      }
      this.className="classify-item  aa red"
      window.localStorage.setItem("dd",ss.data[this.index].cid)
      
       
      fc(window.localStorage.getItem("dd"));
      function fc(a){
        var bb=document.querySelector(".good-content-main");
        bb.innerHTML=""
        var bx=new XMLHttpRequest();
        bx.open("get","http://vueshop.glbuys.com/api/home/category/show?cid="+a+"&token=1ec949a15fb709370f");
        bx.send();
        bx.onreadystatechange=function(){
          if(this.readyState==4){
            var ss=JSON.parse(bx.response);
            console.log(ss.data);
            if(ss.data=="没有数据"){
              bb.innerHTML="没有相关商品!"
            }else{

            for(var i=0;i<ss.data.length;i++){
              bb.innerHTML+=
              `
               <div class="goods-wrap">
              <div class="classify-name">
                  ${ss.data[i].title}
              </div>
              <div class="goods-items-wrap">
                  
              </div> 
              `
            }
            var wraps=document.querySelectorAll(".goods-items-wrap")
            var ox=new XMLHttpRequest();
            ox.open("get","http://vueshop.glbuys.com/api/home/category/show?cid="+a+"&token=1ec949a15fb709370f")
            ox.send();
            ox.onreadystatechange=function(){
              if(this.readyState==4){
                var dd=JSON.parse(ox.response);
                console.log(dd.data)
                for(let i=0;i<wraps.length;i++){
                  if(dd.data[i].goods==null){
                    continue;
                  }else{
                    for(var j=0;j<dd.data[i].goods.length;j++){
                      wraps[i].innerHTML+=
                      `
                      <ul>
                          <li><img src="${dd.data[i].goods[j].image}" alt=""></li>
                          <li>${dd.data[i].goods[j].title}</li>
                      </ul>
                      `
   
                    }
                     var owrap=document.querySelectorAll(".goods-items-wrap")[i];
                     var uls=owrap.querySelectorAll("ul");
                     console.log(uls)
                     for(var j=0;j<uls.length;j++){
                       uls[j].index=j;
                       uls[j].onclick=function(){
                         window.location.href="shopping.html"
                         window.localStorage.setItem("aa",dd.data[i].goods[this.index].gid)
                         console.log(window.localStorage.getItem("aa"))
                         
                       }
                     }
                     //

                  }
                 
                }
                
                
              }
            }
            //点击跳转结束
          }
          }
      
          }
        }
    }
  }


  
  var bb=document.querySelector(".good-content-main");
  var bx=new XMLHttpRequest();
  bx.open("get","http://vueshop.glbuys.com/api/home/category/show?cid=492&token=1ec949a15fb709370f");
  bx.send();
  bx.onreadystatechange=function(){
    if(this.readyState==4){
      var ss=JSON.parse(bx.response);
      console.log(ss.data);
      for(var i=0;i<ss.data.length;i++){
        bb.innerHTML+=
        `
         <div class="goods-wrap">
        <div class="classify-name">
            ${ss.data[i].title}
        </div>
        <div class="goods-items-wrap">
            
        </div> 
        `
      }
      var wraps=document.querySelectorAll(".goods-items-wrap")
      var ox=new XMLHttpRequest();
      ox.open("get","http://vueshop.glbuys.com/api/home/category/show?cid=492&token=1ec949a15fb709370f")
      ox.send();
      ox.onreadystatechange=function(){
        if(this.readyState==4){
          var dd=JSON.parse(ox.response);
          console.log(dd.data)
          for(let i=0;i<wraps.length;i++){
           for(var j=0;j<dd.data[i].goods.length;j++){
             wraps[i].innerHTML+=
             `
             <ul>
                 <li><img src="${dd.data[i].goods[j].image}" alt=""></li>
                 <li>${dd.data[i].goods[j].title}</li>
             </ul>
             `
           }
           var owrap=document.querySelectorAll(".goods-items-wrap")[i];
                     var uls=owrap.querySelectorAll("ul");
                     console.log(uls)
                     for(var j=0;j<uls.length;j++){
                       uls[j].index=j;
                       uls[j].onclick=function(){
                         window.location.href="shopping.html"
                         window.localStorage.setItem("aa",dd.data[i].goods[this.index].gid)
                         console.log(window.localStorage.getItem("aa"))
                         
                       }
                     }
            
          }
        }
      }
    }
      
    
     
    }
}
//列表框结束

    }
  }
  
  

//搜索
hg();
function hg(){
  // 渲染历史


 var search1=document.querySelectorAll(".search-keywords-wrap")
  var ax=new XMLHttpRequest();
  ax.open("get","http://vueshop.glbuys.com/api/home/public/hotwords?token=1ec949a15fb709370f")
  ax.send();
  ax.onreadystatechange=function(){
    if(this.readyState==4){
      var aa=JSON.parse(ax.response)
      console.log(aa.data);
      for(var i =0;i<aa.data.length;i++){
        search1[1].innerHTML+=
        `
        <div class="keywords">
                    ${aa.data[i].title}
                      </div>
        `

      }
       //搜索点击
        var keywords= search1[1].querySelectorAll(".keywords");
        var searchmain=document.querySelectorAll(".search-main");
        var local=[];
        var lists = JSON.parse(localStorage.getItem('local'))
        // console.log(lists)
        // console.log(lists.length)
        // console.log(4!==0)
        // console.log(lists.length!==0)
        if(lists.length!==0){
          searchmain[0].style.display="block";
            search1[0].innerHTML=""
              for(let j=0;j<lists.length;j++){
                search1[0].innerHTML+=
                `
                <div class="keywords">
                           ${lists[j]} 
                          </div>
                `
                
              }
              var keywordss=search1[0].querySelectorAll(".keywords");
              // console.log(keywordss)
              for(let k=0;k<keywordss.length;k++){
                keywordss[k].onclick=function(){
                  window.localStorage.setItem("cc",keywords[k].innerHTML)
                  window.location.href="xuan.html"
                  console.log(1)
                }
              }
        }
        for(var i=0;i<keywords.length;i++){
          keywords[i].index=i;
          keywords[i].onclick=function(){
            //点击单项
            window.localStorage.setItem("cc",this.innerHTML);
            console.log(window.localStorage.getItem("cc"))
            window.location.href="xuan.html"
            //点击单项
            //添加历史 
            
            local.push(aa.data[this.index].title)
            console.log(local)
            window.localStorage.setItem("local",JSON.stringify(local));
            let list = JSON.parse(localStorage.getItem('local'))
            // console.log(list.length)
            
            // searchmain[0].style.display="block";
            // search1[0].innerHTML=""
            //   for(let j=0;j<list.length;j++){
            //     search1[0].innerHTML+=
            //     `
            //     <div class="keywords">
            //                ${list[j]} 
            //               </div>
            //     `
                
            //   }
            //   var keywordss=search1[0].querySelectorAll(".keywords");
            //   // console.log(keywordss)
            //   for(let k=0;k<keywordss.length;k++){
            //     keywordss[k].onclick=function(){
            //       window.localStorage.setItem("cc",keywords[k].innerHTML)
            //       window.location.href="xuan.html"
            //       console.log(1)
            //     }
            //   }
            

            
            
            //添加历史结束
          }
        }
        k3();
        function k3(){
        // 清除记录
        var bin=document.querySelector(".bin");
        var vanoverlay=document.querySelector(".van-overlay");
        var clearleft=document.querySelector(".clearmess-left");
        var clearright=document.querySelector(".clearmess-right");
        console.log(vanoverlay)
        console.log(bin);
        bin.onclick=function(){
          vanoverlay.style.display="block"
        }
        clearleft.onclick=function(){
          vanoverlay.style.display="none"
        }
        clearright.onclick=function(){
          //清空历史记录
          searchmain[0].style.display="none"
          vanoverlay.style.display="none"
          search1[0].innerHTML="";
          let del = JSON.parse(localStorage.getItem('local'))
          del.splice(0,del.length);
          window.localStorage.setItem("local",JSON.stringify(del));
        }
      }
     
    }
  }
  //搜索结束
  

}




}
