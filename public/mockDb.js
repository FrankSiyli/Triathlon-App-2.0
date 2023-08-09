const bikeTreshold = 190;
const runTreshold = 200;
const swim100mPace = 120;

const examplePlan = {
  name: "Beispielplan",
  duration: 2,
  sessions: [
    {
      week: 1,
      sessions: [
        {
          day: "Montag",
          activity: "Schwimmen",
          description: "500 / 1000 / 500",
          sessionParts: [
            {
              warmUp: `200 m @ ${0.9 * swim100mPace}s/100m`,
              main: [
                `500 m @ ${0.8 * swim100mPace}s/100m `,
                `1000 m @ ${0.7 * swim100mPace}s/100m `,
                `500 m @ ${0.8 * swim100mPace}s/100m`,
              ],
              coolDown: `200 m @ ${0.9 * swim100mPace}s/100m`,
            },
          ],
        },
        {
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
              warmUp: `200 m @ ${0.9 * swim100mPace}s/100m`,
              main: [
                `500 m @ ${0.8 * swim100mPace}s/100m `,
                `1000 m @ ${0.7 * swim100mPace}s/100m `,
                `500 m @ ${0.8 * swim100mPace}s/100m`,
              ],
              coolDown: `200 m @ ${0.9 * swim100mPace}s/100m`,
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
              warmUp: `200 m @ ${0.9 * swim100mPace}s/100m`,
              main: [
                `500 m @ ${0.8 * swim100mPace}s/100m `,
                `1000 m @ ${0.7 * swim100mPace}s/100m `,
                `500 m @ ${0.8 * swim100mPace}s/100m`,
              ],
              coolDown: `200 m @ ${0.9 * swim100mPace}s/100m`,
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
              warmUp: `200 m @ ${0.9 * swim100mPace}s/100m`,
              main: [
                `500 m @ ${0.8 * swim100mPace}s/100m `,
                `1000 m @ ${0.7 * swim100mPace}s/100m `,
                `500 m @ ${0.8 * swim100mPace}s/100m`,
              ],
              coolDown: `200 m @ ${0.9 * swim100mPace}s/100m`,
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
              warmUp: `200 m @ ${0.9 * swim100mPace}s/100m`,
              main: [
                `500 m @ ${0.8 * swim100mPace}s/100m `,
                `1000 m @ ${0.7 * swim100mPace}s/100m `,
                `500 m @ ${0.8 * swim100mPace}s/100m`,
              ],
              coolDown: `200 m @ ${0.9 * swim100mPace}s/100m`,
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
              warmUp: `200 m @ ${0.9 * swim100mPace}s/100m`,
              main: [
                `500 m @ ${0.8 * swim100mPace}s/100m `,
                `1000 m @ ${0.7 * swim100mPace}s/100m `,
                `500 m @ ${0.8 * swim100mPace}s/100m`,
              ],
              coolDown: `200 m @ ${0.9 * swim100mPace}s/100m`,
            },
          ],
        },
      ],
    },
  ],
};
export default examplePlan;
