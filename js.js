 $(document).ready(function() {
   var p1 = 0;
   var p2 = 0;
   var winningsScores = 21;
   var namep1 = "";
   var namep2 = "";

   $('.modal').modal('show'); //show the set up screen

   $('#submit').click(function() { //sets up the game based on the paramiters from the set up modal
     winningScore = parseInt($('#input-winning-score').val());
     namep1 = $('#input-name-p1').val();
      $('#place-name-p1').html('<h1 class="col-sm-5 col-xs-12 text-center">' + namep1 + '</h1>');
      namep2 = $('#input-name-p2').val();
       $('#place-name-p2').html('<h2 class="col-sm-5 col-xs-12 text-center">' + namep2 + '</h2>');
       $('#place-name-p2-small').html('<h3 class="col-sm-5 col-xs-12 text-center">' + namep2 + '</h3>');
       $('img').show();
       $('button').show();
       $('h1').show();
   });

   $('#up-p1').click(function() { //increments the score up for player 1
       p1 = p1 + 1
       if (p1 >= winningScore && p1 >= p2 + 2) { //checks to see if the game was won
         $('#winner').html('<h1 class="col-sm-12 col-xs-12 text-center"> ' + namep1 + ' wins!</h1>');
       }
       $('#score-p1').html('<h1 class="col-sm-2 col-xs-12 text-center">' + p1 + '</h1>'); //if the game is not one updates the score
     });

   $('#up-p2').click(function() { //increments the score up for player 2
       p2 = p2 + 1
       if (p2 >= winningScore && p2 >= p1 + 2) { //checks to see if the game was won
         $('#winner').html('<h1 class="col-sm-12 col-xs-12 text-center"> ' + namep2 + ' wins!</h1>');
       }
       $('#score-p2').html('<h1 class="col-sm-2 col-xs-12 text-center">' + p2 + '</h1>');  //if the game is not one updates the score
     });

   $('#down-p1').click(function() { //lowers the score by one for player 1
       p1 = p1 - 1;
       return $('#score-p1').html('<h1 class="col-sm-2 col-xs-12 text-center">' + p1 + '</h1>');
     });

   $('#down-p2').click(function() { //lowers the score by one for player 2
       p2 = p2 - 1;
       $('#score-p2').html('<h1 class="col-sm-2 col-xs-12 text-center">' + p2 + '</h1>');
     });

   $('.score-change').click(function() { //checks to see who is serving
     if ((p1 == winningScore - 1 && p1!=p2 && p2 != winningScore - 1 && p1>p2) || (p1 >= winningScore - 1 && p1>p2)) {
       $('#who-ball-p2').html('<h1 class="text-center col-sm-12 col-xs-12"> ' + namep2 + ' is serving</h1>');
       $('#who-ball-p2').show();
       $('#who-ball-p1').hide();
     } else if ((p2 == winningScore - 1 && p2!=p1 && p1 != winningScore - 1 & p2>p1) || (p2 >= winningScore - 1 && p2>p1)) {
       $('#who-ball-p1').html('<h1 class="text-center col-sm-12 col-xs-12"> ' + namep1 + ' is serving</h1>');
       $('#who-ball-p1').show();
       $('#who-ball-p2').hide();
     } else if (((Math.floor((p1 + p2) / 5)) % 2) == 1 && p1 < winningScore - 1 && p2 < winningScore - 1) {
       $('#who-ball-p2').html('<h1 class="text-center col-sm-12 col-xs-12"> ' + namep2 + ' is serving</h1>');
       $('#who-ball-p2').show();
       $('#who-ball-p1').hide();
     } else if (((Math.floor((p1 + p2) / 5)) % 2) == 0 && p1 < winningScore - 1 && p2 < winningScore - 1) {
       $('#who-ball-p1').html('<h1 class="text-center col-sm-12 col-xs-12"> ' + namep1 + ' is serving</h1>');
       $('#who-ball-p1').show();
       $('#who-ball-p2').hide();
     }
   });







 });
