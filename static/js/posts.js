// ////////////////////////
/// Javascript for Posts Page
//////////////////////////

alert('hello');

$(function() {
    // Executed when js-menu-icon is clicked
    $('.js-menu-icon').click(function() {
         
         $(this).next().toggle();
    })
})