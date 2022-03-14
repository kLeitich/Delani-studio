let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;




let response = (name,email,message)=>{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;


    if (name=="") {
        alert("Enter a valid Name");
      } else if (email=="") {
        alert("enter a valid email");
      } else if (message=="") {
        alert("Enter a valid message");
      } else {
        alert("ok");
      }
}   