const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost");

client.on("connect", () => {
  console.log("Successfully connected");

  const message = "Hello From client 1";
  const topic = "topic1";
  client.publish(topic, message, { retain: true }, (err) => {
    if (err) console.error(err);
    else console.log("Message published");
  });
});

client.on("message", (topic, message) => {
  console.log(`Recieved message: ${message} \nFrom Topic: ${topic}`);
});
