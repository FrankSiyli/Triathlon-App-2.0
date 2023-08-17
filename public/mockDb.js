import { formatTime, tresholdsAndPaces } from "@/app/helperFunctions";

const { swim100mPace, bikeTreshold } = tresholdsAndPaces();
const userMaxHeartrate = 200;
const heartrateInput = userMaxHeartrate / 100;

//swim pace zones:
const swimZ1 = `${formatTime(swim100mPace + 20)} min/100m`; // warm up / cool down
const swimZ2 = `${formatTime(swim100mPace + 10)} min/100m`; // endurance
const swimZ3 = `${formatTime(swim100mPace + 5)} min/100m`; // tempo
const swimZ4 = `${formatTime(swim100mPace)} min/100m`; // treshold
const swimZ5 = `${formatTime(swim100mPace - 5)} min/100m`; // anaerobic
const swimZ6 = `${formatTime(swim100mPace - 10)} min/100m`; // max effort

// run heartrate zones
const runZ1 = `${Math.round(heartrateInput * 50)} - ${Math.round(
  heartrateInput * 60
)} bpm`;
const runZ2 = `${Math.round(heartrateInput * 60)} - ${Math.round(
  heartrateInput * 70
)} bpm`;
const runZ3 = `${Math.round(heartrateInput * 70)} - ${Math.round(
  heartrateInput * 80
)} bpm`;
const runZ4 = `${Math.round(heartrateInput * 80)} - ${Math.round(
  heartrateInput * 90
)} bpm`;
const runZ5 = `${Math.round(heartrateInput * 90)} - ${Math.round(
  heartrateInput * 100
)} bpm`;

// bike heartrate zones

const bikeHeartrateZ1 = `${Math.round(heartrateInput * 45)} - ${Math.round(
  heartrateInput * 55
)} bpm`;
const bikeHeartrateZ2 = `${Math.round(heartrateInput * 55)} - ${Math.round(
  heartrateInput * 65
)} bpm`;
const bikeHeartrateZ3 = `${Math.round(heartrateInput * 65)} - ${Math.round(
  heartrateInput * 75
)} bpm`;
const bikeHeartrateZ4 = `${Math.round(heartrateInput * 75)} - ${Math.round(
  heartrateInput * 85
)} bpm`;
const bikeHeartrateZ5 = `${Math.round(heartrateInput * 85)} - ${Math.round(
  heartrateInput * 95
)} bpm`;

// bike watt zones

const examplePlan = {
  name: "Beispielplan",
  price: "free",
  duration: 2,
  sessions: [
    {
      week: 1,
      sessions: [
        {
          day: "Montag",
          activity: "Schwimmen",
          description: "4x4x100m Steigerungen",
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "bla",
                      distance: 20,
                      duration: 0,
                      zone: bikeHeartrateZ1,
                    },
                  ],
                },
              ],

              main: [
                {
                  multiplier: 2,

                  exercises: [
                    {
                      name: "bla",
                      distance: 50,
                      duration: 0,
                      zone: 3,
                    },
                    {
                      name: "blu",
                      distance: 25,
                      duration: 0,
                      zone: 1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "blub",
                      distance: 50,
                      duration: 0,
                      zone: 3,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "bla",
                      distance: 50,
                      duration: 0,
                      zone: 1,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
/* {
          day: "Montag",
          activity: "Laufen",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * runTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * runTreshold}bpm`,
                `10 min @ ${0.9 * runTreshold}bpm`,
                `10 min @ ${0.8 * runTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * runTreshold}bpm`,
            },
          ],
        },
        {
          day: "Montag",
          activity: "Stabilitätstraining",
          description: "Core-Übungen",
          sessionParts: [
            {
              warmUp: "30 sek hüpfen",
              main: [
                `1 min Hampelmann`,
                `1 min Liegestütz`,
                `1 min Plank`,
                `1 min hampelmann`,
                `1 min Liegestütz`,
              ],
              coolDown: "2 min liegen und tief ein und ausatmen",
            },
          ],
        },
        {
          day: "Dienstag",
          activity: "Radfahren",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * bikeTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * bikeTreshold}bpm`,
                `10 min @ ${0.9 * bikeTreshold}bpm`,
                `10 min @ ${0.8 * bikeTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * bikeTreshold}bpm`,
            },
          ],
        },
        {
          day: "Dienstag",
          activity: "Yoga",
          description: "Dehnungsübungen",
          sessionParts: [
            {
              warmUp: "2 min Kopf und Schulterkreisen im sitzen",
              main: [
                `1 min Katze`,
                `1 min Hund`,
                `1 min Baby`,
                `1 min Krähe`,
                `1 min Oktopus`,
              ],
              coolDown: "2 min liegen und tief ein und ausatmen",
            },
          ],
        },
        {
          day: "Dienstag",
          activity: "Stabilitätstraining",
          description: "Core-Übungen",
          sessionParts: [
            {
              warmUp: "30 sek hüpfen",
              main: [
                `1 min Hampelmann`,
                `1 min Liegestütz`,
                `1 min Plank`,
                `1 min hampelmann`,
                `1 min Liegestütz`,
              ],
              coolDown: "2 min liegen und tief ein und ausatmen",
            },
          ],
        },
        {
          day: "Mittwoch",
          activity: "Laufen",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * runTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * runTreshold}bpm`,
                `10 min @ ${0.9 * runTreshold}bpm`,
                `10 min @ ${0.8 * runTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * runTreshold}bpm`,
            },
          ],
        },
        {
          day: "Mittwoch",
          activity: "Yoga",
          description: "Dehnungsübungen",
          sessionParts: [
            {
              warmUp: "2 min Kopf und Schulterkreisen im sitzen",
              main: [
                `1 min Katze`,
                `1 min Hund`,
                `1 min Baby`,
                `1 min Krähe`,
                `1 min Oktopus`,
              ],
              coolDown: "2 min liegen und tief ein und ausatmen",
            },
          ],
        },
        {
          day: "Mittwoch",
          activity: "Stabilitätstraining",
          description: "Core-Übungen",
          sessionParts: [
            {
              warmUp: "30 sek hüpfen",
              main: [
                `1 min Hampelmann`,
                `1 min Liegestütz`,
                `1 min Plank`,
                `1 min hampelmann`,
                `1 min Liegestütz`,
              ],
              coolDown: "2 min liegen und tief ein und ausatmen",
            },
          ],
        },
        {
          day: "Donnerstag",
          activity: "schwimmen",
          description: "500 / 1000 / 500",
          sessionParts: [
            {
              warmUp: `200 m @ ${formatTime(1.1 * swim100mPace)} `,
              main: [
                `500 m @ ${formatTime(1 * swim100mPace)} `,
                `1000 m @ ${formatTime(0.9 * swim100mPace)} `,
                `500 m @ ${formatTime(1 * swim100mPace)} `,
              ],
              coolDown: `200 m @ ${formatTime(1.1 * swim100mPace)} `,
            },
          ],
        },
        {
          day: "Freitag",
          activity: "Radfahren",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * bikeTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * bikeTreshold}bpm`,
                `10 min @ ${0.9 * bikeTreshold}bpm`,
                `10 min @ ${0.8 * bikeTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * bikeTreshold}bpm`,
            },
          ],
        },
        {
          day: "Samstag",
          activity: "Laufen",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * runTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * runTreshold}bpm`,
                `10 min @ ${0.9 * runTreshold}bpm`,
                `10 min @ ${0.8 * runTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * runTreshold}bpm`,
            },
          ],
        },
        {
          day: "Sonntag",
          activity: "Schwimmen",
          description: "500 / 1000 / 500",
          sessionParts: [
            {
              warmUp: `200 m @ ${formatTime(1.1 * swim100mPace)} `,
              main: [
                `500 m @ ${formatTime(1 * swim100mPace)} `,
                `1000 m @ ${formatTime(0.9 * swim100mPace)} `,
                `500 m @ ${formatTime(1 * swim100mPace)} `,
              ],
              coolDown: `200 m @ ${formatTime(1.1 * swim100mPace)} `,
            },
          ],
        },
      ],
    },
    {
      week: 2,
      sessions: [
        {
          day: "Montag",
          activity: "Schwimmen",
          description: "500 / 1000 / 500",
          sessionParts: [
            {
              warmUp: `200 m @ ${formatTime(1.1 * swim100mPace)} `,
              main: [
                `500 m @ ${formatTime(1 * swim100mPace)} `,
                `1000 m @ ${formatTime(0.9 * swim100mPace)} `,
                `500 m @ ${formatTime(1 * swim100mPace)} `,
              ],
              coolDown: `200 m @ ${formatTime(1.1 * swim100mPace)} `,
            },
          ],
        },
        {
          day: "Dienstag",
          activity: "Radfahren",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * bikeTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * bikeTreshold}bpm`,
                `10 min @ ${0.9 * bikeTreshold}bpm`,
                `10 min @ ${0.8 * bikeTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * bikeTreshold}bpm`,
            },
          ],
        },
        {
          day: "Mittwoch",
          activity: "Laufen",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * runTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * runTreshold}bpm`,
                `10 min @ ${0.9 * runTreshold}bpm`,
                `10 min @ ${0.8 * runTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * runTreshold}bpm`,
            },
          ],
        },
        {
          day: "Donnerstag",
          activity: "Schwimmen",
          description: "500 / 1000 / 500",
          sessionParts: [
            {
              warmUp: `200 m @ ${formatTime(1.1 * swim100mPace)} `,
              main: [
                `500 m @ ${formatTime(1 * swim100mPace)} `,
                `1000 m @ ${formatTime(0.9 * swim100mPace)} `,
                `500 m @ ${formatTime(1 * swim100mPace)} `,
              ],
              coolDown: `200 m @ ${formatTime(1.1 * swim100mPace)} `,
            },
          ],
        },
        {
          day: "Freitag",
          activity: "Radfahren",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * bikeTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * bikeTreshold}bpm`,
                `10 min @ ${0.9 * bikeTreshold}bpm`,
                `10 min @ ${0.8 * bikeTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * bikeTreshold}bpm`,
            },
          ],
        },
        {
          day: "Samstag",
          activity: "Laufen",
          description: "3 x 10 min",
          sessionParts: [
            {
              warmUp: `10 min @ ${0.7 * runTreshold}bpm`,
              main: [
                `10 min @ ${0.8 * runTreshold}bpm`,
                `10 min @ ${0.9 * runTreshold}bpm`,
                `10 min @ ${0.8 * runTreshold}bpm`,
              ],
              coolDown: `5 min @ ${0.7 * runTreshold}bpm`,
            },
          ],
        },
        {
          day: "Sonntag",
          activity: "Schwimmen",
          description: "500 / 1000 / 500",
          sessionParts: [
            {
              warmUp: `200 m @ ${formatTime(1.1 * swim100mPace)} `,
              main: [
                `500 m @ ${formatTime(1 * swim100mPace)} `,
                `1000 m @ ${formatTime(0.9 * swim100mPace)} `,
                `500 m @ ${formatTime(1 * swim100mPace)} `,
              ],
              coolDown: `200 m @ ${formatTime(1.1 * swim100mPace)} `,
            },
          ],
        },
     */

export default examplePlan;
