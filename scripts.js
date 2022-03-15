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



//validation function

const correctEmail = (email)=> {
    var validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.match(validEmail)) {
    alert("Enter a valid email");
  }
}
const CorrectNameMessage =(name,message)=>{
    if (name ==""){
        alert("Required input, Input your first Name")
    }else if (message==""){
        alert("Required input, input your  message")
    }
}

//get data from form
let form = document.getElementById('userInput');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let fName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    correctEmail(email);
    CorrectNameMessage(fName,message);
    if (fName != "" && email != "" && message != "") {
      alert("Message Sent")
      $("#userInput").trigger("reset");
    };
    
});

//contact form

// const SuccessContact = (name,email,message)=>{

//   if (fName != "" && email != "" && message != "") {
    


//     $('#userInput').hide();
//     $('.btn,.contact-success').click(function(){
// 		$('#userInput,.contact-success').toggle();
//     });


// }};

// $("#userInput").hide();
    // $('#userInput').submit(function(){
    // $(".contact-success").show()});
    // $("#userInput").trigger("reset");

//mail api


// fetch('https://api.sendgrid.com/v3/mail/send')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err) );

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => console.log(data))

// const payload = {
//     userId: 1,
//     id: 1,
//     title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur



// fetch('https://api.sendgrid.com/v3/mail/send/', {
//     method: 'POST',
//     body: JSON.stringify({
//         'email': 'user@example.com',
//         'message': 'Your message has been received.',
        
//     }),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(response => {
//     console.log(response.status);
//       return response.json()
//   })
//   .then(data => console.log(data))
//     .catch ((err) => {
//         console.log(err);
// });
