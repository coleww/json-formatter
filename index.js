var format = require('json-nice');

var body = document.querySelector("body");
var output = document.querySelector(".formatted");

body.addEventListener('paste', function(e){
  var data = e.clipboardData.getData('text/plain');
  var json = JSON.parse(data);
  var fmtJson = format(json);
  output.innerHTML = fmtJson;
});
