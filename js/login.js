// let loginForm = document.getElementById("loginForm");

// loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const account = JSON.parse(localStorage.getItem('account'))
//     let name = document.getElementById("name");
//     let password = document.getElementById("password");


//     if (name.value ===
//         '' || password.value === '') {
//         alert("Ensure you input a value in both fields!");
//     } else if (name.value !== account.name || password.value !== account.password) {
//         alert("CCs!");
//     } else {

//         name.value = "";
//         password.value = "";
//         alert('Login success !')
//     }

// });
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();

        const account = JSON.parse(localStorage.getItem('account'));
        let name = document.getElementById('name').value;
        let password = document.getElementById('password').value;

        if( name == '' || password == '' ){
            alert ('Chưa nhập tên tk và mk');
        }else if( name !== account.name || password !== account.password){
            alert(' Sai tên kt hoặc mk !');
        }else{
            name = "";
            password = "";
            alert(' Đăng nhập thành công')
            window.location.href="user.html"
        }

})
    

    
    

    
    

