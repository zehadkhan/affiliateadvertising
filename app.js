// alert("working");
var url_add = "https://google.com/";
var x= document.getElementById("url_add");
x.href= url_add;
// console.log(x.href);

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
});