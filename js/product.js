let language = document.querySelector(".language")
let dropdown = document.getElementById('dropdown-language')

language.addEventListener('click', (e) =>{
    dropdown.style.transform = ' scale(1)'
});

window.addEventListener('click',function(e){
if(e.target!==dropdown && e.target !== language){
    dropdown.style.transform = ' scale(0)'
}
    
});

let login = document.querySelector('.login');
let dropdownuser = document.getElementById('dropdown-user-infor');

login.addEventListener('click',(e)=>{
    dropdownuser.style.transform = "scale(1)"
})

window.addEventListener('click',(e)=>{
    if(e.target !== login && e.target!== dropdownuser){
        dropdownuser.style.transform = "scale(0)"
    }
})

// logic phần log-out

let logout = document.getElementById('log-out');
logout.addEventListener('click',(e)=>{
    
    window.location.href="/shopgames.html#"
    
})