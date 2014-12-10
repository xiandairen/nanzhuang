$(document).ready(function(){
    var prvUrl = "http://localhost:63342/nanzhuang/shirt.html";
    var nextUrl = "http://localhost:63342/nanzhuang/windbreaker.html";
    var obj1 = {x:146,y:433};
    var obj2 = {x:420,y:378};
    var obj3 = {x:678,y:460};
    var tagDiv = $("#wrapSuit")
    Move(prvUrl,nextUrl,obj1,obj2,obj3,tagDiv)
})


