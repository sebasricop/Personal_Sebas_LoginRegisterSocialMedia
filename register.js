function init() {}

$(document).ready(function () {});

$(document).on("click", "#btnregister", function () {
  var usu_nom = $("#usu_nom").val();
  var usu_email = $("#usu_email").val();
  var usu_pass = $("#usu_pass").val();
  var usu_pass1 = $("#usu_pass1").val();

  if (usu_nom == "" || usu_email == "" || usu_pass == "" || usu_pass1 == "") {
    bootbox.alert({
      message: "Error! campos vacios!!",
      size: "small",
    });
  } else {
    $.post(
      "controller/usuario.php?op=acceso",
      { usu_email: usu_email, usu_pass: usu_pass },
      function (data) {
        if (data == 0) {
          $("#lblerror").show();
          $("#lblmensaje").hide();
        } else {
          window.open(
            "https://localhost/Personal_Sebas_LoginRegisterSocialMedia/view/home/",
            "_self"
          );
        }
      }
    );
  }
});
