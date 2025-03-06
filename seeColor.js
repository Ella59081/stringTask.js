// String-1 -- seeColor
// Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

// Examples

// seeColor('redxx') → red
// seeColor('xxred') →
// seeColor('blueTimes') → blue

function seeColor(str){
    if(str[0] == "r" && str[1] == "e" && str[2] == "d"){
      return "red";
    }else if(str[0] == "b" && str[1] == "l" && str[2] == "u"
      && str[3] == "e"){
      return "blue";
    }else{
      return "";
    }
}

console.log(seeColor("xxbluex"))