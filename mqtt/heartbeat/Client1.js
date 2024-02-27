const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost");

const heartBeat = 5000;

client.on("connect", () => {
  console.log("Successfully connected");

  setInterval(() => {
    client.publish("heartbeat", "ping");
  }, heartBeat);

  client.subscribe("heartbeat", (err) => {
    if (err) console.error(err);
    else console.log("Successfully subscribed heartbeat");
  });
});

client.on("message", (topic, message) => {
  if (topic === "heartbeat" && message === "ping")
    console.log("HearBeat send and received back");
  else console.log(`Recieved message: ${message} \nFrom Topic: ${topic}`);
});
