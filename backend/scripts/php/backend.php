<?php

    //Inclusion du fichier de connexion à la bdd
    include_once("./connexion_db.php");
    //Inclusion du fichier contenant les opérations, transaction avec la bdd
    include_once("./operations_db.php");

    //Récupération du nom de l'opération
    $operation = $_POST['operation'];

    if($operation == "getTasks"){
        //Récupération des taches
        $data = getTasks($conn);
        
        //Conversion en json
        $data_json = json_encode($data);

        //Envoi de la réponse
        echo($data_json);
        return;



    } elseif($operation == "addTask"){
        //Récupération du todo
        $todo = $_POST['todo'];

        //Ajout du todo dans la bdd
        addTask($conn, $todo);

        return;


    }


     elseif($operation == "modifyTask"){
        //Récupération de l'id
        $id = $_POST['id'];
        $todo = $_POST['todo'];
        $status = $_POST['status'];



        //Modification de la tache
        modifyTask($conn, $id, $todo, $status);

        return;


    }


    elseif($operation == "deleteTask"){
        //Récupération de l'id
        $id = $_POST['id'];

        //Suppression du todo dans la bdd (avec persistance juste le status change donc le task ne sera pas afficher au niveau du site)
        deleteTask($conn, $id);

        return;


    }



 

?>