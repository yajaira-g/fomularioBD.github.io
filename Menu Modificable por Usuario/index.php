<?php
header("Location: https://santosy.infinityfreeapp.com/");
exit();
?>

$title = 'Menú de la Semana';
$paragraph = 'En esta semana tenemos una variedad de opciones para escoger. 
Es importante que al elegir sepas hacerlo en el orden indicado para obtener los mejores resultados.';
?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menú Dinámico</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div id="menu"></div>

  <main>
    <h1><?php echo $title; ?></h1>
    <p>
      <?php echo $paragraph;?>
    </p>
  </main>

  <script src="script.js"></script>
</body>

</html>
