var format = require('json-nice');

var input = document.querySelector(".formattee");
var output = document.querySelector(".formatted");

input.addEventListener('keyup', function(){
  var json = JSON.parse(input.value);
  var fmtJson = format(json);
  output.innerHTML = fmtJson;
});
