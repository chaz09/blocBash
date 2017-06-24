$(document).ready(function(){

  var header = $('header'),
  btn    = $('button.toggle-nav');
  btn.on('click', function(){
  header.toggleClass('active');
    });

});



function toggleDivs() {
    var $inner = $("#inner");
    if ($inner.position().left == 0) {
        $inner.animate({
            left: "-400px"
        });
} else {
        $inner.animate({
            left: "0px"
        });
    }
}

$("button").bind("click", function() {
    toggleDivs();
});