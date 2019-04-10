let encrypt = document.getElementById("encrypt")
let decrypt = document.getElementById("decrypt")
let _key = document.getElementById("key")

var key = () => (parseInt(_key.value));

var charCode = ''

function crypt(x) {
   let target = event.target
   let output = ''
   if (x !== -1) x = 1;
   for (let i = 0; i < target.value.length; i++) {
      charCode = target.value.charCodeAt(i)
      specialChar()
      switch (true) {
         case charCode >= 97 && charCode <= 122:
            charCode = String.fromCharCode(charCode).toUpperCase().charCodeAt(0)
            output += String.fromCharCode(cryptChar(key() * x)).toLowerCase()
            break
         case charCode >= 65 && charCode <= 90:
            output += String.fromCharCode(cryptChar(key() * x))
            break
         default:
            output += String.fromCharCode(charCode)
            break
      }
   }
   getOutput(output)
}

function cryptChar(key) { //encrypt/decrypt char to char
   switch (true) {
      case charCode + key > 90: return 64 + (charCode + key - 90)
      case charCode + key < 65: return 91 + (charCode + key - 65)
      default: return charCode + key
   }
}

function specialChar() { //verifies for special chars
   switch (charCode) {
      case 200: case 201: case 202: case 203: charCode = 69; break //E
      case 232: case 233: case 234: case 235: charCode = 101; break //e
      case 199: charCode = 67; break //C
      case 231: charCode = 99; break //c
      case 192: case 193: case 194: case 195: case 196: case 197: charCode = 65; break //A
      case 224: case 225: case 226: case 227: case 228: case 229: charCode = 97; break //a
      case 210: case 211: case 212: case 213: case 214: case 216: charCode = 79; break //O
      case 242: case 243: case 244: case 245: case 246: case 248: charCode = 111; break //o
      case 204: case 205: case 206: case 207: charCode = 73; break //I
      case 236: case 237: case 238: case 239: charCode = 105; break //i
      case 217: case 218: case 219: case 220: charCode = 85; break //U
      case 249: case 250: case 251: case 252: charCode = 117; break //u
      case 209: charCode = 78; break //N
      case 241: charCode = 110; break //n
      case 221: charCode = 89; break //Y
      case 253: case 255: charCode = 121; break //y
   }
}
function getOutput(output) {
   switch (event.target.id) {
      case "encrypt": decrypt.value = output; break
      case "decrypt": encrypt.value = output; break
   }
}