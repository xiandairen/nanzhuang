//处理“上一页‘’和”下一页“，以及控制价格动画
function Move(urlOne,urlTwo,obj1,obj2,obj3,div){
    this.obj1 = obj1;
    this.obj2 = obj2;
    this.obj3 = obj3;
    //"返回”和“下一页”切换
    var baseOne = $(".base-one");
    var baseTwo = $(".base-two");
    $(".rturn-page").click(function(){
        if(baseOne.is(':hidden')){
            baseOne.show();
            baseTwo.hide();
            $(".base-pos-pic").css({
                "visibility":"hidden"
            })
        }else{
            window.location.href= urlOne
        }
    })

    $(".next-page").click(function(){
        //价格动画
        var prictList = [
            function(){
                $(".pic-1").delay(10).animate({top:"-=40px"},100,callback)
            },
            function(){
                $(".pic-2").delay(10).animate({top:"-=40px"},100,callback)
            },
            function(){
                $(".pic-3").delay(10).animate({top:"-=40px"},100,callback)
            }
        ]
        $(".base-two").queue("slideList",prictList);
        var callback= function(){
            $(".base-two").dequeue('slideList');
        }


        if(baseTwo.is(':hidden')){
            baseOne.hide();
            baseTwo.show();
            $(".base-pos-pic").css({
                "visibility":"visible"
            })

           // var ele = $("#"+this.dom)
            function PriceMove(that){
                that.find(".pic-1").css({
                    display:"block",
                    left:this.obj1.x,
                    top:this.obj1.y
                })
                that.find(".pic-2").css({
                    display:"block",
                    left:this.obj2.x,
                    top:this.obj2.y
                })
                that.find(".pic-3").css({
                    display:"block",
                    left:this.obj3.x,
                    top:this.obj3.y
                })
            }
            PriceMove(div);
            callback()
        }else{
            window.location.href=urlTwo;
        }
    })
}