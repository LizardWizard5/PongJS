var createbutton = document.querySelector("#cBtn");
var joinbutton = document.querySelector("#jBtn");
var gameId = document.querySelector("#gameId");
createbutton.addEventListener("click", function() {
    let peer = new Peer();
    peer.on('open', function(id) {
        console.log('My peer ID is: ' + id);

    });
    peer.on('connection', function(conn) {
    console.log("Peer: "+conn);
    if(peer.console.error()){
        console.log("Game is full");
    }
    });
});
joinbutton.addEventListener("click", function() {
    let peer = new Peer();
    var conn = peer.connect(gameId.value);
    conn.on('open', function() {
        // Receive messages
        conn.on('data', function(data) {
          console.log('Received', data);
        });
    
        // Send messages
        conn.send('Hello!');
      });
});