document.getElementById("btnloging").addEventListener("click", function () {
  var provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then(function (result) {
      var user = result.user;
      console.log(user);
      console.log(result.user.providerData[0].displayName);
      console.log(result.user.providerData[0].email);
      console.log(result.user.providerData[0].photoURL);

      $.post(
        "controller/usuario.php?op=accesoSocial",
        { usu_email: result.user.providerData[0].email },
        function (data) {
          if (data == 0) {
            $("#lblerror").hide();
            $("#lblmensaje").hide();
            $("#lblregistro").show();
          } else {
            window.open(
              "https://localhost/Personal_Sebas_LoginRegisterSocialMedia/view/home/",
              "_self"
            );
          }
        }
      );
    })
    .catch(function (error) {
      console.log(error);
    });
});


document.getElementById("btnloginf").addEventListener("click", function () {
  var provider = new firebase.auth.FacebookAuthProvider();
  auth
    .signInWithPopup(provider)
    .then(function (result) {
      var user = result.user;
      console.log(user);
      console.log(result.user.providerData[0].displayName);
      console.log(result.user.providerData[0].email);
      console.log(result.user.providerData[0].photoURL);

      $.post(
        "controller/usuario.php?op=accesoSocial",
        { usu_email: result.user.providerData[0].email },
        function (data) {
          if (data == 0) {
            $("#lblerror").hide();
            $("#lblmensaje").hide();
            $("#lblregistro").show();
          } else {
            window.open(
              "https://localhost/Personal_Sebas_LoginRegisterSocialMedia/view/home/",
              "_self"
            );
          }
        }
      );
    })
    .catch(function (error) {
      console.log(error);
    });
});
document.getElementById("btnloginh").addEventListener("click", function () {
  var provider = new firebase.auth.GithubAuthProvider();
  auth
    .signInWithPopup(provider)
    .then(function (result) {
      var user = result.user;
      console.log(user);
      console.log(result.user.providerData[0].displayName);
      console.log(result.user.providerData[0].email);
      console.log(result.user.providerData[0].photoURL);

      $.post(
        "controller/usuario.php?op=accesoSocial",
        { usu_email: result.user.providerData[0].email },
        function (data) {
          if (data == 0) {
            $("#lblerror").hide();
            $("#lblmensaje").hide();
            $("#lblregistro").show();
          } else {
            window.open(
              "https://localhost/Personal_Sebas_LoginRegisterSocialMedia/view/home/",
              "_self"
            );
          }
        }
      );
    })
    .catch(function (error) {
      console.log(error);
    });
});

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
    $("#lblerror").hide();
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
