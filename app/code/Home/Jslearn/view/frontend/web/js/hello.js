define([
        "jquery"
    ], function($){
        "use strict";
        return function(config) {
            alert(config.message);

            var a = 1, b = 2;
            $("#msg-red").css({"background" : "red"});

        }
    }
);