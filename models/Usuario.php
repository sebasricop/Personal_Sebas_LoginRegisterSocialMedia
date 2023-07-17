<?php
//hola

class Usuario extends Conectar{
    public function get_login($usu_email, $usu_pass){
        $conectar = parent::conexion();
        parent::set_names();
        $sql="select * from tm_usuario where usu_email=? and usu_pass=?";
        $sql=$conectar->prepare($sql); 
        $sql->bindValue(1,$usu_email);  
        $sql->bindValue(2,$usu_pass);  
        $sql->execute();
        return $resultado = $sql->fetchAll();
     }
    public function register_usuario($usu_nom, $usu_email, $usu_pass)
    {
        $conectar = parent::conexion();
        parent::set_names();
        $sql = "INSERT INTO `tm_usuario` (usu_id, usu_nom, usu_email, usu_pass, estado) VALUES (NULL, ?, ?, ?, '1')";
        $sql = $conectar->prepare($sql);
        $sql->bindValue(1, $usu_nom);
        $sql->bindValue(2, $usu_email);
        $sql->bindValue(3, $usu_pass);
        $sql->execute();
        return $resultado = $sql->fetchAll();
    }
    public function get_correo($usu_email)
    {
        $conectar = parent::conexion();
        parent::set_names();
        $sql = "select * from `tm_usuario` where usu_email=? AND estado = '1'";
        $sql = $conectar->prepare($sql);
        $sql->bindValue(1, $usu_email);
        $sql->execute();
        return $resultado = $sql->fetchAll();
     }
}

?>