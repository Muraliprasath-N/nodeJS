const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost");

client.on("connect", () => {
  console.log("Successfully connected");

  client.subscribe("topic2", (err) => {
    if (err) console.error(err);
    else console.log("Sucessfully scbscribed topic: topic2");
  });
  setInterval(() => {
    const message = "Hello From client 1";
    const topic = "topic1";
    client.publish(topic, message, { qos: 2 }, (err) => {
      if (err) console.error(err);
    });
  }, 2000);
});

client.on("message", (topic, message) => {
  console.log(`Recieved message: ${message} \nFrom Topic: ${topic}`);
});
