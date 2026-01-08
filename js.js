
console.log("Hi World!");

let user_data = [];
let btn = document.querySelector("#btn");
let input = document.querySelectorAll("input");
let handler = document.querySelector(".handler");
let handler_2 = document.querySelector(".handler_2");
let user_name = document.querySelector("#user_name");
let password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm_password");
let siginin = document.querySelector("#siginin");
let confirm_input = document.querySelector(".confirm_password", "#confirm_password");
let goBackToLogin = document.querySelector("#back");
let login_p = document.querySelector(".login_p");
let sigin_p = document.querySelector(".sigin_p");


siginin.addEventListener("click", () => {
    confirm_password.style.display = "none";
    confirm_input.style.display = "none";
    goBackToLogin.style.display = "block"
    siginin.style.display = "none"
    input.forEach(el => {
        el.value = "";
    })
    login_p.style.display = "none";
    sigin_p.style.display = "block";
})

goBackToLogin.addEventListener("click", () => {
    confirm_password.style.display = "block";
    confirm_input.style.display = "block";
    goBackToLogin.style.display = "none"
    siginin.style.display = "block"
    input.forEach(el => {
        el.value = "";
    })
    login_p.style.display = "block";
    sigin_p.style.display = "none";
})

btn.addEventListener("click", () => {

    if (password.value !== confirm_password.value) {
        alert("The column 'password' and 'confirm password' don't match");
        return;
    }

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

    }

});




