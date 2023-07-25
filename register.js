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
        "controller/usuario.php?op=registro",
        {
          usu_nom: result.user.providerData[0].displayName,
          usu_email: result.user.providerData[0].email,
          usu_pass: 123456,
        },
        function (data) {
          if (data == 0) {
            Swal.fire({
              icon: "success",
              title: "Aceptado!",
              text: "Registro Correcto",
              confirmButtonText: "ok",
            }).then((result) => {
              if (result.isConfirmed) {
                window.open(
                  "https://localhost/Personal_Sebas_LoginRegisterSocialMedia/view/home/",
                  "_self"
                );
              }
            });
          } else {
            Swal.fire("Observación!", "Correo ya existe", "question");
          }
        }
      );
    })
    .catch(function (error) {
      console.log(error);
    });
});
/*document.getElementById("btnloginf").addEventListener("click", function () {
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
        "controller/usuario.php?op=registro",
        {
          usu_nom: result.user.providerData[0].displayName,
          usu_email: result.user.providerData[0].email,
          usu_pass: 123456,
        },
        function (data) {
          if (data == 0) {
            Swal.fire({
              icon: "success",
              title: "Aceptado!",
              text: "Registro Correcto",
              confirmButtonText: "ok",
            }).then((result) => {
              if (result.isConfirmed) {
                window.open(
                  "https://localhost/Personal_Sebas_LoginRegisterSocialMedia/view/home/",
                  "_self"
                );
              }
            });
          } else {
            Swal.fire("Observación!", "Correo ya existe", "question");
          }
        }
      );
    })
    .catch(function (error) {
      console.log(error);
    });
});
document.getElementById("btnloginh").addEventListener("click", function () {
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
        "controller/usuario.php?op=registro",
        {
          usu_nom: result.user.providerData[0].displayName,
          usu_email: result.user.providerData[0].email,
          usu_pass: 123456,
        },
        function (data) {
          if (data == 0) {
            Swal.fire({
              icon: "success",
              title: "Aceptado!",
              text: "Registro Correcto",
              confirmButtonText: "ok",
            }).then((result) => {
              if (result.isConfirmed) {
                window.open(
                  "https://localhost/Personal_Sebas_LoginRegisterSocialMedia/view/home/",
                  "_self"
                );
              }
            });
          } else {
            Swal.fire("Observación!", "Correo ya existe", "question");
          }
        }
      );
    })
    .catch(function (error) {
      console.log(error);
    });
});*/

function init() {}

$(document).ready(function () {});

$(document).on("click", "#btnregistrar", function () {
  var usu_nom = $("#usu_nom").val();
  var usu_email = $("#usu_email").val();
  var usu_pass = $("#usu_pass").val();
  var usu_pass1 = $("#usu_pass1").val();

  if (usu_nom == "" || usu_email == "" || usu_pass == "" || usu_pass1 == "") {
    Swal.fire("Error!", "Campos vacios", "error");
  } else {
    if (usu_pass == usu_pass1) {
      $.post(
        "controller/usuario.php?op=registro",
        {
          usu_nom: usu_nom,
          usu_email: usu_email,
          usu_pass: usu_pass,
          usu_pass1: usu_pass1,
        },
        function (data) {
          if (data == 0) {
            Swal.fire({
              icon: "success",
              title: "Aceptado!",
              text: "Registro Correcto",
              confirmButtonText: "ok",
            }).then((result) => {
              if (result.isConfirmed) {
                window.open(
                  "https://localhost/Personal_Sebas_LoginRegisterSocialMedia/view/home/",
                  "_self"
                );
              }
            });
          } else {
            Swal.fire("Observación!", "Correo ya existe", "question");
          }
        }
      );
    } else {
      Swal.fire("Error!", "Contraseña incorrecta", "error");
    }
  }
});
