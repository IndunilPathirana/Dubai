$(document).ready(function () {
  $("#getDataButton").click(function () {
    // alert("Text: " + $("#passportNO").val());
    passportNumber = $("#passportNO").val();
    // $("#pptno").html(passportNumber);
    getUserData();
    // alert(passportNumber);N1234567
  });

  $(".lang").hide();
  $("#sinhalaemb").click(function () {
    // $("#embnm").html("<h1>ශ්‍රි ලංකා තනාපති කාර්යලය</h1>");
    $("#title").html(' <h2 class="title">ලියාපදිංචි තොරතුරු</h2>');

    $("#successMessage").val("ඔබ සාර්තකව ලියාපදින්චි වී ඇත");
  });
  $("#englishemb").click(function () {
    // $("#embnm").html("<h1>Embassy of Sri Lanka</h1>");
    $("#title").html(' <h2 class="title"> Registration Info</h2>');

    $("#successMessage").val("Successfully Registerd and we are working on it");
  });
  $("#tamilemb").click(function () {
    //     $("#embnm").html("<h1> இலங்கை தூதரகம் </h1>");
    $("#title").html(' <h2 class="title"> பதிவு தகவல்</h2>');

    $("#successMessage").val(
      "வெற்றிகரமாக பதிவுசெய்துள்ளோம், நாங்கள் அதைச் செய்கிறோம்"
    );
  });
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
  $.get(URL, function (data, status) {
    $(".lang").fadeIn("slow");
    var regDate = data.form_date;
    // var hd5opn = "<h5>Registerd at:- ";
    // var hd5cls = "</h5>";
    // var imd = hd5opn.concat(regDate);
    // var regdatehtml = imd.concat(hd5cls);
    // alert(regDate);
    // set Html Values

    // $("#personName").html("<h6>Your Name</h6>");

    $("#regDate").val(regDate);

    $("#successMessage").val("Successfully Registerd and we are working on it");
  });
}
