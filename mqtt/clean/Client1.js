const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost", { clientId: 1, clean: false });

client.on("connect", () => {
  connectFunc();
  setTimeout(() => {
    client.reconnect();
  }, 5000);
});

client.on("message", (topic, message) => {
  console.log(`Recieved message: ${message} \nFrom Topic: ${topic}`);
});

const connectFunc = () => {
  console.log("Successfully connected");

  client.subscribe("topic1", (err) => {
    if (err) console.error(err);
    else console.log("Sucessfully scbscribed topic: topic2");
  });
  const message = "Hello From client 1";
  const topic = "topic1";
  client.publish(topic, message, (err) => {
    if (err) console.error(err);
  });
};
