// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(function() {
    var navbar = $(".navbar-submarine");
    var navbar_mobile = $(".navbar-mobile")
    var logo_nav_white = $(".logo-white");
    var logo_nav_orange = $(".logo-orange");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            navbar.removeClass('navbar-submarine').addClass("navbar-submarine-second");
            navbar_mobile.removeClass('navbar-mobile').addClass("navbar-mobile-second");
            logo_nav_white.hide();
            logo_nav_orange.show();

        } else {
            navbar.removeClass("navbar-submarine-second").addClass('navbar-submarine');
            navbar_mobile.removeClass('navbar-mobile').addClass("navbar-mobile-second");
            logo_nav_orange.hide();
            logo_nav_white.show();
        }
    });
});


