$(".toggle").click(function(){
    $(this).find(".toggleContainer").toggleClass("active");
    $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
  });


  /* -------- Games: Accordian Menu NEED TO TROUBLESHOOT/DEBUG WHY THE FUNCTIONALITY IS BROKEN :( -------- */