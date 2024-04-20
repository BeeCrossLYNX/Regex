function checkEmail() {
  var email = document.getElementById("emailInput").value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.getElementById("emailResult").innerHTML = regex.test(email) ? "Valid" : "Tidak Valid";
}

function checkPhone() {
  var phone = document.getElementById("phoneInput").value;
  var regex = /^\d{10,}$/;
  document.getElementById("phoneResult").innerHTML = regex.test(phone) ? "Valid" : "Tidak Valid";
}

function checkURL() {
  var url = document.getElementById("urlInput").value;
  var regex = /^(http|https):\/\/[^ "]+$/;
  document.getElementById("urlResult").innerHTML = regex.test(url) ? "Valid" : "Tidak Valid";
}

function checkDate() {
  var date = document.getElementById("dateInput").value;
  var regex = /^\d{4}-\d{2}-\d{2}$/;
  document.getElementById("dateResult").innerHTML = regex.test(date) ? "Valid" : "Tidak Valid";
}

function checkPassword() {
  var password = document.getElementById("passwordInput").value;
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  document.getElementById("passwordResult").innerHTML = regex.test(password) ? "Valid" : "Tidak Valid";
}
