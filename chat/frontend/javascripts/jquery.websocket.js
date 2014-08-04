(function($) {

// WebSocket object
var ws;

// The Div element selected by jQuery selector
var div = this;

function onWsMessage(message) {
   var json = JSON.parse(message.data);

   if (json.type === 'message') {
   	content.prepend('<p>' + json.data.message + '</p>');
   }
}

$.fn.receiveWebSocket = function () {
     content = this;

     ws.onmessage = onWsMessage;
};

$.fn.createWebSocket = function () {
    div = this; // TBD
  if ("WebSocket" in window)
  {
     // Let us open a web socket
      ws = new WebSocket("ws://54.186.18.78:443/start", ['echo-protocol']);
     ws.onopen = function()
     {
	     div.append("<h2>Done</h2>");
     };

     ws.onmessage = onWsMessage;

     ws.onclose = function()
     { 
        div.append("<h2>Closed</h2>");
     };
     ws.onerror = function()
     { 
        div.html("<h1>error</h1>");
     };
  } else {
     // The browser doesn't support WebSocket
     alert("WebSocket NOT supported by your Browser!");
  }
};

})($);