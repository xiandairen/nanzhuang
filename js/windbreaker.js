$(document).ready(function(){
    var prvUrl = "http://localhost:63342/nanzhuang/suit.html";
    var nextUrl = "http://localhost:63342/nanzhuang/jacket.html";
    var obj1 = {x:155,y:428};
    var obj2 = {x:400,y:523};
    var obj3 = {x:635,y:495};
    var tagDiv = $("#windBreaker")
    Move(prvUrl,nextUrl,obj1,obj2,obj3,tagDiv)
})


