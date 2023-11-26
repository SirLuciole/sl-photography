// Check if file is completely ready
// $(document).ready(function () {
//     // Load the external html
//     $('#div-navbar').load('navbar.html');
//     // $('#div-footer').load('footer.html');
// });
// Insert the Navbar
$.get("navbar.html", function(data){
    $("#div-navbar").replaceWith(data);
});
// Insert the Footer
$.get("footer.html", function(data){
    $("#div-footer").replaceWith(data);
});