 $(document).ready(function() {
   var p1 = 0;
   var p2 = 0;
   var winningsScores = 21;
   var namep1 = "";
   var namep2 = "";

   $('.modal').modal('show');

   $('#submit').click(function() {
     winningScore = parseInt($('#input-winning-score').val());
     namep1 = $('#input-name-p1').val();
      $('#place-name-p1').html('<h1 class="col-sm-5 col-xs-12 text-center">' + namep1 + '</h1>');
      namep2 = $('#input-name-p2').val();
       $('#place-name-p2').html('<h1 class="col-sm-5 col-xs-12 text-center">' + namep2 + '</h1>');
       $('img').show();
       $('button').show();
       $('h1').show();
   });

   $('#up-p1').click(function() {
       p1 = p1 + 1
       if (p1 >= winningScore && p1 >= p2 + 2) {
         $('#winner').html('<h1 class="col-sm-12 col-xs-12 text-center"> ' + namep1 + ' wins!</h1>');
       }
       $('#score-p1').html('<h1 class="col-sm-2 col-xs-12 text-center">' + p1 + '</h1>');
     });

   $('#up-p2').click(function() {
       p2 = p2 + 1
       if (p2 >= winningScore && p2 >= p1 + 2) {
         $('#winner').html('<h1 class="col-sm-12 col-xs-12 text-center"> ' + namep2 + ' wins!</h1>');
       }
       $('#score-p2').html('<h1 class="col-sm-2 col-xs-12 text-center">' + p2 + '</h1>');
     });

   $('#down-p1').click(function() {
       p1 = p1 - 1;
       return $('#score-p1').html('<h1 class="col-sm-2 col-xs-12 text-center">' + p1 + '</h1>');
     });

   $('#down-p2').click(function() {
       p2 = p2 - 1;
       $('#score-p2').html('<h1 class="col-sm-2 col-xs-12 text-center">' + p2 + '</h1>');
     });

   $('.score-change').click(function() {
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
