;(function($,window,document,undefined){
    //定义Beautifier
    var Beautifier = function(ele,opt){
        this.$element = ele,
            this.defaults = {
                "color":"red",
                "fontSize":"12px",
                "textDEcoration":"none",
                "float":"right",
                "marginRight":"20px"
            },
            this.options = $.extend({},this.defaults,opt)
    }
    //定义Beautifier的方法
    Beautifier.prototype={
        beautify:function(){
            return this.$element.css({
                "color":this.options.color,
                "fontSize":this.options.fontSize,
                "textDecoration":this.options.textDecoration,
                "float":this.options.float,
                "margin-left":this.options.marginRight,
                "margin-top":this.options.marginTop
            })
        }
    }
    //在插件中使用Beautifier对象
    $.fn.myPlugin = function(options){
        //创建Bearutifier的实体
        var beautifier = new Beautifier(this,options);
        //调用其方法
        return beautifier.beautify();
    }
})(jQuery,window,document)

$("#alist a").myPlugin({
    "color":"blue",
    "fontSize":"30px",
    "float":"left",
    "margin-left":"20px",
    "marginTop":"100px"
})