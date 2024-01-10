const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost");

client.on("connect", function () {
  console.log("Connected with Broker from client 2");

  client.subscribe("topic1", function (err) {
    if (err) console.error(err);
    else console.log("Subscribed to topic1");
  });

  setInterval(() => {
    const message = "Hello From client 2";
    const topic = "topic2";
    client.publish(topic, message, { qos: 0 }, (err) => {
      if (err) console.error(err);
    });
  }, 2000);
});

client.on("message", function (topic, message) {
  console.log(`Recieved message: ${message} \nFrom Topic: ${topic}`);
});
