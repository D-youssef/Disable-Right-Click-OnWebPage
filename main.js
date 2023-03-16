/*
    Disable Right Click On Page
*/

// contextmenu means on click right
document.addEventListener('contextmenu', function (e) {

    'use strict';

    // this function allows you to stay in same page without going anywhere
    e.preventDefault();  

    console.log('You Clicked Right Click on Mouse');

});
