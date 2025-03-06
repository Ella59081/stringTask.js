// String-1 -- frontAgain
// Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

// Examples

// frontAgain('edited') → true
// frontAgain('edit') → false
// frontAgain('ed') → true

function frontAgain(str){
    if(str.length == 0){
      return false;
      
    }else if(str[0] == str[str.length-2] && 
       str[1] == str[str.length -1]){
      return true;
    }else{
      return false;
      
    }
}

console.log(frontAgain("edited"))