(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var format = require('json-nice');

var output = document.querySelector(".formatted");

document.body.addEventListener('paste', function(e){
  var data = e.clipboardData.getData('text/plain');
  var json = JSON.parse(data);
  var fmtJson = format(json);
  output.innerHTML = fmtJson;
});

},{"json-nice":2}],2:[function(require,module,exports){
function render (key, value, options, indent) {
  var text = '', i;

  indent = indent || 0;

  if (Array.isArray(value)) {
    for (i = 0; i < indent; i++) {
      text += options.indent;
    }

    if (key !== null) {
      text += "\"" + key + "\": ";
    }

    text += "[\n";

    for (var i = 0; i < value.length; i++) {
      text += render(null, value[i], options, indent + 1);
      if (i < value.length - 1) {
        text += ",";
      }
      text += "\n";
    }

    for (i = 0; i < indent; i++) {
      text += options.indent;
    }
    text += "]";
  } else if (value !== null && typeof value === 'object' && value.toString() === '[object Object]') {
    for (i = 0; i < indent; i++) {
      text += options.indent;
    }

    if (key !== null) {
      text += "\"" + key + "\": ";
    }

    text += "{\n";

    var keys = Object.keys(value);
    for (var i = 0; i < keys.length; i++) {
      text += render(keys[i], value[keys[i]], options, indent + 1);
      if (i < keys.length - 1) {
        text += ",";
      }
      text += "\n";
    }

    for (i = 0; i < indent; i++) {
      text += options.indent;
    }
    text += "}";
  } else if (typeof value === 'number' || typeof value === 'boolean') {
    for (i = 0; i < indent; i++) {
      text += options.indent;
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
      text += options.indent;
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

function format (obj, opt) {
  var options = { indent: "  " };
  if (typeof obj === 'object') {
    if (typeof opt === 'object') {
      for (var i in opt) {
        options[i] = opt[i];
      }
    }
    return render(null, obj, options);
  }
}

module.exports = exports = format;

},{}]},{},[1]);
