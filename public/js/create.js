const saveAccountBtn = $("#saveAccountBtn");

$(".dropdown-trigger").dropdown();
console.log("hello");

function createAccount() {
  // event.preventDefault();
  console.log($(".zodiacBtn").text(), "++++++++++++++++++++++++++");
  $.post("/create", {
    first_name: $("#first_name").val(),
    last_name: $("#last_name").val(),
    email: $("#email").val(),
    user_name: $("#username").val(),
    password: $("#password").val(),
    sign: $(".zodiacBtn").text(),
  }).then(function () {
    console.log("signed up!");
    window.location.href = "/";
  });
}

saveAccountBtn.on("click", function (event) {
  event.preventDefault();
  const userPw = $("#password").val();
  const confirmPw = $("#confirmPassword").val();
  if (userPw === confirmPw) {
    console.log("Passwords match!");
  } else {
    alert("Passwords dont match");
  }
  if (userPw.length < 8 || userPw.length > 16) {
    alert("Password must be between 8-16 characters");
  } else {
    createAccount();

    console.log("Valid password!");
  }
});

$(".zodiac").on("click", function (event) {
  console.log(event);
  const zodiacText = $(event.target).text();
  $(".zodiacBtn").text(zodiacText);
});
