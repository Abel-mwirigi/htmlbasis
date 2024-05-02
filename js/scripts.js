  //  $(document).ready(function() {
  //       $("button#green").click(function() {
  //         $("body").removeClass();
  //         $("body").addClass("green-background");
  //       });

  //       $("button#yellow").click(function() {
  //         $("body").removeClass();
  //         $("body").addClass("yellow-background");
  //       });

  //       $("button#red").click(function() {
  //         $("body").removeClass();
  //         $("body").addClass("red-background");
  //       });
  //     });

    // $(document).ready(function() {
    //     $("button#hello").click(function() {
    //       $("ul").prepend("<li>Hello!</li>");
    //     });

    //     $("button#goodbye").click(function() {
    //       $("ul").prepend("<li>Goodbye!</li>");
    //     });

    //     $("button#stop").click(function() {
    //       $("ul").prepend("<li>Stop copying me!</li>");
    //     });
    //   });

      // $(document).ready(function() {
      //    $("button#hello").click(function() {
      //     $("ul#user").prepend("<li>Hello!</li>");
      //     $("ul#webpage").prepend("<li>Why hello there!</li>");
      //     $("ul").children("li").first().click(function(){
      //       $(this).remove();
      //     });
      //     // $("ul#webpage").children("li").first().click(function(){
      //     //   $(this).remove();
      //     // });
      //   });

      //   $("button#goodbye").click(function() {
      //     $("ul#user").prepend("<li>Goodbye!</li>");
      //     $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
      //   });

      //   $("button#stop").click(function() {
      //     $("ul#user").prepend("<li>Stop copying me!</li>");
      //     $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
      //   });
      // });
    

      // var globalString = "This is a global variable";1

      // function sampleFunction() {
      //   alert(globalString);
      //   globalString = "This is a global variable update!!";2
      //   alert(globalString);
      // }

      // alert(globalString); 1
      // sampleFunction();1,2
      // alert(globalString);2

      // $(document).ready(function(){
      //   $("#blanks form").submit(function(event){
      //     var person1Input = $("input#person1").val();
      //     var person2Input = $("input#person2").val();
      //     var animalInput = $("input#animal").val();
      //     var exclamationInput = $("input#exclamation").val();
      //     var verbInput = $("input#verb").val();
      //     var nounInput = $("input#noun").val();

      //     $(".person1").text(person1Input);
      //     $(".person2").text(person2Input);
      //     $(".animal").text(animalInput);
      //     $(".exclamation").text(exclamationInput);
      //     $(".verb").text(verbInput);
      //     $(".noun").text(nounInput);

      //     $("#story").show();
      //     event.preventDefault();
      //   });
      // });

      // $(document).ready(function(){
      //   $("#blanks form").submit(function(event){
      //     var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

      //     blanks.forEach(function(blank){
      //       var userInput = $("input#" + blank).val();
      //       $("." + blank).text(userInput);
      //     });
      //     var beverage = $("select#beverage").val();
      //     var flavor = $("input:radio[name=flavor]:checked").val();
      //     var dob = $("#born").val();
      //     var favColor = $("#color").val();

      //     $("#story").show();
      //     event.preventDefault();
      //   });
      // });


      var rabbitName = "Njoro";

      function hoppity() {
        alert(rabbitName);
        rabbitName="Fredi";
      }

      hoppity();
      alert(rabbitName);
