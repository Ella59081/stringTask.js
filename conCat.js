// String-1 -- conCat
// Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

// Examples

// conCat('abc', 'cat') → abcat
// conCat('dog', 'cat') → dogcat
// conCat('abc', '') → abc

function conCat(a, b){
    if(a[a.length-1] == b[0]){
      return a.substring(0, a.length -1) + b
    }else{
      return a + b
    }
    
}

console.log(conCat("cat", "dog"))