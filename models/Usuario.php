<?

class Usuario extends Conectar{
    public function get_login($usu_email, $usu_pass){
        $conectar = parent::conexion();
        parent::set_names();
        $sql="select * from tm_usuario where usu_email=? and usu_pass=?";
        $sql=$conectar->prepare($sql); 
        $sql->bindValue(1,$usu_email);  
        $sql->bindValue(2,$usu_pass);  
     }
}

?>