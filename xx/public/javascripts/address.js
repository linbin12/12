window.onload=function(){
    sdj();
    function sdj(){
        var head=document.querySelectorAll(".sub-header");
        var back=head[0].querySelector(".back")
        var backs=head[1].querySelector(".back")
        var titles=document.querySelector(".title");
        var addbtn=document.querySelector(".add-btn");
        var pages=document.querySelectorAll(".page");
        back.onclick=function(){
            window.location.href="my.html";
        }
        addbtn.onclick=function(){
            pages[0].style.display="none"
            pages[1].style.display="block"

        }
        backs.onclick=function(){
            pages[0].style.display="block"
            pages[1].style.display="none"
        }
        
    }
}