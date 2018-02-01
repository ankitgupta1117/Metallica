var stompClient = null;

 function setConnected(connected) {
     $("#connect").prop("disabled", connected);
     $("#disconnect").prop("disabled", !connected);
     if (connected) {
         $("#conversation").show();
     }
     else {
         $("#conversation").hide();
     }
     $("#greetings").html("");
 }

 function connect() {
     var socket = new SockJS('/notification-websocket');
     stompClient = Stomp.over(socket);
     stompClient.connect({}, function (frame) {
         setConnected(true);
         console.log('Connected: ' + frame);
         stompClient.subscribe('/trade/feeds', function (greeting) {
             showGreeting(JSON.parse(greeting.body));
         });
         stompClient.subscribe('/market/feeds', function (greeting) {
                      console.log(greeting);
                      showMarket((JSON.parse(greeting.body)));
                  });
     });
 }

 function disconnect() {
     if (stompClient !== null) {
         stompClient.disconnect();
     }
     setConnected(false);
     console.log("Disconnected");
 }

 function sendName() {
     stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
 }

 function showGreeting(message) {
     $("#greetings").append("<tr><td> Command: " + message.tradeEvent.eventType + "</td>"+
                                 "<td> Trade Id: "+message.tradeEvent.payload + "</td></tr>");
 }

 function showMarket(message) {
     $("#greetings").append("<tr><td> Commodity: " + message.event.commoditycode + "</td>"+
                                 "<td> Price: "+message.event.price + "</td></tr>");
 }

 $(function () {
     $("form").on('submit', function (e) {
         e.preventDefault();
     });
     $( "#connect" ).click(function() { connect(); });
     $( "#disconnect" ).click(function() { disconnect(); });
     $( "#send" ).click(function() { sendName(); });
 });