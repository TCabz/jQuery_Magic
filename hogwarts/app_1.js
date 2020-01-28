// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};

const showWand = () => {
    $("#wand").remove();
};

const createWand = () => {
    console.log("being hit");

    // <img id = "wand" style = "width:450px;" src = "https://harborparkgarage.com/wp-content/uploads/2019/09/Harry-Potter-Logo-680x450.png

    $(".wandBox").append(
        "<img style='width: 25px;' src = "www.pngkey.com/png/full/862-8622490_hogwarts-logo-png-clipart-background-harry-potter-hogwarts.png)>";q
    };
// $(#wandBox").remove();
}:

const drinkBeer = () => {
    $("#beer").remove();
    $("#beerBeer").remove();
};

const moveDog = () => {
    let dog = $("dog");
    dog.remove();
    $($container).append(dog);
};

$(() => {
    // put jQuery in here
    // - Query for your div with the `id` of `container` and set it to a variable named `$container`  
    let $container = $(".container");
    // - console.log `$container`
    console.log($container);
    // - Create an `<h1>` element and set it to a variable called `$h1` and console log it
    let $h1 = $("h1");
    console.log($h1);
});