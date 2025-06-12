
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








//-----------------------------------------Affichage des interfaces
//-----------------------------------------Affichage des interfaces
//-----------------------------------------Affichage des interfaces








//Variable utiles
//Variable utiles
//Variable utiles



//Titre Dashboard
let dashboard_title = document.querySelector("body > .p2 > .p0")

//Récupération du boutton retour
let return_btn = document.querySelector("body > .p2 > .return ")

//Récupération du boutton consulter
let consulter_btn = document.querySelector("body > .p2 > .p1 > .ctn#consulter > .slc_btn")

//Récupération du boutton ajouter
let ajouter_btn = document.querySelector("body > .p2 > .p1 > .ctn#ajouter > .slc_btn")

//Récupération du boutton modifier
let modifier_btn = document.querySelector("body > .p2 > .p1 > .ctn#modifier > .slc_btn")


//Récupération du boutton supprimer
let supprimer_btn = document.querySelector("body > .p2 > .p1 > .ctn#supprimer > .slc_btn")


//Récupération du container de selection
let slc_ctn = document.querySelector("body > .p2 > .p1 ")



//Récupération du container consulter
let consulter_ctn = document.querySelector("body > .p2 > .consulter_ctn")

//Récupération du container ajouter
let ajouter_ctn = document.querySelector("body > .p2 > .ajouter_ctn")

//Récupération du container modifier
let modifier_ctn = document.querySelector("body > .p2 > .modifier_ctn")


//Récupération du container supprimer
let supprimer_ctn = document.querySelector("body > .p2 > .supprimer_ctn")










//Fonctions utiles
//Fonctions utiles
//Fonctions utiles



//Désactivation des interfaces
function hide_slc_interfaces(){
    consulter_ctn.style.display = "none"
    ajouter_ctn.style.display = "none"
    modifier_ctn.style.display = "none"
    supprimer_ctn.style.display = "none"
    slc_ctn.style.display = "none"
    




}

//Récupération des taches sur le serveur en Backend

function getTasks(container){


    let operation = 'getTasks'
    var http = new XMLHttpRequest();
    var url = './scripts/php/backend.php';
    var params = 'operation='+operation;
    
 


    http.open('POST', url, true);

 
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Si l'opération s'est déroulé avec succès
        if(http.readyState == 4 && http.status == 200) {

            let response_json = http.response;
            let response_object = JSON.parse(response_json);

            //Si le conteneur est la partie consulter
            if(container == "consulter"){
                //On vide le conteneur 
                consulter_ctn.innerHTML = ""

                //Pour chaque tache créons son conteneur div
                for(task of response_object){
                    console.log(task)
                    let id = task.id
                    let date = task.created_at + " - Modifié le " + task.updated_at
                    let status = task.status
                    let todo = task.todo
                    let status_txt = status == 'pending' ? "En cours ..." : "Terminé"
                    
                    let task_ctn = document.createElement("div")
                    task_ctn.classList.add('task')
                    task_ctn.id = id
                    task_ctn.innerHTML += " <span id='date'> " + date + "</span>"
                    task_ctn.innerHTML += "<span id='status_round' class='"+ status +"'></span>"

                    task_ctn.innerHTML += "<span id='todo'>" + todo + " </span>"
                    task_ctn.innerHTML += "<span id='status_txt' class='"+ status +"'>"+ status_txt + "</span>"
                    //Injection dans le conteneur
                    consulter_ctn.appendChild(task_ctn)



                }


            }

            else if(container == "modifier"){
                //On vide le conteneur 
                modifier_ctn.innerHTML = ""

                //Pour chaque tache créons son conteneur div
                for(task of response_object){
                    console.log(task)
                    let id = task.id
                    let date = task.created_at + " - Modifié le " + task.updated_at
                    let status = task.status
                    let todo = task.todo
                 
                    
                    let task_ctn = document.createElement("div")
                    task_ctn.classList.add('task')
                    task_ctn.id = id
                    task_ctn.innerHTML += " <span id='date'> " + date + "</span>"
                    task_ctn.innerHTML += "<span onclick='markAsDone("+ id +")' id='status_round' class='"+ status +"'></span>"

                    task_ctn.innerHTML += "<input id='todo' value ='"+ todo + "'>"  
                    task_ctn.innerHTML += "<button class='modifier btn_t1' onclick ='modifyTask("+ id +")'>Modifier</button>"
                    //Injection dans le conteneur
                    modifier_ctn.appendChild(task_ctn)



                }


            }



            else if(container == "supprimer"){
                //On vide le conteneur 
                supprimer_ctn.innerHTML = ""

                //Pour chaque tache créons son conteneur div
                for(task of response_object){
                    console.log(task)
                    let id = task.id
                    let date = task.created_at + " - Modifié le " + task.updated_at
                    let status = task.status
                    let todo = task.todo
                    let status_txt = status == 'pending' ? "En cours ..." : "Terminé"
                    
                    let task_ctn = document.createElement("div")
                    task_ctn.classList.add('task')
                    task_ctn.id = id
                    task_ctn.innerHTML += " <span id='date'> " + date + "</span>"
                    task_ctn.innerHTML += "<span id='status_round' class='"+ status +"'></span>"

                    task_ctn.innerHTML += "<span id='todo'>" + todo + " </span>" 
                    task_ctn.innerHTML += "<button onclick ='deleteTask("+ id +")' class='supprimer btn_t1'>Supprimer</button>"
                    //Injection dans le conteneur
                    supprimer_ctn.appendChild(task_ctn)



                }


            }







                


        }
    }
    http.send(params);


}
 









//-----------------------------------------Consulter les taches




//Ajout d'un listener
consulter_btn.addEventListener("click", ()=>{
    //Désactivation des interfaces
    hide_slc_interfaces()
    //Activation de l'interface consulter
    consulter_ctn.style.display = "flex"
    dashboard_title.innerText = "Dashboard > Consulter les taches"
    return_btn.style.display = "flex"

    getTasks("consulter")


})








//-----------------------------------------Ajouter des taches




//Ajout d'un listener
ajouter_btn.addEventListener("click", ()=>{
    //Désactivation des interfaces
    hide_slc_interfaces()
    //Activation de l'interface ajouter
    ajouter_ctn.style.display = "flex"
    dashboard_title.innerText = "Dashboard > Ajouter des taches"
    return_btn.style.display = "flex"


})


//Récupération du boutton d'ajout de tache
let add_btn = ajouter_ctn.querySelector(".add_btn")

//Ajout d'un listener pour l'ajout vers le serveur
add_btn.addEventListener("click", ()=>{

    //Récupération de l'input du todo 
    let todo_input = ajouter_ctn.querySelector(".add_input")
    let todo_value = todo_input.value

    let operation = 'addTask'
    var http = new XMLHttpRequest();
    var url = './scripts/php/backend.php';
    var params = 'operation='+operation+'&todo='+todo_value;
    
 


    http.open('POST', url, true);

 
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Si l'opération s'est déroulé avec succès
        if(http.readyState == 4 && http.status == 200) {

            alert("Tache ajoutée avec succès")

            





                


        }
    }
    http.send(params);

})







//-----------------------------------------Modifier des taches




//Ajout d'un listener
modifier_btn.addEventListener("click", ()=>{
    //Désactivation des interfaces
    hide_slc_interfaces()
    //Activation de l'interface modifier
    modifier_ctn.style.display = "flex"
    dashboard_title.innerText = "Dashboard > Modifier des taches"
    return_btn.style.display = "flex"

    getTasks("modifier")



})



//Listener pour la modification de tache accompli ou Non
function markAsDone(id){

    let tasks = modifier_ctn.querySelectorAll(".task")
    for(let task of tasks){

        if(task.id == id){
            let status = task.querySelector("#status_round")
            if(status.classList.contains("pending")){
                status.classList.replace("pending", "done")

            }else if(status.classList.contains("done")){
                status.classList.replace("done", "pending")
                
            }
        }
        

    }
    
}

//Listener de modification pour chaque tache dans le serveur


function modifyTask(id){


    //Recupération de la valeur de status et de l'input todo
    let tasks = modifier_ctn.querySelectorAll(".task")
    let status_val = ""
    let todo_val = ""
    for(let task of tasks){

        if(task.id == id){
            let status = task.querySelector("#status_round")
            status_val = status.classList.contains("pending") == true ? "pending" : "done"

            let todo = task.querySelector("#todo")
            todo_val = todo.value

            

        }
        

    }

    let operation = 'modifyTask'
    var http = new XMLHttpRequest();
    var url = './scripts/php/backend.php';
    var params = 'operation='+operation+'&id='+id+'&todo='+todo_val+'&status='+status_val;
    
 


    http.open('POST', url, true);

 
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Si l'opération s'est déroulé avec succès
        if(http.readyState == 4 && http.status == 200) {

            alert("Tache modifiée avec succès")
            //Reinitialisation du container
            getTasks('modifier')

            





                


        }
    }
    http.send(params);

}





//-----------------------------------------Supprimer des taches



//Listener de suppression pour chaque tache dans le serveur
function deleteTask(id){


    let operation = 'deleteTask'
    var http = new XMLHttpRequest();
    var url = './scripts/php/backend.php';
    var params = 'operation='+operation+'&id='+id;
    
 


    http.open('POST', url, true);

 
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Si l'opération s'est déroulé avec succès
        if(http.readyState == 4 && http.status == 200) {

            alert("Tache Suprimée avec succès")
            //Reinitialisation du container
            getTasks('supprimer')

            





                


        }
    }
    http.send(params);

}



//Ajout d'un listener
supprimer_btn.addEventListener("click", ()=>{
    //Désactivation des interfaces
    hide_slc_interfaces()
    //Activation de l'interface supprimer
    supprimer_ctn.style.display = "flex"
    dashboard_title.innerText = "Dashboard > Supprimer des taches"
    return_btn.style.display = "flex"
    getTasks("supprimer")



})





//-----------------------------------------Boutton de retour




//Ajout d'un listener
return_btn.addEventListener("click", ()=>{
    //Désactivation des interfaces
    hide_slc_interfaces()
    //Activation de l'interface de selection
    slc_ctn.style.display = "flex"
    dashboard_title.innerText = "Dashboard"
    return_btn.style.display = "none"

})








