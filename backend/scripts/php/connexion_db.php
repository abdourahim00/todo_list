<?php


    //*****************Fichier de configuration d'acces a la base de donnees  ***********************/
    //On utilise l'extension PDO pour l'etablissement des connectionn a la base de donnnees pour ne pas changer le code lors d'une migration vers
    //un autre type de serveur : compatible avec mysql, oracle


    //Le type de serveur utilise pour la connection a la base de donnees
    $server_type = "mysql";
    
    //Addresse du Server

    $server_host = "localhost";

    

    //Nom d'utilisateur

    $username = "root";

    //Mot de passe

    $password = "";

    //Nom de la base de donnes

    $db_name = 'todo_db';

    //------------------------------------------Etablissement de la connection a la base de donnees

    try{


        //Entete numero 1 de la connexion PDO 
        $Entete =  $server_type . ":host=" . $server_host . ";dbname=" . $db_name;  
        $conn = new PDO($Entete, $username, $password );
        $conn->exec("set names 'utf8'");
        

    //-------------------------------------------Sauf si erreur    
    }catch(PDOException $e){
        echo($e);
    }







?>