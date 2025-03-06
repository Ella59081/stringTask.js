// String-1 -- endsLy
// Given a string, return true if it ends in "ly".

// Examples

// endsLy('oddly') → true
// endsLy('y') → false
// endsLy('oddl') → false


function endsLy(str){
    str.substring(str.length-2);
    if(str.substring(str.length-2) == "ly"){
      return true;
    }else{
      return false;
    }
}

console.log(endsLy("friendly"))