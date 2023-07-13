function init() {}

$(document).ready(function () {
  $("#lblmensaje").hide();
  $("#lblerror").hide();
  $("#lblregistro").hide();
});

$(document).on("click", "#btnlogin", function () {
  var usu_email = $("#txtcorreo").val();
  var usu_pass = $("#txtpass").val();

  if (usu_email == "" || usu_pass == "") {
    console.log("Vacios");
    $("#lblmensaje").show();
  } else {
    $.post(
      "controller/usuario.php?op=acceso",
      { usu_email: usu_email, usu_pass: usu_pass },
      function (data) {
        data = JSON.parse(data);
        console.log(data);
      }
    );
  }
});
