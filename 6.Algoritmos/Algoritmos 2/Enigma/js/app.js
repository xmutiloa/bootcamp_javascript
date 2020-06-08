var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";


let handleTranslateBtnClick = () => {
  let textToTranslate = document.getElementById(event.target.id === "decryptBtn" ? "encryptedText" : "normalText").value;
  let arrayFrom = event.target.id === "decryptBtn" ? encryptedAlphabet : plainAlphabet; 
  let arrayTo = event.target.id === "decryptBtn" ? plainAlphabet : encryptedAlphabet;
  let textTranslated = "";

  for (i = 0; i < textToTranslate.length; i ++){
      if(textToTranslate[i] == " ")
        textTranslated += " ";
      else
        textTranslated += arrayTo[arrayFrom.indexOf(textToTranslate[i])];
  }
  document.getElementById(event.target.id === "encryptBtn" ? "encryptedText" :"normalText").value = textTranslated;
}

document.getElementById("encryptBtn").addEventListener("click", handleTranslateBtnClick);
document.getElementById("decryptBtn").addEventListener("click", handleTranslateBtnClick);


