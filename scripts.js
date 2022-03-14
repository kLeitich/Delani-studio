let columns = ["design1", "development1", "product1"];

columns.forEach((col) => {
  $(`#${col}-col`).click((e) => {
    //prevent the page from going to the top
    e.preventDefault();

    $(`.${col}-info`).toggle();
    $(`#${col}-development img`).toggle();
    $(`#${col}-development p`).toggle();
  });
});



let fName = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

console.log(fName);
console.log(email);
console.log(message);