$(document).ready(function () {
  $("#getDataButton").click(function () {
    // alert("Text: " + $("#passportNO").val());
    passportNumber = $("#passportNO").val();
    // $("#pptno").html(passportNumber);
    getUserData();
    // alert(passportNumber);N1234567
  });

  $(".lang").hide();

  //   alert("Hello");
});

var rootURL =
  "https://embassyofsrilankauae.com/wp-json/cfdb7/json/search/jzeZemHYQUu3zLsfPHp8s5tzxjHHfR/8118/passport-no/";
var passportNumber;

//varibles for store JSON Data

var firstName = "Indunil";
var registerdDate;
function getUserData() {
  var URL = rootURL.concat(passportNumber);

  $.ajax({
    url: URL,
    error: function () {
      // will fire when timeout is reached
      alert("Time Out");
    },
    success: function (data, status) {
      //do something
      $(".lang").fadeIn("slow");

      if (data.meg && data.meg == "No data exist") {
        $("#fName").val("No First Name Data");
        $("#lName").val("No Last Name Data");
        $("#regDate").val("No Reg Date Data");
        $("#successMessage").val(
          "We don't have data about you. You may have not registerd"
        );

        $("#sinhalaemb").click(function () {
          // $("#embnm").html("<h1>ශ්‍රි ලංකා තනාපති කාර්යලය</h1>");
          $("#title").html(' <h2 class="title">ලියාපදිංචි තොරතුරු</h2>');

          $("#successMessage").val("කනගාටුයි අප සතුව ඔබගේ තොරතුරු නොමැත");
        });
        $("#englishemb").click(function () {
          // $("#embnm").html("<h1>Embassy of Sri Lanka</h1>");
          $("#title").html(' <h2 class="title"> Registration Info</h2>');

          $("#successMessage").val("Sorry We don't have data about you");
        });
        $("#tamilemb").click(function () {
          //     $("#embnm").html("<h1> இலங்கை தூதரகம் </h1>");
          $("#title").html(' <h2 class="title"> பதிவு தகவல்</h2>');

          $("#successMessage").val(
            "மன்னிக்கவும், உங்களைப் பற்றிய தரவு எங்களிடம் இல்லை"
          );
        });

        // Get the modal
        var modal = document.getElementById("myModal");

        modal.style.display = "block";

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target == modal) {
            location.reload();
            modal.style.display = "none";
          }
        };
      } else {
        // assign variables
        var regDate = data.form_date;
        var firstName = data.your_name;
        var lastName = data.your_surname;

        // assign values to html
        $("#fName").val(firstName);
        $("#lName").val(lastName);
        $("#regDate").val(regDate);
        $("#successMessage").val(
          "Successfully Registerd and we are working on it"
        );

        $("#sinhalaemb").click(function () {
          // $("#embnm").html("<h1>ශ්‍රි ලංකා තනාපති කාර්යලය</h1>");
          $("#title").html(' <h2 class="title">ලියාපදිංචි තොරතුරු</h2>');

          $("#successMessage").val("ඔබ සාර්තකව ලියාපදින්චි වී ඇත");
        });
        $("#englishemb").click(function () {
          // $("#embnm").html("<h1>Embassy of Sri Lanka</h1>");
          $("#title").html(' <h2 class="title"> Registration Info</h2>');

          $("#successMessage").val(
            "Successfully Registerd and we are working on it"
          );
        });
        $("#tamilemb").click(function () {
          //     $("#embnm").html("<h1> இலங்கை தூதரகம் </h1>");
          $("#title").html(' <h2 class="title"> பதிவு தகவல்</h2>');

          $("#successMessage").val(
            "வெற்றிகரமாக பதிவுசெய்துள்ளோம், நாங்கள் அதைச் செய்கிறோம்"
          );
        });
      }
    },
    timeout: 3000, // sets timeout to 3 seconds
  });
}

// $.get(URL, (timeout = 3000), function (data, status) {
//   $(".lang").fadeIn("slow");

//   if (data.form_id) {
//     // assign variables
//     var regDate = data.form_date;
//     var firstName = data.your_name;
//     var lastName = data.your_surname;

//     // assign values to html
//     $("#fName").val(firstName);
//     $("#lName").val(lastName);
//     $("#regDate").val(regDate);
//     $("#successMessage").val("Successfully Registerd and we are working on it");
//   } else {
//     $("#fName").val("No First Name Data");
//     $("#lName").val("No Last Name Data");
//     $("#regDate").val("No Reg Date Data");
//     $("#successMessage").val(
//       "We don't have data about you. You may have not registerd"
//     );
//   }
// });
