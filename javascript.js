$(document).ready(function() {
    if (localStorage.getItem("slide") == "small") {
  
      $('.flLeft').toggle('slide');
      $('.flLeftsmall').toggle('slide');
    }
  
    $('.menu-big').click(function() {
      $(this).toggleClass('glyphicon-triangle-right glyphicon-triangle-left');
      if (localStorage.getItem("slide") == null) {
        localStorage.setItem("slide", "small");
      } else {
        localStorage.removeItem("slide");
      }
  
      $('.flLeft').toggle('slide');
      $('.flLeftsmall').toggle('slide');
    });
  });