$(document).ready(function(){
var pageListCont = {
    "MainIndex":$("#MainIndex"), //首页
    "WrapShirt":$("#WrapShirt"), //长袖衫
    "wrapSuit":$("#wrapSuit"),//薄西服
    "windBreaker":$("#windBreaker"),//风衣
    "Jacket":$("#Jacket"),//皮夹克
    "Ornament":$("#Ornament"),//配饰
    "Dress":$("#Dress")//搭配
}

    //导航点击效果；
    $(".nav-list li").each(function(){
        var i = $(this).index();
        var pageCont=[pageListCont.MainIndex,pageListCont.WrapShirt,pageListCont.wrapSuit,pageListCont.windBreaker,pageListCont.Jacket,pageListCont.Ornament,pageListCont.Dress];
        $(this).click(function(){
            $(this).siblings("li").find("a").removeClass("nav-hover");
            $(this).find("a").addClass("nav-hover");
            for(var n=0;n<pageCont.length;n++){
                pageCont[n].hide().find(".base-pos-pic").hide();
            }
            var page =  pageCont[i];
            page.show()//显示相应的内容页
            switch (page){//定位“返回”和“下一页”的位置
                case pageListCont.WrapShirt:
                    var ele = pageListCont.WrapShirt;
                    var obj1 = {x:276,y:558};
                    var obj2 = {x:533,y:559};
                    var obj3 = {x:789,y:559};
                    PriceMove(ele,obj1,obj2,obj3)
                    break
                case pageListCont.wrapSuit:
                    var ele = pageListCont.wrapSuit;
                    var obj1 = {x:40,y:600};
                    var obj2 = {x:250,y:600};
                    var obj3 = {x:500,y:600};
                    PriceMove(ele,obj1,obj2,obj3)
                    break
                case pageListCont.windBreaker:
                    var ele =  pageListCont.windBreaker;
                    var obj1 = {x:30,y:500};
                    var obj2 = {x:300,y:500};
                    var obj3 = {x:500,y:500};
                    PriceMove(ele,obj1,obj2,obj3)
                    break;
                case pageListCont.Jacket:
                    var ele = pageListCont.Jacket;
                    var obj1 = {x:50,y:500};
                    var obj2 = {x:400,y:500};
                    var obj3 = {x:700,y:500};
                    PriceMove(ele,obj1,obj2,obj3)
                    break;
                case pageListCont.Ornament:
                    var ele = pageListCont.Ornament;
                    var obj1 = {x:500,y:200};
                    var obj2 = {x:500,y:200};
                    var obj3 = {x:500,y:200};
                    PriceMove(ele,obj1,obj2,obj3)
                    break;
                case pageListCont.Dress:
                    var ele = pageListCont.Dress;
                    var obj1 = {x:500,y:200};
                    var obj2 = {x:500,y:200};
                    var obj3 = {x:500,y:200};
                    PriceMove(ele,obj1,obj2,obj3)
                    break;
            }
            function PriceMove(that,obj1,obj2,obj3){
                that.find(".pic-1").css({
                    display:"block",
                    left:obj1.x,
                    top:obj1.y
                })
                that.find(".pic-2").css({
                    display:"block",
                    left:obj2.x,
                    top:obj2.y
                })
                that.find(".pic-3").css({
                    display:"block",
                    left:obj3.x,
                    top:obj3.y
                })
            }

        })
    })
})