/** adding a class style for active nav */
$('#js').css('background', 'url(./images/icon-hamburger.svg) center no-repeat')
const navToggle = $('#js')
navToggle.click(function(){
    document.body.classList.toggle('nav-open')//.nav-links in the css opens when .nav-open is added and closes when it is removed
    $('#js').css('background', 'url(./images/icon-close.svg) center no-repeat')

    if(document.body.classList.contains('nav-open') == false){
        $('#js').css('background', 'url(./images/icon-hamburger.svg) center no-repeat')//back to hamburger icon when .nav-open is removed
    }
})