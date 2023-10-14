
// style phần login

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


// style phần ngôn ngữ

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

//





















var image = ["./img/tìm hiểu và nên xem/Pubg.jpg",
    "./img/tìm hiểu và nên xem/CSGO.jpg",
    "./img/tìm hiểu và nên xem/naraka.jpg", 
    "./img/tìm hiểu và nên xem/dota2.jpg"
    ];
var num = 0;
function prev(){

    let slider = document.getElementById('slider-mst-see');
    num--;
    if(num<0){
        num = image.length - 1; 
    }
    slider.src = image[num];
}

function next(){
    let slider = document.getElementById('slider-mst-see');
    num++;
    if(num>=image.length){
    
        num = 0;
    }
    slider.src = image[num]
} 
