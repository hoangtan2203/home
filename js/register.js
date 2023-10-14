let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();


    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let confirmPW = document.getElementById("confirmPW");
    

    if (name.value == "" || password.value == "" || email.value == "" || phone.value == "" || confirmPW.value == '') {
        alert("Ensure you input a value in both fields!");
    } else if (password.value !== confirmPW.value) {
        alert("Passsword khong giong nhau");
    } else {
        localStorage.setItem("account", JSON.stringify({ name: name.value, password: password.value, confirmPW: confirmPW.value, email: email.value, phone: phone.value }));
        name.value = "";
        password.value = "";
        confirmPW.value = "";
        email.value = "";
        phone.value = "";
        alert (' Đăng ký thành công')
        window.location.href = '/login.html#';
    }

})
// function saveData() {
//     let name = document.getElementById("name").value;
//     let password = document.getElementById("password").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;
//     let confirmPW = document.getElementById("confirmPW").value;
//     let user_data = []
    
//     user_data = JSON.parse(localStorage.getItem("accounts")) ? JSON.parse(localStorage.getItem("accounts")) : []

//     if(user_data.some((v) => v.email == email)) alert("email da ton tai")
   
//     else{
//         user_data.push({
//             "name" : name,
//             "pass" : password,
//             "email" : email,
//             "phone" : phone
//         })
//     }

//     localStorage.setItem("accounts", JSON.stringify(user_data))
//     window.location.href = '/login.html#';
// }



