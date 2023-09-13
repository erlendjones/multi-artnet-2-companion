import chalk from "chalk";
import { Command } from "commander";

import Debug from "./utils/debug";
import { msToTc } from "./utils/msToTc";
const figlet = require("figlet");
const debug = Debug("CORE");

const program = new Command();

console.log(figlet.textSync("Art2Companion"));

program
  .version("1.0.0")
  .description("Multi Artnet 2 Companion converter")
  .option("-e, --emitRandom <emitRandom>", "Emit Random Artnet-Data")
  .option("-s, --subnet <subnet>", "Artnet Subnet")
  .option("-u, --universe <universe>", "Artnet Universe")
  .option("-n, --net <net>", "Artnet Net")
  .parse(process.argv);

const options = program.opts();

var dmxlib = require("dmxnet");

var dmxnet = new dmxlib.dmxnet({
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
var receiver = dmxnet.newReceiver({
  subnet: options.subnet || 0, //Destination subnet, default 0
  universe: options.universe || 0, //Destination universe, default 0
  net: options.net || 0, //Destination net, default 0
});

const oldValues: { [keys: string]: any } = {};

receiver.on("data", (data: number[]) => {
  console.log("DMX data:", data);
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
const handleValueChange = (channel: string, dmxValue: number) => {
  // ip, port, page, button
  fetch(`http://127.0.0.1:8000/press/bank/${channel}/${dmxValue}`).catch(
    (err) => {
      console.log("Error sending value to Companion", err);
    }
  );
};

const init = async () => {
  debug("Running...");
};

init();

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
