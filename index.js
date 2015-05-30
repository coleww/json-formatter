var format = require('json-nice');

var output = document.querySelector(".formatted");

document.body.addEventListener('paste', function(e){
  var data = e.clipboardData.getData('text/plain');
  var json = JSON.parse(data);
  var fmtJson = format(json);
  output.innerHTML = fmtJson;
});
