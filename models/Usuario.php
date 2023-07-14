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
     public function register_usuario(){
        $conectar = parent::conexion();
        parent::set_names();
        $sql="INSERT INTO `tm_usuario` (`usu_id`, `usu_nom`, `usu_email`, `usu_pass`, `estado`) VALUES (NULL, 'sebas', 'sebas@gmail.com', '123456', '1');";
        $sql=$conectar->prepare($sql); 
        $sql->bindValue(1,$usu_email);  
        $sql->bindValue(2,$usu_pass);  
        $sql->execute();
        return $resultado = $sql->fetchAll();
     }
}

?>