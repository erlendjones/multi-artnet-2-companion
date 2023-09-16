import fs from "fs";
import path from "path";

type button = any;
const onePage: {
  [keys: string]: button;
} = {
  "bank:1-1": {
    type: "button",
    style: {
      text: "BLACK",
      size: "14",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "7VRr8SqVOUBWAwr16gWAP",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 0 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-2": {
    type: "button",
    style: {
      text: "BANDCAM #1",
      size: "7",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "ofLYSCRfYmXD82wYjtreJ",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 1 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-3": {
    type: "button",
    style: {
      text: "BANDCAM #2",
      size: "7",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "sUQuCw4VQc7Vreq4QeoA6",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 2 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-4": {
    type: "button",
    style: {
      text: "BANDCAM #3",
      size: "7",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "VkCpUYnvDVm9Sl0JH9jP6",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 3 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-5": {
    type: "button",
    style: {
      text: "BANDCAM #4",
      size: "7",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "_w-MXPlOXiLYZwI6wGCTL",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 4 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-6": {
    type: "button",
    style: {
      text: "BANDCAM #5",
      size: "7",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "ZwNfnUYc0DbNnWy_3s6bS",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 5 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-7": {
    type: "button",
    style: {
      text: "BANDCAM #6",
      size: "7",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "SaaDgQg39-TPm8ig-_9Rk",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 6 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-8": {
    type: "button",
    style: {
      text: "#POV CAM",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "c9nlVHAzITJW1KMamYlSQ",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 7 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-9": {
    type: "button",
    style: {
      text: "#FOH CAM",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "hl9HzF_5CoDaj9JD8YZrF",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 8 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-10": {
    type: "button",
    style: {
      text: "#HH CAM",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "rE3fRVBTHO7cbI7m6awpp",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 9 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-11": {
    type: "button",
    style: {
      text: "RESOLUME 1",
      size: "7",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "txQn2POTOOW8AfAnTNPIx",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 10 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-12": {
    type: "button",
    style: {
      text: "RESOLUME 2",
      size: "7",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "1md0Bd64E8tc_6kvwJHAB",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 11 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-13": {
    type: "button",
    style: {
      text: "RESOLUME 3",
      size: "7",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "Fy7FSx6EZcI1rNmy56KPe",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 12 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-14": {
    type: "button",
    style: {
      text: "RESOLUME 4",
      size: "7",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "yp9Ok7Wk1gjqTQZZwmyEp",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 13 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-15": {
    type: "button",
    style: {
      text: "INPUT 15",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 3342387,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "W5i8SwTGIRyyxSJF9PZ7O",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 14 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-16": {
    type: "button",
    style: {
      text: "INPUT 16",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 3342387,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "MZD-lEmGA-qPZS39XKimT",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 15 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-17": {
    type: "button",
    style: {
      text: "INPUT 17",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 3342387,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "MHUdDipEZNusp8KOYnYo-",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 16 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-18": {
    type: "button",
    style: {
      text: "INPUT 18",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 3342387,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "1Iv5AHPsziYqjnhmJH0Sv",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 17 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-19": {
    type: "button",
    style: {
      text: "INPUT 19",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 3342387,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "3XTwUX2LHoLktZpqnHMMU",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 18 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-20": {
    type: "button",
    style: {
      text: "INPUT 20",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 3342387,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "ObTW73_OgrsdilIkSxKF6",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 19 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-21": {
    type: "button",
    style: {
      text: "INPUT 21",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 3342387,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "EL79GbY6XILfPyivbyFrg",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 20 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-22": {
    type: "button",
    style: {
      text: "INPUT 22",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 3342387,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "FVGBtHed2VhNLXY5f2dDB",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 21 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-23": {
    type: "button",
    style: {
      text: "INPUT 23",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 3342387,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "TqpFtyaCOPYFTSheL_hMV",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 22 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-24": {
    type: "button",
    style: {
      text: "HIGHLITE",
      size: "7",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 0,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: {
          down: [
            {
              id: "S-1pXFGAMu3X7T4Nan7f9",
              action: "aux",
              instance: "gIHVFuARgjaghkiTsKE_f",
              options: { aux: 0, input: 2001 },
              delay: 0,
            },
          ],
          up: [],
        },
        options: { runWhileHeld: [] },
      },
    },
  },
  "bank:1-25": {
    type: "button",
    style: {
      text: "$(atem_1:aux1_input)",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 16711680,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: { down: [], up: [] },
        options: { runWhileHeld: [] },
      },
    },
  },

  "bank:1-32": {
    type: "button",
    style: {
      text: "MIX 1 OUT 1",
      size: "auto",
      png: null,
      alignment: "center:center",
      pngalignment: "center:center",
      color: 16777215,
      bgcolor: 26112,
      show_topbar: "default",
    },
    options: { relativeDelay: false, stepAutoProgress: true },
    feedbacks: [],
    steps: {
      "0": {
        action_sets: { down: [], up: [] },
        options: { runWhileHeld: [] },
      },
    },
  },
};

export const generatePages = () => {
  const result: { [key: string]: any } = {};

  for (let i = 0; i < 40; i++) {
    console.log("creating page", i);
    // for each button in onePage
    const buttonKeys = Object.keys(onePage).sort();
    for (let j = 0; j < buttonKeys.length; j++) {
      const buttonKey = buttonKeys[j];

      console.log("creating button ", j, "based on", buttonKey);

      const buttonNumber = buttonKey.split("-")[1];
      const buttonObj = onePage[buttonKey];
      if (!buttonObj) return;
      const buttonObjAsJson = JSON.stringify(buttonObj);
      // replace "aux": 0, with "aux": i

      let newButtonObjAsJson = "";
      if (i >= 24) {
        const instance2 = "MpjwXjLpqMdOjxS9ZQB7g";
        newButtonObjAsJson = buttonObjAsJson
          .replace(/"aux":0,/g, `"aux":${i - 24},`) // atem action me/aux
          .replace(/gIHVFuARgjaghkiTsKE_f/g, instance2) // atem action id
          .replace(/aux1/g, `aux${i - 24 + 1}`) // feedback aux source
          .replace(/atem_1/g, `atem_2`); // feedback instance
        console.log("instance replaced on button");
      } else {
        newButtonObjAsJson = buttonObjAsJson
          .replace(/"aux":0,/g, `"aux":${i},`)
          .replace(/aux1/g, `aux${i + 1}`);
      }

      // static text button
      if (buttonKey === "bank:1-32") {
        if (i >= 24) {
          newButtonObjAsJson = buttonObjAsJson.replace(
            /MIX 1 OUT 1/g,
            `MIX 2 OUT ${i + 1 - 24}`
          );
        } else {
          newButtonObjAsJson = buttonObjAsJson.replace(
            /MIX 1 OUT 1/g,
            `MIX 1 OUT ${i + 1}`
          );
        }
      }

      // new button key
      const key: any = `bank:${i + 1}-${buttonNumber}`;
      // report if buttonObjAsJson is different from newButtonObjAsJson
      if (buttonObjAsJson !== newButtonObjAsJson) {
        console.log(
          `buttonObjAsJson is different from newButtonObjAsJson for ${key}`
        );
      }
      // convert to object
      const newButtonObj = JSON.parse(newButtonObjAsJson);
      const newButton = { ...newButtonObj };
      result[key] = newButton;
    }
  }

  // write to file
  fs.writeFileSync(
    path.join(__dirname, "..", "src", "pages.json"),
    JSON.stringify(result, null, 2)
  );
};
