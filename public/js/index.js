const { json } = require("sequelize");

const userForm = document.getElementById('user')

const formSubmission = (e) => {
    e.preventDefault();

const userValue = document.getElementById
('userNameInput').value;
console.log(userValue);
const emailValue = document.getElementById
('emailInput').value;
console.log(emailValue);
const passwordValue= document.getElementById
('passwordInput').value;
console.log(passwordValue);    

const postValue = fetch('/users/sign-up',{
    method: "POST",
    body: JSON.stringify({
        username: userValue,
        password: passwordValue,
        email: emailValue
    }),
    hearders: { 'Content-Type': 'application/json'},
} )
if(postValue.ok){
    alert("You signed up!");
}else{
    alert("wtf");
}
}

userForm.addEventListener('submit', formSubmission);
