export function encrypt(word, shift) {

    let cipheredWord = "";

    for (let i in word) {

      let charCode = word.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90)
        charCode = ((charCode - 65 + shift) % 26) + 65;
      
      else if (charCode >= 97 && charCode <= 122)
        charCode = ((charCode - 97 + shift) % 26) + 97;
      
      cipheredWord += String.fromCharCode(charCode);
    } 
    return cipheredWord;
}
