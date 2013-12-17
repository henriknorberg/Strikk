Strikk
===============
Proof of concept and example of cards adapting to different presentation views with minimal use of javascript.

![Screendump](https://raw.github.com/henriknorberg/Strikk/master/screendump.jpg)

Cards are basic units that can expand and contract according to screen size, while
decks are a collection of cards which can be represented as a carousel, list, grid or any other collection ui.

Strikk makes it possible to toggle between deck types on different break points, and dynamicly change the card type presentation. Each deck modyfies the card representation according to it's type, so a carousel extends cards with a slide class, while a list modyfies adds a list-item class.

Consider the following markup. 

````
    <div class="deck small-carousel medium-list large-grid-3">
        <div class="card list-item" data-bg-image="img/plane1.jpg">
            <div class="top-image"></div>
            <div class="centered" >
                <header>
                    <h2>Card 1</h2>
                </header>
                 [......]
````
The wrapper class defines the deck and three different responsive views; carousel, list and a 3 column grid.

The javascript is very simple, just create a new instance of strikk, create a object with callbacks for the UI elements you need, and add it to the instance. 

Example:

````
var strikk = new Strikk($(".deck"));

var slide = {
    //which ui to attach to
    name:'list-item',
    
    //Callback right before rendering
    before : function (item) {
        var $item = $(item)
        $item.css("background-image","url("+$item.attr('data-bg-image')+")");
    },
    
    //Callback allowing the UI to destroy itself
    after : function(item) {
        var $item = $(item)
        $item.css('background-image','none')
    }
}
strikk.addUI(slide)

```
Strikk is not a framework, nor does not provide any UI elements. It's purpose is simply to provide a minimal infrastructure for responsive collections of UI, in a declarative fashion. 
