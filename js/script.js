$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbarmenu').addClass("sticky");
        }else{
            $('.navbarmenu').removeClass("sticky");}
    })
})