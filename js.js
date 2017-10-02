 $(document).ready(function() {
   var p1 = 0;
   var p2 = 0;
   var winningsScores = 21;
   var namep1 = "";
   var namep2 = "";

   $('#winning-score').click(function() {
     winningScore = parseInt($('#input-winning-score').val());
   });

   $('#submit-name-p1').click(function() {
    namep1 = $('#input-name-p1').val();
     $('#place-name-p1').html('<h1>' + namep1 + '</h1>');
   });

   $('#submit-name-2').click(function() {
    namep2 = $('#input-name-p2').val();
     $('#place-name-p2').html('<h1>' + namep2 + '</h1>');
   });

   $('#up-p1').click(function() {
     $('#score-p1').html(function(i, val) {
       p1 = val * 1 + 1
       if (p1 >= winningScore && p1 >= p2 + 2) {
         $('#place-name-p1').html('<h1> ' + namep1 + ' wins!</h1>');
       }
       return p1
     });
   });

   $('#up-p2').click(function() {
     $('#score-p2').html(function(i, val) {
       p2 = val * 1 + 1
       if (p2 >= winningScore && p2 >= p1 + 2) {
         $('#place-name-p2').html('<h1> ' + namep2 + ' wins!</h1>');
       }
       return p2
     });
   });

   $('#down-p1').click(function() {
     $('#score-p1').html(function(i, val) {
       p1 = val * 1 - 1;
       return p1
     });
   });

   $('#down-p2').click(function() {
     $('#score-p2').html(function(i, val) {
       p2 = val * 1 - 1;
       return p2
     });
   });

   $('.score-change').click(function() {
     if ((p1 == winningScore - 1 && p1!=p2 && p2 != winningScore - 1 && p1>p2) || (p1 >= winningScore - 1 && p1>p2)) {
       $('#who-ball-p2').html('<h1> ' + namep2 + ' is serving</h1>');
       $('#who-ball-p2').show();
       $('#who-ball-p1').hide();
     } else if ((p2 == winningScore - 1 && p2!=p1 && p1 != winningScore - 1 & p2>p1) || (p2 >= winningScore - 1 && p2>p1)) {
       $('#who-ball-p1').html('<h1> ' + namep1 + ' is serving</h1>');
       $('#who-ball-p1').show();
       $('#who-ball-p2').hide();
     } else if (((Math.floor((p1 + p2) / 5)) % 2) == 1 && p1 < winningScore - 1 && p2 < winningScore - 1) {
       $('#who-ball-p2').html('<h1> ' + namep2 + ' is serving</h1>');
       $('#who-ball-p2').show();
       $('#who-ball-p1').hide();
     } else if (((Math.floor((p1 + p2) / 5)) % 2) == 0 && p1 < winningScore - 1 && p2 < winningScore - 1) {
       $('#who-ball-p1').html('<h1> ' + namep1 + ' is serving</h1>');
       $('#who-ball-p1').show();
       $('#who-ball-p2').hide();
     }
   });







 });
