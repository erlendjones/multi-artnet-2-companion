import { Command } from "commander";
const figlet = require("figlet");

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

export const options = program.opts();
