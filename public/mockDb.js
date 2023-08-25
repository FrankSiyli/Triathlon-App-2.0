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
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
        {
          day: "Dienstag",
          activity: "Placeholder",
          description: "4x4x100m Steigerungen",
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],

              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
        {
          day: "Mittwoch",
          activity: "Placeholder",
          description: "4x4x100m Steigerungen",
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],

              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
        {
          day: "Donnerstag",
          activity: "Placeholder",
          description: "4x4x100m Steigerungen",
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],

              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
        {
          day: "Freitag",
          activity: "Placeholder",
          description: "4x4x100m Steigerungen",
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],

              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
        {
          day: "Samstag",
          activity: "Placeholder",
          description: "4x4x100m Steigerungen",
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],

              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
        {
          day: "Sonntag",
          activity: "Placeholder",
          description: "4x4x100m Steigerungen",
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],

              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
      ],
    },
    //---------week2-------------------------------------------------------------------------------------------------------------
    {
      week: 2,
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
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
        {
          day: "Dienstag",
          activity: "Placeholder",
          description: "4x4x100m Steigerungen",
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],

              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
        {
          day: "Mittwoch",
          activity: "Placeholder",
          description: "4x4x100m Steigerungen",
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],

              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
        {
          day: "Donnerstag",
          activity: "Placeholder",
          description: "4x4x100m Steigerungen",
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],

              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
        {
          day: "Freitag",
          activity: "Placeholder",
          description: "4x4x100m Steigerungen",
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],

              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
        {
          day: "Samstag",
          activity: "Placeholder",
          description: "4x4x100m Steigerungen",
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],

              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
        {
          day: "Sonntag",
          activity: "Placeholder",
          description: "4x4x100m Steigerungen",
          sessionParts: [
            {
              warmUp: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "einschwimmen",
                      distance: 250,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],

              main: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "2er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "3er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "4er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "5er Atmung",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 4,
                  exercises: [
                    {
                      name: "möglichst wenig Züge",
                      distance: 25,
                      duration: 0,
                      zone: swimZ5,
                    },
                    {
                      name: "entspannt",
                      distance: 25,
                      duration: 0,
                      zone: swimZ2,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "Unterwasserarmvorschwung",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "Schultern maximal nach vorne bringen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "nach vorne gerade gestreckter Arm, kein Knick im Ellenbogen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                    {
                      name: "entspannte Finger und Hände",
                      distance: 100,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "alle Lagen",
                      distance: 200,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
                {
                  multiplier: 1,
                  exercises: [
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ2,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ3,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ4,
                    },
                    {
                      name: "kraulen",
                      distance: 100,
                      duration: 0,
                      zone: swimZ5,
                    },
                  ],
                },
              ],
              coolDown: [
                {
                  multiplier: 1,

                  exercises: [
                    {
                      name: "ausschwimmen",
                      distance: 50,
                      duration: 0,
                      zone: swimZ1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        //----------------------------------------------------------------------------------------------------------------------
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
