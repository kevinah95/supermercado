<?php
    
    $newUser = json_decode(file_get_contents('php://input'));
    
    $mysqli = new mysqli("localhost", "root", "", "supermercado");
    /* check connection */
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    } 
    $stmt = $mysqli->prepare("CALL insertarUsuario(?,?,?,?,?,?)");
    $stmt->bind_param('ssssss', $email, $nombre, $p_apellido, $s_apellido, $password, $foto);
    
    $email = $newUser->email;
    $nombre = $newUser->nombre;
    $p_apellido = $newUser->p_apellido;
    $s_apellido = $newUser->s_apellido;
    $password = $newUser->password;
    $foto = $newUser->foto;
    $stmt->execute();
    echo 'registrado';
    $stmt->close();
    //echo("Insertado");
    $mysqli->close();
?>