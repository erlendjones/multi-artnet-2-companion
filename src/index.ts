import Debug from "./utils/debug";
import { options } from "./options";

const debug = Debug("CORE");
const dmxlib = require("dmxnet");

const dmxnet = new dmxlib.dmxnet({
  log: { level: "info" }, // Winston logger options
  oem: 0, // OEM Code from artisticlicense, default to dmxnet OEM.
  esta: 0, // ESTA Manufacturer ID from https://tsp.esta.org, default to ESTA/PLASA (0x0000)
  sName: "Artnet2Companion", // 17 char long node description, default to "dmxnet"
  lName: "Multi Artnet 2 Companion", // 63 char long node description, default to "dmxnet - OpenSource ArtNet Transceiver"
  //  hosts: ["127.0.0.1"], // Interfaces to listen to, all by default
});

// LARSEN
// Set subnet, universe and net to match your setup either here,
// or with "yarn dev --subnet=2 --universe=2 --net=2"
const receiver = dmxnet.newReceiver({
  subnet: options.subnet || 0, //Destination subnet, default 0
  universe: options.universe || 0, //Destination universe, default 0
  net: options.net || 0, //Destination net, default 0
});

const oldValues: { [keys: string]: any } = {};

receiver.on("data", (data: number[]) => {
  const values = data;
  for (const key in values) {
    if (values.hasOwnProperty(key)) {
      const value = values[key];
      if (value !== oldValues[key]) {
        handleValueChange(key, value);
        oldValues[key] = value;
      }
    }
  }
});

import fetch from "node-fetch";

// LARSEN: kan endres om du vil kjøre companion remote, eller har endret porten
const localCompanionHost = "127.0.0.1";
const localCompanionPort = 8000;
const handleValueChange = (channel: string, dmxValue: number) => {
  debug("Pressing button", channel, dmxValue);
  // ip, port, page, button
  fetch(
    `http://${localCompanionHost}:${localCompanionPort}/press/bank/${channel}/${dmxValue}`
  ).catch((err) => {
    console.log("Error sending value to Companion", err);
  });
};

/*






NOT IN USE ...

*/
if (options.emitRandom) {
  const sender = dmxnet.newSender({
    subnet: 0, //Source subnet, default 0
    universe: 0, //Source universe, default 0
    net: 0, //Source net, default 0
    ip: "127.0.0.1",
  });

  setInterval(() => {
    sender.fillChannels(0, 100, Math.random() * 255);
  }, 2000);
}
