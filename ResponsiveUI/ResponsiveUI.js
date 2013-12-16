var ResponsiveUI = function(el){
    var rootElement = el || console.log("ResponsiveUI: Please pass inn a valid deck element into the constructor")
    var self = this
    var deckState
    var uiState

    $(rootElement).on('animationstart webkitAnimationStart', function(e) {
        var ui = getUI(this,e);
        var uiType = getSubType(ui);

        //Deck callback
        if (typeof self[deckState] == "object" && typeof self[deckState].before == "function") self[deckState].after(this)
        deckState = ui
        if (typeof self[ui] == "object" && typeof self[ui].before == "function")self[ui].before(this)

        //For each card
        $.each($(this).children(),function (i, item){
            //remove prev view
            if (typeof self[self.uiState] == "object" && typeof self[self.uiState].after == "function") self[self.uiState].after(item)
            removeUIClass(this)

            // add new
            $(item).addClass('ui-'+uiType)
            if (typeof self[uiType] == "object" && typeof self[uiType].before == "function") self[uiType].before(item)
        })

        //$("H1").text(e.originalEvent.animationName + " Display");

        self.uiState = uiType

    });

    function getUI(el,ev){
        //var nodes = e.currentTarget.ClassList
        var state = ev.originalEvent.animationName
        var ui = $(el).attr('class').split(state+'-')[1].split(' ')[0]


        return ui
    }

    function removeUIClass(el){
        var $el = $(el)
        var uiClass = $el.attr('class').split('ui-')[1]
        $el.removeClass("ui-"+uiClass)

         return $el
    }

    function getSubType(type){
        switch (type) {
            case "carousel":
                return "slide"
                break;

            case "list":
                return "listItem"
                break;

            default:
                return "card"
                break;
        }
    }

    //Public functions
    ResponsiveUI.prototype.addUI = function (ui){
        this[ui.name] = ui
    }

}