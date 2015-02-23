#json formatting as a service
--------------------------------------

![example magic]("./json-example.gif")

Listens for paste events, grabs the text contents of the clipboard, and tries to `JSON.parse` and format that text with [json-nice](https://github.com/JerrySievert/json). If you try to paste anything other than valid JSON, it will fail horribly.

TODO: maybe show a message or something on failure

There are already plenty of JSON formatters on the internet, but I wanted one without ads or bells or whistles or really anything besides adding indents and line breaks so that I can see why my embers and my rails aren't communicating.


---------------------------

PRETTY NEAT-O => how to listen for ctrl+v and get the clipboard datas:

```
    element.addEventListener('paste', function(e){
      var data = e.clipboardData.getData('text/plain');
      // ...
    }
```