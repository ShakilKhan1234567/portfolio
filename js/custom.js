// preloader
$(window).load(function(){
	$("#preloader").delay(2000).fadeOut(500)
})


// menu part
$(window).scroll(function(){
    var scrolling = $ (this).scrollTop()
    if(scrolling > 50){
        $(".navbar").addClass("bg")
    }else{
        $(".navbar").removeClass("bg")
    }
	if(scrolling > 20){
		$(".back2top i").fadeIn(500)
	}else{
		$(".back2top i").fadeOut(500)
	}
})
// one click
$(".back2top i").click(function(){
	$("html, body").animate({
		scrollTop : 0
	},1000)
})


// slick part
$('.main-slick').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	prevArrow:".prev",
	nextArrow:".next"
  });


// typed.js
$(function(){
	$(".typed").typed({
		strings: ["<span>a Developers.</span>", "<i>a Designers.</i>", "<b>Shakil.</b>"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: Infinity,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
// countertimer
// Set the date we're counting down to
var countDownDate = new Date("Jan 25, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("one").innerHTML = days + "d ",
  document.getElementById("one2").innerHTML = hours + "h ",
  document.getElementById("one3").innerHTML = minutes + "m ",
  document.getElementById("one4").innerHTML = seconds + "s ",
   + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// slick part
$('.main-slick').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	prevArrow:".prev",
	nextArrow:".next",
});