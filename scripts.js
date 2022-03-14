//toggle for design
$('.infode').hide();
$('#design,.infode').click(function(){
		$('#design,.infode').toggle();
});
//toggle for development
$('.infod').hide();
$('#development,.infod').click(function(){
		$('#development,.infod').toggle();
});
//toggle for product
$('.infop').hide();
$('#product,.infop').click(function(){
		$('#product,.infop').toggle();
});


//hover effects on portfolio
let portfolios = [
    "pic1",
    "pic2",
    "pic3",
    "pic4",
    "pic5",
    "pic6",
    "pic7",
    "pic8",
  ];
  
  portfolios.forEach((portfolio) => {
    $(`.${portfolio}`).hover(
      () => {
        $(`.${portfolio} .text-block`).css("opacity", 1);
      },
      () => {
        $(`.${portfolio} .text-block`).css("opacity", 0);
      }
    );
  });
//get data from form

let fName = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

console.log(fName);
console.log(email);
console.log(message);