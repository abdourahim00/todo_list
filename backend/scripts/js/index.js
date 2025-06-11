
document.querySelector("body > .p1 > .p0 > .right > .contact").addEventListener("click", function(){
    document.getElementById("contact_view").scrollIntoView()
})


let dropdown_val = 'dropdown';




function dropdown_click() {

    //Recuperation du conteneur dropdown
    let dropdown_ctn = document.querySelector("body > .dropdown_ctn");


    dropdown_val = (dropdown_val == 'dropdown') ? 'dropup' : 'dropdown';

    //Affichage du button dropdown et camouflage du menu
    if (dropdown_val == 'dropdown') {
        dropdown_btn.querySelector("img.dropdown").style.display = 'block';
        dropdown_btn.querySelector("img.dropup").style.display = 'none';
        dropdown_ctn.style.display = 'none'

        //Affichage du button dropup et du menu
    } else if (dropdown_val == 'dropup') {
        dropdown_btn.querySelector("img.dropdown").style.display = 'none';
        dropdown_btn.querySelector("img.dropup").style.display = 'block';
        dropdown_ctn.style.display = 'flex'


    }


}



//Recuperation de l'element contenant le listener du dropdown

let dropdown_btn = document.querySelector('.p0 .dropdown_icon_ctn');

//Ajout d'un listener au button dropdown
dropdown_btn.addEventListener('click', dropdown_click)














//FONCTION DE GESTION DES ELEMENTS DU DROPDOWN

function dropdown_element_click(element){

    dropdown_click()
    if(element.classList.contains("nos_produits")){
        
        document.getElementById("nos_produits_view").scrollIntoView()
        
    }else if(element.classList.contains("nos_services")){
        document.getElementById("nos_services_view").scrollIntoView()

        
    }else if(element.classList.contains("qsn")){
        document.getElementById("qsn_view").scrollIntoView()

        
    }else if(element.classList.contains("contact")){
        document.getElementById("contact_view").scrollIntoView()

        
    }

    


}





let dropdown_nos_produits_btn = document.querySelector("body > .dropdown_ctn span.nos_produits")
let dropdown_nos_services_btn = document.querySelector("body > .dropdown_ctn span.nos_services")

let dropdown_qsn_btn = document.querySelector("body > .dropdown_ctn span.qsn")
let dropdown_contact_btn = document.querySelector("body > .dropdown_ctn span.contact")



//AJOUT DE LISTENER

let dropdown_elements = document.querySelectorAll("body > .dropdown_ctn span")
for(let e = 0; e < dropdown_elements.length; e++){
    let el = dropdown_elements[e]
    el.addEventListener("click", function(){
        dropdown_element_click(el)
    })
}











let init_arr = init("firefly1");
let c1 = init_arr[0]
let firefly1 = init_arr[1]
let w1 = (firefly1.width = window.innerWidth)
let h1 = (firefly1.height = window.innerHeight);


init_arr = init("firefly2");
let c2 = init_arr[0]
let firefly2 = init_arr[1]
let w2 = (firefly2.width = window.innerWidth)
let h2 = (firefly2.height = window.innerHeight);
//initiation

class firefly{
    constructor(c, w, h){
        this.x = Math.random()*w;
        this.y = Math.random()*h;
        this.s = Math.random()*2;
        this.ang = Math.random()*2*Math.PI;
        this.v = this.s*this.s/4;
    }
    move(){
        this.x += this.v*Math.cos(this.ang);
        this.y += this.v*Math.sin(this.ang);
        this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
    }
    show(c){
        c.beginPath();
        c.arc(this.x,this.y,this.s,0,2*Math.PI);
        c.fillStyle="#fddba3";
        c.fill();
    }
}

let f = [];

function draw(c, w, h) {
    if(f.length < 100){
        for(let j = 0; j < 10; j++){
        f.push(new firefly(c, w, h));
    }
        }
    //animation
    for(let i = 0; i < f.length; i++){
        f[i].move();
        f[i].show(c);
        if(f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h){
        f.splice(i,1);
        }
    }
}

let mouse1 = {};
let last_mouse1 = {};

let mouse2 = {};
let last_mouse2 = {};

firefly1.addEventListener(
    "mousemove",
    function(e) {
        last_mouse1.x = mouse1.x;
        last_mouse1.y = mouse1.y;

        mouse1.x = e.pageX - this.offsetLeft;
        mouse1.y = e.pageY - this.offsetTop;
    },
    false
    );


firefly2.addEventListener(
    "mousemove",
    function(e) {
        last_mouse2.x = mouse2.x;
        last_mouse2.y = mouse2.y;

        mouse2.x = e.pageX - this.offsetLeft;
        mouse2.y = e.pageY - this.offsetTop;
    },
    false
    );
function init(elemid) {
    let canvas = document.getElementById(elemid),
    c = canvas.getContext("2d"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight);
    c.fillStyle = "rgba(30,30,30,1)";
    c.fillRect(0, 0, w, h);
    return [c, canvas];
}

window.requestAnimFrame = (function() {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
        window.setTimeout(callback);
        }
    );
});

function loop() {
    window.requestAnimFrame(loop);
    c1.clearRect(0, 0, w1, h1);
    draw(c1, w1, h1);
    c2.clearRect(0, 0, w2, h2);
    draw(c2, w2, h2);
}

window.addEventListener("resize", function() {
    (w1 = firefly1.width = window.innerWidth);
    (h1 = firefly1.height = window.innerHeight);
    (w2 = firefly2.width = window.innerWidth);
    (h2 = firefly2.height = window.innerHeight);
    loop();
});
loop();
setInterval(loop, 1000 / 60);

