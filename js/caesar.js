var caesarShiftencrypt = function (plaintext) {
    ciphertext = "";
    var re = /[a-z]/;
    for (i = 0; i < plaintext.length; i++) {
        if (re.test(plaintext.charAt(i))) ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + 3) % 26 + 97);
        else ciphertext += plaintext.charAt(i);
    }
    return ciphertext;
}

var caesarShiftdecrypt = function (ciphertext) {
    plaintext = "";
    var re = /[a-z]/;
    for (i = 0; i < ciphertext.length; i++) {
        if (re.test(ciphertext.charAt(i))) plaintext += String.fromCharCode((ciphertext.charCodeAt(i) - 97 + 26 - 3) % 26 + 97);
        else plaintext += ciphertext.charAt(i);
    }
    return plaintext;
}

function caesarcipherButtonFunction() {
    var message = document.getElementById('inputMessage').value.toLowerCase();
    var result = caesarShiftencrypt(message);
    document.getElementById('result').value = result;
}

function caesardecipherButtonFunction() {
    var message = document.getElementById('inputMessage').value;
    var result = caesarShiftdecrypt(message);
    document.getElementById('result').value = result;
}