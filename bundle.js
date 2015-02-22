(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/cole/projects/json-statham/index.js":[function(require,module,exports){
var format = require('json-nice');

var body = document.querySelector("body");
var output = document.querySelector(".formatted");

body.addEventListener('paste', function(e){
  var data = e.clipboardData.getData('text/plain');
  var json = JSON.parse(data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9qc29uLW5pY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBmb3JtYXQgPSByZXF1aXJlKCdqc29uLW5pY2UnKTtcblxudmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbnZhciBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1hdHRlZFwiKTtcblxuYm9keS5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGZ1bmN0aW9uKGUpe1xuICB2YXIgZGF0YSA9IGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gIHZhciBqc29uID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgdmFyIGZtdEpzb24gPSBmb3JtYXQoanNvbik7XG4gIG91dHB1dC5pbm5lckhUTUwgPSBmbXRKc29uO1xufSk7XG4iLCJmdW5jdGlvbiByZW5kZXIgKGtleSwgdmFsdWUsIGluZGVudCkge1xuICB2YXIgdGV4dCA9ICcnLCBpO1xuXG4gIGluZGVudCA9IGluZGVudCB8fCAwO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBpbmRlbnQ7IGkrKykge1xuICAgICAgdGV4dCArPSBcIiBcIjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ICE9PSBudWxsKSB7XG4gICAgICB0ZXh0ICs9IFwiXFxcIlwiICsga2V5ICsgXCJcXFwiOiBcIjtcbiAgICB9XG5cbiAgICB0ZXh0ICs9IFwiW1xcblwiO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdGV4dCArPSByZW5kZXIobnVsbCwgdmFsdWVbaV0sIGluZGVudCArIDIpO1xuICAgICAgaWYgKGkgPCB2YWx1ZS5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRleHQgKz0gXCIsXCI7XG4gICAgICB9XG4gICAgICB0ZXh0ICs9IFwiXFxuXCI7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGluZGVudDsgaSsrKSB7XG4gICAgICB0ZXh0ICs9IFwiIFwiO1xuICAgIH1cbiAgICB0ZXh0ICs9IFwiXVwiO1xuICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5kZW50OyBpKyspIHtcbiAgICAgIHRleHQgKz0gXCIgXCI7XG4gICAgfVxuXG4gICAgaWYgKGtleSAhPT0gbnVsbCkge1xuICAgICAgdGV4dCArPSBcIlxcXCJcIiArIGtleSArIFwiXFxcIjogXCI7XG4gICAgfVxuXG4gICAgdGV4dCArPSBcIntcXG5cIjtcblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGV4dCArPSByZW5kZXIoa2V5c1tpXSwgdmFsdWVba2V5c1tpXV0sIGluZGVudCArIDIpO1xuICAgICAgaWYgKGkgPCBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGV4dCArPSBcIixcIjtcbiAgICAgIH1cbiAgICAgIHRleHQgKz0gXCJcXG5cIjtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5kZW50OyBpKyspIHtcbiAgICAgIHRleHQgKz0gXCIgXCI7XG4gICAgfVxuICAgIHRleHQgKz0gXCJ9XCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBpbmRlbnQ7IGkrKykge1xuICAgICAgdGV4dCArPSBcIiBcIjtcbiAgICB9XG4gICAgaWYgKGtleSAhPT0gbnVsbCkge1xuICAgICAgdGV4dCArPSBcIlxcXCJcIiArIGtleSArIFwiXFxcIjogXCI7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRleHQgKz0gTnVtYmVyKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dCArPSB2YWx1ZSA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgdGV4dCArPSBcIlwiO1xuICB9IGVsc2Uge1xuICAgIGZvciAoaSA9IDA7IGkgPCBpbmRlbnQ7IGkrKykge1xuICAgICAgdGV4dCArPSBcIiBcIjtcbiAgICB9XG4gICAgaWYgKGtleSAhPT0gbnVsbCkge1xuICAgICAga2V5ID0ga2V5LnJlcGxhY2UoL1xcXCIvZywgXCJcXFxcXFxcIlwiKTtcbiAgICAgIHRleHQgKz0gXCJcXFwiXCIgKyBrZXkgKyBcIlxcXCI6IFwiO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGV4dCArPSBcIm51bGxcIjtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRleHQgKz0gXCJ1bmRlZmluZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXFwiL2csIFwiXFxcXFxcXCJcIik7XG4gICAgICB0ZXh0ICs9ICdcIicgKyB2YWx1ZSArICdcIic7XG4gICAgfVxuXG4gICAgdGV4dCArPSBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdCAob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiByZW5kZXIobnVsbCwgb2JqKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmb3JtYXQ7XG4iXX0=
