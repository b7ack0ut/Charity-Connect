/*
_________________________________________________________
Name: CharityCorner ©
Date: 4th July 2015
Author: SilentHackers
Contributors: Arun Reddy (lycanotrope@gmail.com)
              Jamil Ispahany (jamil.ispahany@gmail.com)
              Shibasis Sengupta (shibassmb@gmail.com)
Version: 1.0
Description: A social platform to make volunteering and 
             donations to charities easier.
_________________________________________________________
*/
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        //jqm settings
        $.support.cors = true;
        $.mobile.allowCrossDomainPages = true;
        $.mobile.defaultPageTransition = 'none';
        $.mobile.defaultDialogTransition = 'none';
        $.mobile.buttonMarkup.hoverDelay = 0;

        bindEvents();
        
    };

    function bindEvents() {
        $("#pageMap").on("pagebeforeshow", function () {
            cartodb.createVis('map', 'https://lycanotrope.cartodb.com/api/v2/viz/a8fb0fe4-2204-11e5-bd0e-0e018d66dc29/viz.json');
        });

        $("input.any").on("change", function () {
            console.log($(this).parents(".ui-body").children("fieldset:first").html());
            $(this).parents(".ui-body").children("fieldset:first").toggle();
        })
    }
} )();