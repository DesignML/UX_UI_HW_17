// Preloader function

function fade() {
    $('.preloader').fadeOut("slow");
    }
setTimeout(fade, 4500);
    
// Delay the transition to happening.html by 3 seconds
setTimeout(function() {
// Redirect to happening.html after the delay
    window.location.href = 'happening.html';
    }, 5000); // 3000 milliseconds = 3 seconds

// NOT SURE WHY I CANNOT FADEIN or FADEOUT on all my page transitions when replicating the above code :(