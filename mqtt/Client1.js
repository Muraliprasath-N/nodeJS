const { func } = require("assert-plus");
const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost");

client.on("connect", function () {
  console.log("Connected with Broker from client 1");
  client.subscribe("topic2", function (topic, message) {
    console.log(`Recieved message: ${message} \nFrom Topic: ${topic}`);
  });

  setInterval(() => {
    client.publish("topic1", "Hello from client1");
  }, 2000);
});
