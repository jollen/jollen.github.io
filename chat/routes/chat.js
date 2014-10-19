
/*
 * GET chat messages
 */

var history = [];

exports.start = function(req, res){
    var json;
    
    json = {
        data: history
    };
    
    res.send(json);
};

/*
 * POST chat message
 */

exports.send = function(req, res){
    var clients = req.app.clients;
    var msg = req.params.message;
    var obj = {};
    var milliseconds = new Date().getTime();
    
    obj.message = msg;
    obj.timestamp = milliseconds;
    
    history.push(obj);
    
    res.send("Receive message: " + msg);
    
    // Push to all clients via WebSocket
    clients.forEach(function(client) {
        // Stringify
        client.sendUTF(JSON.stringify(history));
    });
};