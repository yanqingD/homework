;(function($){
     this.children("li").children().hide();
     this.children("li").has("ul").on("click",function(event){
        var target = event.target;
        if(target !=this) return 0    
        $(this).children().stop().toggle()
        .end().siblings().children().stop().hide()
     })
})(jQuery)