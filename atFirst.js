// String-1 -- atFirst
// Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

// Examples

// atFirst('hello') → he
// atFirst('hi') → hi
// atFirst('h') → h@

function atFirst(str){
    if(str.length < 2 && str.length == 1){
      return str + "@";
    }else if(str.length < 2 && str.length == 0){
      return str + "@" + "@";
    }else{
      return str[0] + str[1];
    }
}

console.log(atFirst("hello"))