const urlEncode = function(text) {
  let blankSpace = ""
  for (i = 0; i < text.length; i++){
    if (text[i] === " ") {
      blankSpace += "%20"
    } else {
      blankSpace += text[i]
    }
  } 
    return blankSpace
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
