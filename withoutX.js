// String-1 -- withoutX
// Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

// Examples

// withoutX('xHix') → Hi
// withoutX('xHi') → Hi
// withoutX('Hxix') → 

function withoutX(str){
    if(str[0] == "x" && str[str.length-1] !== "x" && str.length !== 1){
      return str.substring(1, str.length)
    }else if(str[str.length-1] == "x" && str[0] !== "x" && str.length !== 1){
      return str.substring(0, str.length - 1) 
    }else if(str[0] == "x" && str[str.length-1] == "x" && str.length !== 1){
      return str.substring(1, str.length-1)
    }else if(str.length == 1){
      return "";
    }else{
      return str;
    }
    
}

console.log(withoutX("xlovely"))