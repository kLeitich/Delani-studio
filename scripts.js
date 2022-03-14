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


//get data from form

let fName = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

console.log(fName);
console.log(email);
console.log(message);