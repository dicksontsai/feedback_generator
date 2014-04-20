<? define("ITERATIONS", 9) ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Feedback String Generator</title>
  <!-- <script src="js/fill_in.js"></script> -->
  <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
  <link rel="stylesheet" href="css/style.css">
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
  <script>
  $(function() {
    $( "#tabs" ).tabs();
  });
  </script>
</head>
<body>
 
<div id="tabs">
  <ul>
    <? for  ($i = 1; $i <= ITERATIONS; $i++) {
        echo "<li><a href='#tabs-$i'>Problem $i</a></li>";
    }
    ?>
  </ul>
  <? for  ($i = 1; $i <= ITERATIONS; $i++) {
        echo "<div id='tabs-$i'>
                    <p>This is Problem $i</p>
                    <button class='add-comment'>Add comment</button>
                    <div class='add-comment-form' style='display: none'>
                        Comment: <textarea class='comment-input'></textarea><br>
                        Point value: <input class='point-value-input'>
                        <button class='cancel-new-comment'>Cancel</button>                        
                        <button class='new-comment'>Create Comment</button>
                    </div>
                    <ul class='buttons-list' id='buttons-list-$i'></ul>
                    Total points for problem: <input class='point-output'  value='0'>
                    </div>";
    }
  ?>
</div>
<button id="compile">Compile Feedback</button>
<textarea id="output"></textarea>
<button id="grade-new">Grade New Student</button>
<script src="js/app.js"></script>
</body>
</html>