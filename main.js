self = this
$('.deck').on('animationstart', function(e) {
    var ui = getUI(this,e);
    console.log(ui)

    $.each($(this).children(),function (i, item){
        removeUIClass(this)
        var uiType = getSubType(ui)
        $(item).addClass('ui-'+uiType)
        if (typeof self[uiType] == "function") self[uiType](item)
    })

    $("H1").text(e.originalEvent.animationName);


});

function slide(item) {
    var $item = $(item)
    $item.css("background-image","url("+$item.attr('data-bg-image')+")")
}


function getUI(el,ev){
    //var nodes = e.currentTarget.ClassList
    var state = ev.originalEvent.animationName
    var ui = $(el).attr('class').split(state+'-')[1].split(' ')[0]
    //console.log("-> ",ui)

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