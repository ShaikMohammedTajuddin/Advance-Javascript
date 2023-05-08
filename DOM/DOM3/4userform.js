function userform(event){
    event.preventDefault()
    let nameValue = document.getElementById('name').value;
    let emailValue = document.getElementById('email').value;
    console.log(nameValue, emailValue);
}