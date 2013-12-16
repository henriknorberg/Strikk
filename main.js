var respUI = new ResponsiveUI($(".deck"))

//Call backs for decks
var carousel = {
    name:'carousel',
    before:function (item){
        //quick and dirty carousel logic
        var self = this
        this.index = 0
        this.slides = $(item).children().css("display","none")

        //set up a super simple carousel
        $(this.slides[this.index]).css("display","block")
        this.timer = setInterval(function(){
            $(self.slides[self.index]).css("display","none")
            self.index < self.slides.length -1 ? self.index ++ : self.index = 0
            $(self.slides[self.index]).css("display","block")
        },2000)
    },
    after:function (){
        clearInterval(this.timer);
        $(this.slides).css("display","block")
    }
}

respUI.addUI(carousel)

//Call backs for card types
var card = {
    name:'card',
    before:function (item) {
        var $item = $(item)
        $item.find(".top-image").css({
            "background-image":"url("+$item.attr('data-bg-image')+")",
            "min-height":"12em"
        });

    },
    after:function(item) {
        var $item = $(item)
        $item.find(".top-image").css({
            "background-image":"none",
            "min-height":"0em"
        })
    }
};
respUI.addUI(card);

var slide = {
    name:'slide',
    before : function (item) {
        var $item = $(item)
        $item.css("background-image","url("+$item.attr('data-bg-image')+")");
    },
    after : function(item) {
        var $item = $(item)
        $item.css('background-image','none')
    }
}
respUI.addUI(slide)

var listItem = {
    name:'listItem',
    before : function (item) {
        var $item = $(item)
        $item.css("background-image","url("+$item.attr('data-bg-image')+")")
    },
    after : function(item) {
        var $item = $(item)
        $item.css('background-image','none')
    }
}

respUI.addUI(listItem)