var strikk = new Strikk($(".deck"))

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
        },2000);

        //change headline
        $("h1").text("This is a carousel");
    },
    after:function (){
        clearInterval(this.timer);
        $(this.slides).css("display","block")
    }
}

strikk.addUI(carousel)

//Call backs for card types
var card = {
    name:'card',
    before:function (item) {
        var $item = $(item)
        $item.find(".top-image").css({
            "background-image":"url("+$item.attr('data-bg-image')+")",
            "min-height":"12em"
        });

        //change headline
        $("h1").text("This is a grid");
    },
    after:function(item) {
        var $item = $(item)
        $item.find(".top-image").css({
            "background-image":"none",
            "min-height":"0em"
        })
    }
};
strikk.addUI(card);

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
strikk.addUI(slide)

var listItem = {
    name:'listItem',
    before : function (item) {
        var $item = $(item)
        $item.css("background-image","url("+$item.attr('data-bg-image')+")")

        $("h1").text("This is a list");
    },
    after : function(item) {
        var $item = $(item)
        $item.css('background-image','none')
    }
}

strikk.addUI(listItem)