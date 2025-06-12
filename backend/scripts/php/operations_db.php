<?php


    function getTasks($conn){
        //Récupération de tous les taches qui n'ont pas été supprimés
        $sql_request = "SELECT * FROM  tasks WHERE status <> 'deleted' ORDER BY created_at DESC ";
        $sql_response = $conn->query($sql_request);
        $sql_response = $sql_response->fetchAll();
        return $sql_response;

    }

    function addTask($conn, $todo){
        //Récupération de tous les taches qui n'ont pas été supprimés
        $sql_request = "INSERT INTO tasks (todo, status) VALUES ('$todo', 'pending');";
        $sql_response = $conn->query($sql_request);
       

    }

    
    function modifyTask($conn, $id, $todo, $status){
        $sql_request = "UPDATE tasks SET status = '$status', todo = '$todo' WHERE id ='$id';";
        $sql_response = $conn->query($sql_request);
       

    }



     function deleteTask($conn, $id){
        $sql_request = "UPDATE tasks SET status = 'deleted' WHERE id ='$id';";
        $sql_response = $conn->query($sql_request);
       

    }




?>