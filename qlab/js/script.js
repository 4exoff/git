$('document').ready(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < $(".headerImage").height()) $(".headerContent").css({top: '0', position: 'relative'});
        else $(".headerContent").css({top: '0px', position: 'fixed',width:'100%'});
        
    });
});