console.log("Hi World!");


// let user_data = [{
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: ""
// }];

let user_data = [];

let createAccaunt = document.querySelector("#btn");
let input = document.querySelectorAll("input");


createAccaunt.addEventListener("click", () => {
    let user = {};
    input.forEach(el => {
        user[el.name] = el.value;
    })
    user_data.push(user)
    console.log(user_data);
})
