const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function encrypt(input, key, encriptNum = false) {
    let output = new String()
    for (let i = 0; i < input.length; i++) {
        let char = input.charAt(i), posInAlphabet = alphabet.indexOf(char)
        switch (true) {
            case char == ' ': output += ' '; break
            case char.search(/\d/) == 0: if (encriptNum == true) { char = Number(char) + key }; output += char; break; //Criptografa números
            case posInAlphabet + key >= 26: output += alphabet[posInAlphabet + key - 26]; break
            case posInAlphabet + key <= -1: output += alphabet[posInAlphabet + key + 26]; break
            default: output += alphabet[posInAlphabet + key]
        }
    }
    return output
}

function decrypt(input, key, encriptNum = false) {
    return encrypt(input, -key, encriptNum)
}

console.log(encrypt("willian 12", 3, true))

