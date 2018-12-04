define(['jquery'], function($){
    alert("A simple RequireJS module =)");
var SimpleComponent = function(config, node) {
    alert("component");
    console.log(config, node);
    $('#one').text("CHANGE THIS TXT");


}
    $('#two').click(function () {
        $('#two').append("<p>Clicked</p>");
    });
return SimpleComponent;

    // function getRandomInt(min, max) {
    //     return Math.floor(Math.random() * (max - min)) + min;
    // };
    //
    // setInterval(() => {
    //     let color =  getRandomInt(999, 999999);
    //     console.log(color);
    //     document.body.style.background = "#" + `${color}`;
    // }, 1000)


  //  return {};
});