<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","ciclos");
  return $con;
}
?>