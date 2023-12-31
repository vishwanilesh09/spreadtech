const email = document.getElementById("email")
const password = document.getElementById("password")

const btnSubmit = document.getElementById("btn_submit")

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    // console.log(email.value, password.value);

    email.value = email.value.trim()
    password.value = password.value.trim()

    if (!email.value)
        return alert("Please fill email field!");

    if (!isEmail(email.value))
        return alert("Invalid email please try again!");

    if (!password.value)
        return alert("Please fill password field!")


    const user = JSON.parse(localStorage.getItem("user"));

    if (email.value === user.email && dcodeIO.bcrypt.compareSync(password.value, user.password)) {
        return alert("Log in successfull!")
    }
    else {
        return alert("Login Id/Password is Incorrect!");
    }


});

function isEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}
