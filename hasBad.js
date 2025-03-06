// String-1 -- hasBad
// Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

// Examples

// hasBad('badxx') → true
// hasBad('xbadxx') → true
// hasBad('xxbadxx') → false

function hasBad(str){
    if(str[0] == "b" && str[1] == "a" && str[2] == "d"
       || str[1] == "b" && str[2] == "a" && str[3] == "d"){
      return true
    }else{
      return false
    }
    
}

console.log(hasBad(xbadxx))