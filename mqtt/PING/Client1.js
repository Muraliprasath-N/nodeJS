const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost", {
  keepalive: 3,
});

client.on("connect", () => {
    console.log("Successfully connected");
    
    setInterval(() => {
        client.publish('topic1', "Sending message");
    }, 3000);

    for (let i = 1; i <= 6; i++) {
        timer(i * 1000, (message) => {
            console.log(message);
        });
    }
});

function timer(ms, fn) {
    setTimeout(() => {
      fn(`${ms} seconds`);
    },ms);
}
