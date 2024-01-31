<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  
  require("conexion.php");
  $con=retornarConexion();

  $resultados=mysqli_query($con,"select id_modulo, nombre from modulos where id_ciclo=$_GET[ciclo]");
  $datos=array();
  while ( $fila = mysqli_fetch_array($resultados, MYSQLI_ASSOC))
      {
      $datos[]=$fila;
      }
 
  echo(json_encode($datos));
  mysqli_close($con);  
  
?>