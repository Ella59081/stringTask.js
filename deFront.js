// String-1 -- deFront
// Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

// Examples

// deFront('Hello') → llo
// deFront('java') → va
// deFront('away') → aay


function deFront(str){
    if(str[0] == "a" && str[1] == "b"){
      return str[0] + str[1] + str.substring(2, str.length);
    }else if(str[0] == "a"){
      return str[0] + str.substring(2, str.length);
    }else if(str[1] == "b"){
      return str[1] + str.substring(2, str.length);
    }else{
      return str.substring(2, str.length)
    }
    
}

console.log(deFront("hello"))