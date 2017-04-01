//simpler version of js form
function outputName() {
  var x, y, fname;
  x= document.getElementById("contactform");
  y= x.elements["firname"].value;
  document.getElementById("reply").innerHTML = "Hello, "+y+", thanks for reaching out!";
}
