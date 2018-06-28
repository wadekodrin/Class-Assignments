$(document).ready(function(){
    

    // changeColor();

    // toggleButton();

    // hideGhost();

    // getClubs();

    forLoops();


});

function forLoops (){

    var beers = ["bud","miller","shiner","juicifer","mahrs", "ragin' cajun"];

    // console.log(beers);
    // console.log(beers.length);
    // console.log(beers[2]);

    name = prompt("What kind of beer do you want?");
    for (var i = 0; i < beers.length; i++){
         
        
        if (beers[i] == name) {
           console.log("Thanks for the "+beers[i]);
        }
            else {
                console.log("No thanks, I don't want a "+beers[i]);
            }
    }
}

// function changeColor(){

//     $("#my-rectangle").click(function(){
//         $("#my-rectangle").css("width" , "5000px");
//     });

// }

// function hideGhost(){

//     $("#ghostObject").click(function(){
//         $("#ghost").hide()
//         $("#boo").show();
//     });

// }

// function toggleButton(){

//     $("#toggleButton").click(function(){
//         $("#message").toggle();
//     });


