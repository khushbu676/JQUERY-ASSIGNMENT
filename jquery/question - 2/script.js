// script.js

$(document).ready(function() {
    // Slide Toggle
    $('#slideToggleBtn').click(function() {
        $('#box').slideToggle(1000);
    });

    // Slide Up
    $('#slideUpBtn').click(function() {
        $('#box').slideUp(1000);
    });

    // Slide Down
    $('#slideDownBtn').click(function() {
        $('#box').slideDown(1000);
    });
});
