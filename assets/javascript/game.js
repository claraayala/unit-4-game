
    var targetNumber;
    var counter = 0;
    var totalWins = 0;
    var totalLosses = 0;

    var startandStop = function () {

      $("#sonicbuttons").empty();

      targetNumber = Math.floor(Math.random() * 122) + 1;

      $("#number-to-guess").html(targetNumber);


      for (var i = 0; i < 4; i++) {

        var numberOptions = Math.floor(Math.random() * 12) + 1;
        var imageSonic1 = $("<img>");




        $(imageSonic1).addClass("sonic-image");

        
        $(imageSonic1).attr("src", "https://images-eu.ssl-images-amazon.com/images/I/81yM0eCnHsL.png");




        $(imageSonic1).attr("data-sonicvalue", numberOptions);


        $("#sonicbuttons").append(imageSonic1);
      }
    }

    startandStop();

    $(document).on("click", ".sonic-image", function () {


      var buttonValue = parseInt($(this).attr("data-sonicvalue"));


      counter += buttonValue;


      $("#newscore").html(counter);



      if (counter === targetNumber) {
        totalWins++;
        $("#totalwins").html(totalWins);
        counter = 0;
        startandStop();

      }

      else if (counter > targetNumber) {
        totalLosses++;
        $("#totallosses").html(totalLosses);
        counter = 0;
        startandStop();


      }

    })
  


  


