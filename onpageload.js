$(document).ready(function () {
  var langnum = 0;
  //language change
  $(".lang").fadeIn("slow");
  $("#Register").hide();

  $("#sinhalaemb").click(function () {
    langnum = 0;
    // $("#embnm").html("<h1>ශ්‍රි ලංකා තනාපති කාර්යලය</h1>");
    // $("#title").html(' <h2 class="title">ලියාපදිංචි තොරතුරු</h2>');
    $("#title").html(' <h1 class="title">ආයුබෝවන්!</h1>');
    $("#welcomemsgpra").text(
      "එක්සත් අරාබි එමීර් රාජ්‍යයේ ශ්‍රී ලංකා තානාපති කාර්යාලය විසින් ක්‍රියාත්මක, ශ්‍රී ලාංකිකයන් නැවත මව්බිමට ගෙන්වා ගැනීම සඳහා වන ලියාපදිංචිය තහවුරු කරදීමේ ක්ෂණික නිල සේවාව සඳහා ඔබව ගෞරවයෙන් පිළිගනිමු !"
    );
    $("#passportNO").attr(
      "placeholder",
      "කරුණාකර ඔබගේ ගුවන් බලපත්‍ර අංකය යොදන්න."
    );
  });
  $("#englishemb").click(function () {
    langnum = 1;
    // $("#embnm").html("<h1>Embassy of Sri Lanka</h1>");
    // $("#title").html(' <h2 class="title"> Registration Info</h2>');
    $("#title").html(' <h1 class="title"> WELCOME!</h1>');
    $("#welcomemsgpra").text(
      "We welcome you to the Repartiation Registration Status Checking Platform of Sri Lankan Embassy in the United Arab Emirates!"
    );

    $("#passportNO").attr(
      "placeholder",
      "You are kindly requested to enter your passport number to check the status."
    );
  });
  $("#tamilemb").click(function () {
    langnum = 2;

    //     $("#embnm").html("<h1> இலங்கை தூதரகம் </h1>");
    // $("#title").html(' <h2 class="title"> பதிவு தகவல்</h2>');

    $("#title").html(' <h1 class="title"> வரவேற்பு!</h1>');
    $("#welcomemsgpra").text(
      "ஐக்கிய அரபு எமிரேட்ஸ் இலங்கை தூதரகத்திற்கு உங்களை வரவேற்கிறது."
    );
    $("#passportNO").attr(
      "placeholder",
      "நிலையைச் சரிபார்க்க உங்கள் பாஸ்போர்ட் எண்ணை உள்ளிடுமாறு கேட்டுக்கொள்ளப்படுகிறீர்கள்."
    );
  });

  $("#getDataButton").click(function () {
    // alert("Text: " + $("#passportNO").val());
    passportNumber = $("#passportNO").val();
    // $("#pptno").html(passportNumber);
    getUserData(langnum);
    // alert(passportNumber);N1234567

    if (langnum == 0) {
      $("#title").html(' <h2 class="title">ලියාපදිංචි තොරතුරු</h2>');
    } else if (langnum == 1) {
      $("#title").html(' <h2 class="title"> Registration Info</h2>');
    } else if (langnum == 2) {
      $("#title").html(' <h2 class="title"> பதிவு தகவல்</h2>');
    }
  });

  $("#Register").click(function (){
    // Get the modal
    var modal = document.getElementById("myModal");

    //display the model
    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        location.reload();
        modal.style.display = "none";
        }
      };
  })

  //   alert("Hello");
});

var rootURL =
  "https://embassyofsrilankauae.com/wp-json/cfdb7/json/search/jzeZemHYQUu3zLsfPHp8s5tzxjHHfR/8118/passport-no/";
var passportNumber;

//varibles for store JSON Data

var firstName = "Indunil";
var registerdDate;
function getUserData(langnum) {
  var URL = rootURL.concat(passportNumber);

  $.ajax({
    url: URL,
    error: function () {
      // will fire when timeout is reached
      alert("Time Out");
    },
    success: function (data, status) {
      //do something

      if (data.meg && data.meg == "No data exist") {
        $("#fName").val("No First Name Data");
        $("#lName").val("No Last Name Data");
        $("#regDate").val("No Reg Date Data");
        $("#successMessage").val(
          "කනගාටුයි! අප සතුව ඔබගේ තොරතුරු නොමැත."
        );

        $("#Register").fadeIn("slow");

        if (langnum == 0) {
          $("#welcomemsgpra").text(
            "කනගාටුයි! ඔබගේ ලියාපදිංචිය තහවුරු කළ නොහැක. කරුණාකර ලියාපදිංචිය සඳහා පහත සඳහන් යොමුවට පිවිසෙන්න."
          );
        } else if (langnum == 1) {
          $("#welcomemsgpra").text(
            "Sorry! Your Registration cannot be verified. Kindly click below button to Register."
          );
        } else if (langnum == 2) {
          $("#successMessage").val(
            "மன்னிக்கவும், உங்களைப் பற்றிய தரவு எங்களிடம் இல்லை"
          );
        }

        $("#sinhalaemb").click(function () {
          // $("#embnm").html("<h1>ශ්‍රි ලංකා තනාපති කාර්යලය</h1>");
          $("#title").html(' <h2 class="title">ලියාපදිංචි තොරතුරු</h2>');

          $("#successMessage").val("කනගාටුයි! අප සතුව ඔබගේ තොරතුරු නොමැත.");

          $("#welcomemsgpra").text(
            "කනගාටුයි! ඔබගේ ලියාපදිංචිය තහවුරු කළ නොහැක. කරුණාකර ලියාපදිංචිය සඳහා පහත සඳහන් යොමුවට පිවිසෙන්න."
          );
        });
        $("#englishemb").click(function () {
          // $("#embnm").html("<h1>Embassy of Sri Lanka</h1>");
          $("#title").html(' <h2 class="title"> Registration Info</h2>');

          $("#successMessage").val("Sorry We don't have data about you");
          $("#welcomemsgpra").text(
            "Sorry! Your registration could not be verified. Kindly click below button to Register."
          );
        });
        $("#tamilemb").click(function () {
          //     $("#embnm").html("<h1> இலங்கை தூதரகம் </h1>");
          $("#title").html(' <h2 class="title"> பதிவு தகவல்</h2>');

          $("#successMessage").val(
            "மன்னிக்கவும், உங்களைப் பற்றிய தரவு எங்களிடம் இல்லை"
          );

          $("#welcomemsgpra").text(
            "மன்னிக்கவும்! உங்கள் பதிவை சரிபார்க்க முடியவில்லை. பதிவு செய்ய தயவுசெய்து கீழேயுள்ள இணைப்பைப் பார்வையிடவும்."
          );
        });

        // // Get the modal
        // var modal = document.getElementById("myModal");

        // //display the model
        // modal.style.display = "block";

        // // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function (event) {
        //   if (event.target == modal) {
        //     location.reload();
        //     modal.style.display = "none";
        //   }
        // };
      } else {

        $("#Register").hide();

        // assign variables
        var regDate = data.form_date;
        var firstName = data.your_name;
        var lastName = data.your_surname;

        // assign values to html
        $("#fName").val(firstName);
        $("#lName").val(lastName);
        $("#regDate").val(regDate);
        $("#successMessage").val(
          "ඔබ සාර්ථකව ලියාපදිංචි වී ඇත."
        );

        if (langnum == 0) {
          $("#welcomemsgpra").text(
            "ඔබගේ ලියාපදිංචිය තහවුරු බව සතුටින් දන්වා සිටිමු. ගුවන්ගත වීමේ ක්‍රියාවලිය සඳහා අප තානාපති කාර්යාලයේ නිලධාරියකු හැකි ඉක්මනින් ඔබව අමතනු ඇත. ස්තුතියි!"
          );
        } else if (langnum == 1) {
          $("#welcomemsgpra").text(
            "We are pleased to announce that your registration has been confirmed.An embassy official will contact you soon upon receipt of confirmation of flight schedules.Thank you!"
          );
        } else if (langnum == 2) {
          $("#successMessage").val(
            "உங்கள் பதிவு உறுதிப்படுத்தப்பட்டுள்ளதாக அறிவிப்பதில் நாங்கள் மகிழ்ச்சியடைகிறோம்.விமான அட்டவணைகளை உறுதிப்படுத்தியவுடன் தூதரக அதிகாரி ஒருவர் விரைவில் உங்களைத் தொடர்புகொள்வார்."
          );
        }

        $("#sinhalaemb").click(function () {
          // $("#embnm").html("<h1>ශ්‍රි ලංකා තනාපති කාර්යලය</h1>");
          $("#title").html(' <h2 class="title">ලියාපදිංචි තොරතුරු</h2>');

          $("#successMessage").val("ඔබ සාර්ථකව ලියාපදිංචි වී ඇත.");
        });
        $("#englishemb").click(function () {
          // $("#embnm").html("<h1>Embassy of Sri Lanka</h1>");
          $("#title").html(' <h2 class="title"> Registration Info</h2>');

          $("#successMessage").val(
            "You are Registered successfully."
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
    timeout: 6000, // sets timeout to 6 seconds
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
