let encrypt = document.getElementById("encrypt")
let decrypt = document.getElementById("decrypt")
let _key = document.getElementById("key")

function key() {
   return parseInt(_key.value)
}

encrypt.addEventListener("keypress", enCrypt)
encrypt.addEventListener("keyup", backspace)
encrypt.addEventListener("keydown", backspace)
decrypt.addEventListener("keypress", deCrypt)
decrypt.addEventListener("keyup", backspace)
decrypt.addEventListener("keydown", backspace)

function deCrypt() {
   enCrypt(-1)

}
function enCrypt(i) {
   if (i !== -1) i = 1;
   charCode = event.keyCode
   console.log(i)
   if (charCode >= 97 && charCode <= 122) {
      charCode = event.key.toUpperCase().charCodeAt(0)
      output = String.fromCharCode(cryptChar(charCode, key() * i)).toLowerCase()
   } else if (charCode >= 65 && charCode <= 90) {
      output = String.fromCharCode(cryptChar(charCode, key() * i))
   } else {
      output = String.fromCharCode(charCode)
   }
   getOutput(output)
}

function cryptChar(charCode, key) {
   switch (true) {
      // case charCode == 32: return charCode
      // case charCode >= 48 && charCode <= 57: if (encryptNum == true) { return charCode + key } return charCode
      case charCode + key > 90: return 65 + key
      case charCode + key < 65: return 90 + key
      default: return charCode + key
   }
}
function getOutput(output) {
   switch (event.target.id) {
      case "encrypt": decrypt.value += output; break
      case "decrypt": encrypt.value += output; break
   }
}
function backspace() {
   charCode = event.keyCode
   if (charCode == 8) {
      switch (event.target.id) {
         case "encrypt": decrypt.value = decrypt.value.slice(0, encrypt.value.length); break
         case "decrypt": encrypt.value = encrypt.value.slice(0, decrypt.value.length); break
      }
   }
}