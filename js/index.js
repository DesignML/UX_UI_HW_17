//Menu Accordion toggle function --------|

$(".toggle").click(function(){
  $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});

//Menu Active color function --------|

$('.toggle').click(function(){
  $(this).toggleClass('menu-text-color-active');
});

//Menu Active color function 2nd Attempt --------|
