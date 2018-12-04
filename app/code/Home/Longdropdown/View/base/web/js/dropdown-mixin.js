define([
    'jquery',
    'jquery/ui',
    'mage/<widget.name>' // usually widget can be found in /lib/web/mage dir
], function($){
    alert(a)

    $.widget('<your_namespace>.<your_widget_name>', $.mage.<widget.name>, { ... });

    return $.<your_namespace>.<your_widget_name>;
});