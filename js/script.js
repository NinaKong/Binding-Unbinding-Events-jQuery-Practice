/*Nina Kong*/
function hightlight(event) {
    $('#binding').toggleClass('hightlightPart');
}
$(document).ready(function () {
    var windowHeight = $( window ).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);

    $('#binding').on('mouseover mouseleave', hightlight);

    $('#binding').on('click', function(event){
        $('#binding').off('mouseover mouseleave', hightlight);
        $('#binding').html('<p>It works!</p>');
        $('#binding').removeClass('hightlightPart');
    });

    $('#enterField').on('keypress',function(event) {
        $('#lastLetter').text(String.fromCharCode(event.charCode));
    });
});
