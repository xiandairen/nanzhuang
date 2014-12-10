$(document).ready(function(){
    var prvUrl = "http://localhost:63342/nanzhuang/jacket.html";
    var nextUrl = "http://localhost:63342/nanzhuang/dress.html";
    var obj1 = {x:500,y:450};
    var obj2 = {x:450,y:434};
    var obj3 = {x:700,y:448};
    var tagDiv = $("#Ornament")
    Move(prvUrl,nextUrl,obj1,obj2,obj3,tagDiv)
})


