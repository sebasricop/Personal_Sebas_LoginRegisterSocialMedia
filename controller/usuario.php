<?php

require_once("../config/conexion.php");
require_once("../models/Usuario.php");
$usuario = new Usuario();

switch ($_GET["op"]) {
    case "acceso":
        $datos = $usuario->get_login($_POST["usu_email"], $_POST["usu_pass"]);
        if (is_array($datos) == true and count($datos) > 0) {
           echo "1";
        } else {
            echo "0";
        }
        break;
}
