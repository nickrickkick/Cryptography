const code = "i love cryptography";
const key = [0, 4, 0, 7, 2, 0, 2, 2]; //4/7/2022

function dateShiftCipher(str, arr) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = "";
    let shiftChange = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
           
        if (shiftChange === arr.length){
            shiftChange -= arr.length;
        }

        if (alphabet.indexOf(char) > -1) {
            let newIndex = alphabet.indexOf(char) + arr[shiftChange];
            if(newIndex < alphabet.length) {
                newStr += alphabet[newIndex];
            } else {
                let shiftedIndex = -(alphabet.length - newIndex);
                newStr += alphabet[shiftedIndex];
            }
        } else {
           newStr += char;
           shiftChange--;
        }
        console.log(shiftChange);
        shiftChange++
    }
    return newStr;
}


console.log(dateShiftCipher(code, key));
