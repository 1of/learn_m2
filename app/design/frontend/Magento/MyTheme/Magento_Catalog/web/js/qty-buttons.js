// require([
//     'jquery'
//     // 'domReady!'
// ], function ($, config) {
//     'use strict';
//         $('.inc').click(function() {
//             var val = +$('#qty').val();
//             $('#qty').val(`${++val}`);
//         });
//         $('.dec').click(function() {
//             console.log('Change... this', this, config.data);
//             let val = +$('#qty').val();
//
//             if (val <= 1) return
//             else $('#qty').val(`${--val}`);
//         });
//
//         $('#qty').change(function () {
//
// console.log('Change...', +$('#qty').val(), this, config.data)
//
//     });
    define(['jquery'], function ($) {

        var QtyComponent = function(config, node){

            function validateQTY(input) {
                input.val() < 1 ? input.val('1') : true;
            }

            $('.inc').click(function() {
                var input = $(node).find('#qty');
                var val = +input.val();
                input.val(`${++val}`);
                validateQTY(input);
            });

            $('.dec').click(function() {
                var input = $(node).find('#qty');
                var val = +input.val();
                input.val(`${--val}`);
                validateQTY(input);
            });

        };

        return QtyComponent;
    });