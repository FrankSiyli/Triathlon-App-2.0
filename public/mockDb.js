import { formatTime, tresholdsAndPaces } from "@/app/helperFunctions";

//_________________________________________________________________________
//_________________________________________________________________________
const data = {
  id: 1,
  name: "frank",
  bankAccount1: {
    multiplier: 3,
    balance: 100,
  },
  bankAccount2: {
    multiplier: 3,
    balance: 200,
  },
};

const totalBalance =
  data.bankAccount1.balance * data.bankAccount1.multiplier +
  data.bankAccount2.balance * data.bankAccount2.multiplier;

//_________________________________________________________________________
//_________________________________________________________________________

const { swim100mPace, runTreshold, bikeTreshold } = tresholdsAndPaces();

let distance = 0;
let repetitionDistance = 0;

//swim zones:
const swimZ1 = formatTime(swim100mPace + 20); // warm up / cool down
const swimZ2 = formatTime(swim100mPace + 10); // endurance
const swimZ3 = formatTime(swim100mPace + 5); // tempo
const swimZ4 = formatTime(swim100mPace); // treshold
const swimZ5 = formatTime(swim100mPace - 5); // anaerobic
const swimZ6 = formatTime(swim100mPace - 10); // max effort

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
                      distance: 50,
                      duration: 0,
                      zone: 1,
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
