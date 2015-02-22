(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/cole/projects/json-statham/index.js":[function(require,module,exports){
var format = require('json-nice');

var input = document.querySelector(".formattee");
var output = document.querySelector(".formatted");

input.addEventListener('keyup', function(){
  var json = JSON.parse(input.value);
  var fmtJson = format(json);
  output.innerHTML = fmtJson;
});

},{"json-nice":"/Users/cole/projects/json-statham/node_modules/json-nice/index.js"}],"/Users/cole/projects/json-statham/node_modules/json-nice/index.js":[function(require,module,exports){
function render (key, value, indent) {
  var text = '', i;

  indent = indent || 0;

  if (Array.isArray(value)) {
    for (i = 0; i < indent; i++) {
      text += " ";
    }

    if (key !== null) {
      text += "\"" + key + "\": ";
    }

    text += "[\n";

    for (var i = 0; i < value.length; i++) {
      text += render(null, value[i], indent + 2);
      if (i < value.length - 1) {
        text += ",";
      }
      text += "\n";
    }

    for (i = 0; i < indent; i++) {
      text += " ";
    }
    text += "]";
  } else if (value !== null && typeof value === 'object' && value.toString() === '[object Object]') {
    for (i = 0; i < indent; i++) {
      text += " ";
    }

    if (key !== null) {
      text += "\"" + key + "\": ";
    }

    text += "{\n";

    var keys = Object.keys(value);
    for (var i = 0; i < keys.length; i++) {
      text += render(keys[i], value[keys[i]], indent + 2);
      if (i < keys.length - 1) {
        text += ",";
      }
      text += "\n";
    }

    for (i = 0; i < indent; i++) {
      text += " ";
    }
    text += "}";
  } else if (typeof value === 'number' || typeof value === 'boolean') {
    for (i = 0; i < indent; i++) {
      text += " ";
    }
    if (key !== null) {
      text += "\"" + key + "\": ";
    }

    if (typeof value === 'number') {
      text += Number(value);
    } else {
      text += value ? 'true' : 'false';
    }

    text += "";
  } else {
    for (i = 0; i < indent; i++) {
      text += " ";
    }
    if (key !== null) {
      key = key.replace(/\"/g, "\\\"");
      text += "\"" + key + "\": ";
    }

    if (value === null) {
      text += "null";
    } else if (value === undefined) {
      text += "undefined";
    } else {
      value = value.replace(/\"/g, "\\\"");
      text += '"' + value + '"';
    }

    text += "";
  }

  return text;
}

function format (obj) {
  if (typeof obj === 'object') {
    return render(null, obj);
  }
}

module.exports = exports = format;

},{}]},{},["/Users/cole/projects/json-statham/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9qc29uLW5pY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgZm9ybWF0ID0gcmVxdWlyZSgnanNvbi1uaWNlJyk7XG5cbnZhciBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybWF0dGVlXCIpO1xudmFyIG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybWF0dGVkXCIpO1xuXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XG4gIHZhciBqc29uID0gSlNPTi5wYXJzZShpbnB1dC52YWx1ZSk7XG4gIHZhciBmbXRKc29uID0gZm9ybWF0KGpzb24pO1xuICBvdXRwdXQuaW5uZXJIVE1MID0gZm10SnNvbjtcbn0pO1xuIiwiZnVuY3Rpb24gcmVuZGVyIChrZXksIHZhbHVlLCBpbmRlbnQpIHtcbiAgdmFyIHRleHQgPSAnJywgaTtcblxuICBpbmRlbnQgPSBpbmRlbnQgfHwgMDtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5kZW50OyBpKyspIHtcbiAgICAgIHRleHQgKz0gXCIgXCI7XG4gICAgfVxuXG4gICAgaWYgKGtleSAhPT0gbnVsbCkge1xuICAgICAgdGV4dCArPSBcIlxcXCJcIiArIGtleSArIFwiXFxcIjogXCI7XG4gICAgfVxuXG4gICAgdGV4dCArPSBcIltcXG5cIjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRleHQgKz0gcmVuZGVyKG51bGwsIHZhbHVlW2ldLCBpbmRlbnQgKyAyKTtcbiAgICAgIGlmIChpIDwgdmFsdWUubGVuZ3RoIC0gMSkge1xuICAgICAgICB0ZXh0ICs9IFwiLFwiO1xuICAgICAgfVxuICAgICAgdGV4dCArPSBcIlxcblwiO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBpbmRlbnQ7IGkrKykge1xuICAgICAgdGV4dCArPSBcIiBcIjtcbiAgICB9XG4gICAgdGV4dCArPSBcIl1cIjtcbiAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGluZGVudDsgaSsrKSB7XG4gICAgICB0ZXh0ICs9IFwiIFwiO1xuICAgIH1cblxuICAgIGlmIChrZXkgIT09IG51bGwpIHtcbiAgICAgIHRleHQgKz0gXCJcXFwiXCIgKyBrZXkgKyBcIlxcXCI6IFwiO1xuICAgIH1cblxuICAgIHRleHQgKz0gXCJ7XFxuXCI7XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRleHQgKz0gcmVuZGVyKGtleXNbaV0sIHZhbHVlW2tleXNbaV1dLCBpbmRlbnQgKyAyKTtcbiAgICAgIGlmIChpIDwga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRleHQgKz0gXCIsXCI7XG4gICAgICB9XG4gICAgICB0ZXh0ICs9IFwiXFxuXCI7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGluZGVudDsgaSsrKSB7XG4gICAgICB0ZXh0ICs9IFwiIFwiO1xuICAgIH1cbiAgICB0ZXh0ICs9IFwifVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5kZW50OyBpKyspIHtcbiAgICAgIHRleHQgKz0gXCIgXCI7XG4gICAgfVxuICAgIGlmIChrZXkgIT09IG51bGwpIHtcbiAgICAgIHRleHQgKz0gXCJcXFwiXCIgKyBrZXkgKyBcIlxcXCI6IFwiO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICB0ZXh0ICs9IE51bWJlcih2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHQgKz0gdmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICAgIH1cblxuICAgIHRleHQgKz0gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5kZW50OyBpKyspIHtcbiAgICAgIHRleHQgKz0gXCIgXCI7XG4gICAgfVxuICAgIGlmIChrZXkgIT09IG51bGwpIHtcbiAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9cXFwiL2csIFwiXFxcXFxcXCJcIik7XG4gICAgICB0ZXh0ICs9IFwiXFxcIlwiICsga2V5ICsgXCJcXFwiOiBcIjtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRleHQgKz0gXCJudWxsXCI7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0ZXh0ICs9IFwidW5kZWZpbmVkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxcIi9nLCBcIlxcXFxcXFwiXCIpO1xuICAgICAgdGV4dCArPSAnXCInICsgdmFsdWUgKyAnXCInO1xuICAgIH1cblxuICAgIHRleHQgKz0gXCJcIjtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBmb3JtYXQgKG9iaikge1xuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcmVuZGVyKG51bGwsIG9iaik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZm9ybWF0O1xuIl19
