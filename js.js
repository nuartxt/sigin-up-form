console.log("Hi World!");

let user_data = [];
let btn = document.querySelector("#btn");
let input = document.querySelectorAll("input");
let handler = document.querySelector(".handler");
let handler_2 = document.querySelector(".handler_2");
let user_name = document.querySelector("#user_name");

let password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm_password");





btn.addEventListener("click", () => {


    if (password.value == confirm_password.value) {

        //
        let user = {};
        input.forEach(el => {
            user[el.name] = el.value;
        });
        user_data.push(user);
        //


        user_name.textContent = user.first_name

        //
        let user_values = Object.values(user);
        if (user_values.every(el => el.length > 0)) {
            handler.style.display = "none";
            handler_2.style.display = "block";
            console.log(user);
        }
        //

    } else {
        alert("The column 'password' and 'confirm password' don't match");
    }

});




