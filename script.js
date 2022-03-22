$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  $(".peng-clickable").click(function() {
    $("#penguin-showing").toggle();
    $("#penguin-hidden").toggle();
  });
});

