require([
    'jquery',
], function ($) {
    alert("Without jquery");
    console.log(1);
    jQuery(document).ready(function () {
// You jQuery code here
        alert("inside Js");
        console.log(1);
    });
});