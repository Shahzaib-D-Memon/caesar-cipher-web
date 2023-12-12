function encrypt() {
  var message = document.getElementById("message").value;
  var shift = parseInt(document.getElementById("shift").value);
  document.getElementById("result").innerText = caesarCipher(message, shift);
}

function decrypt() {
  var message = document.getElementById("message").value;
  var shift = parseInt(document.getElementById("shift").value);
  document.getElementById("result").innerText = caesarCipher(message, -shift);
}

function caesarCipher(message, shift) {
  var result = "";
  for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + shift + 26) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + shift + 26) % 26) + 97);
    } else {
      result += message.charAt(i);
    }
  }
  return result;
}
