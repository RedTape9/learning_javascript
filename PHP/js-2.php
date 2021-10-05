<html>

<head>
  <title>PHP und JavaScript</title>
  <?php
  $variable1 = "";
  if (isset($_POST["text"]) && !empty($_POST["text"]) && 
      is_string($_POST["text"])) {
    $variable1 = addslashes($_POST["text"]);
    $ersetzung = array(
      "\n" => "\\n",
      "\r" => "\\r",
      "\t" => "\\t"
      );
      $variable2 = strtr($variable1, $ersetzung);
      echo("<script>\n");
      echo("var phpVariable = \"$variable2\";\n");
      echo("window.alert(phpVariable);\n");
      echo("</script> ");
    }
  ?>
</head>

<body>
  <form method="post" action="<?php echo 
    htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    <b>Text:</b>
    <textarea name="text" rows="10" cols="70"><?php
    echo(htmlspecialchars(stripslashes($variable1)));
  ?></textarea>
    <br />
    <input type="submit" value="Daten versenden" />
  </form>
</body>

</html>