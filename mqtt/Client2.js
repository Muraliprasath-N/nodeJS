const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost");

client.on("connect", function () {
  console.log("Connected with Broker from client 2");

  client.subscribe("topic1", function (err) {
    if (err) console.error(err);
    else console.log("Subscribed to topic");
  });
    
  setInterval(() => {
    client.publish("topic2", "Hello from client2");
  }, 2000);
});

client.on("message", function (topic, message) {
  console.log(`Recieved message: ${message} \nFrom Topic: ${topic}`);
});
