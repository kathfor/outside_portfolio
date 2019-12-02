window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("nav").style.fontSize = "1.2rem";
    document.getElementById("nav").style.padding = "15px";
  } else {
    // document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("nav").style.fontSize = "1.6rem";
    document.getElementById("nav").style.padding = "20px";
  }
}