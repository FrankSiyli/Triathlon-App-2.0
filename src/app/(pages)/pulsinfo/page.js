import React from "react";
import "./pulsinfo.css";

function Page() {
  return (
    <>
      <div>
        <div className="">
          <div className="border border-light rounded-md p-4 m-1 bg-dark text-center">
            <p>
              Einem HRmax Test sollten mehrere Monate mit strukturiertem
              Training vorangehen.
            </p>
            <p>
              Falls du in den letzten 6 Monaten bei einem Event einen All OUT
              Zielsprint angesetzt hast kannst du dir diese Puls-Werte gern mal
              genauer anschauen.
            </p>
            <p>
              Der sicherste Weg um genaue Werte zu erhalten bleibt eine
              professionelle Leistungsdiagnostik.
            </p>
          </div>
          <div className="ml-2">
            <label className="label mt-10 ">
              <span className="label-text-alt text-light ">
                Dein Maximalpuls
              </span>
            </label>
            <input
              type="number"
              maxLength={3}
              placeholder="HRmax z.B. 185"
              id="heartrateInput"
              className="input  border border-red mb-3 w-full max-w-xs"
            />

            <button
              className="btn btn-sm  mb-10 bg-red border border-grey text-light"
              id="calculateBtn"
              onClick="percentage1();
            percentage2();
            percentage3();
            percentage4();
            percentage5();
            percentageAnaerob();
            percentageAerob();
            clearHR();
            "
            >
              Calculate
            </button>
          </div>

          {/**------------------------------------------------------------------------------------------ */}
          {/**------------------------------------------------------------------------------------------ */}
          {/**------------------------------------------------------------------------------------------ */}
          {/**------------------------------------------------------------------------------------------ */}

          <div className="overflow-x-auto">
            <table className="table table-xs table-pin-rows table-pin-cols bg-dark text-light text-center border border-light">
              <thead className="text-light">
                <tr>
                  <td>Zone</td>
                  <td>HR percent</td>
                  <td>Target HR bpm</td>
                  <td>Thresholds bpm</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id="zone5"> 5 Speed</td>
                  <td>90 - 100</td>
                  <td>
                    <input
                      className="w-20 bg-dark"
                      type="number"
                      id="tgOutput5"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td id="zone4">4 Anaerobic</td>
                  <td>80 - 90</td>
                  <td>
                    <input
                      className="w-20 bg-dark"
                      type="number"
                      id="tgOutput4"
                      readOnly
                    />
                  </td>
                  <td>
                    Anaerobic{" "}
                    <input
                      className="w-20 bg-dark"
                      type="number"
                      id="anaerobicOutput"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td id="zone3">3 Aerobic</td>
                  <td>70 - 80</td>
                  <td>
                    <input
                      className="w-20 bg-dark"
                      type="number"
                      id="tgOutput3"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td id="zone2">2 Base</td>
                  <td>60 - 70</td>
                  <td>
                    <input
                      className="w-20 bg-dark"
                      type="number"
                      id="tgOutput2"
                      readOnly
                    />
                  </td>
                  <td>
                    Aerobic{" "}
                    <input
                      className="w-20 bg-dark"
                      type="number"
                      id="aerobicOutput"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td id="zone1">1 Warmup</td>
                  <td>50 - 60</td>
                  <td>
                    <input
                      className="w-20 bg-dark"
                      type="number"
                      id="tgOutput1"
                      readOnly
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/**------------------------------------------------------------------------------------------ */}
          {/**------------------------------------------------------------------------------------------ */}
          {/**------------------------------------------------------------------------------------------ */}
          {/**------------------------------------------------------------------------------------------ */}

          <div className="border border-light rounded-md p-4 mx-1 mb-5 mt-20 bg-dark text-center">
            <p>
              Wenn du am Anfang deiner sportlichen Entwicklung stehst oder nach
              einer Pause wieder einsteigen möchtest kannst du auch die Formeln
              benutzen um einen Richtwert zu erhalten.
            </p>
          </div>

          <div className="ml-2 mt-10">
            <button className="btn btn-secondary pointer-events-none border-light  bg-red   text-light">
              HRmax = 209-(0.9 x Alter) Damen
            </button>
            <label className="label  ">
              <span className="label-text-alt text-light ">Dein Alter</span>
            </label>
            <input
              type="number"
              maxLength={3}
              placeholder="z.B. 35"
              id="HrDamenCalculatorInput"
              className="input  border border-red mb-3 w-full max-w-xs"
            />

            <button
              className="btn btn-sm  mb-10 bg-red border border-light text-light rounded-r-none"
              id="HrDamenCalculateBtn"
              onclick="HrDamenAlter(),
              clearHrDamenInput()
            "
            >
              Calculate
            </button>
            <input
              className="bg-light h-8 ml-1 rounded-r-md text-dark"
              maxLength={3}
              type="text"
              id="HrDamenCalculatorOutput"
              readOnly
            />
          </div>

          <div className="ml-2 ">
            <button className="btn btn-secondary pointer-events-none border-light  bg-red mt-20  text-light">
              HRmax = 214-(0.8 x Alter) Herren
            </button>

            <label className="label ">
              <span className="label-text-alt text-light ">Dein Alter</span>
            </label>
            <input
              type="number"
              maxLength={3}
              placeholder="z.B. 35"
              id="HrHerrenCalculatorInput"
              className="input  border border-red mb-3 w-full max-w-xs"
            />

            <button
              className="btn btn-sm  mb-10 bg-red border border-light text-light rounded-r-none"
              id="HrHerrenCalculateBtn"
              onclick="HrHerrenAlter(),
              clearHrHerrenInput()
            "
            >
              Calculate
            </button>

            <input
              className="bg-light h-8 ml-1 rounded-r-md text-dark"
              maxLength={3}
              type="text"
              id="HrHerrenCalculatorOutput"
              readOnly
            />
          </div>
        </div>

        {/**------------------------------------------------------------------------------------------ */}
        {/**------------------------------------------------------------------------------------------ */}

        {/**------------------------------------------------------------------------------------------ */}
        {/**------------------------------------------------------------------------------------------ */}

        <div className="border border-light rounded-md p-4 mx-1 mb-5 mt-20 bg-dark text-center">
          <p>
            Du hast deinen FTP Wert bereits auf einer smarten Rolle ermittelt?
          </p>
          <p>Dann kannst du hier deine Trainingszonen berechnen.</p>
        </div>
        <div className="schrift">
          <div className="WinputCalculator">
            <div className="ml-2">
              <label className="label mt-10 ">
                <span className="label-text-alt text-light ">
                  Dein Maximalpuls
                </span>
              </label>
              <input
                type="number"
                maxLength={3}
                placeholder="FTP z.B. 250"
                id="WattInput"
                className="input  border border-red mb-3 w-full max-w-xs"
              />

              <button
                className="btn btn-sm  mb-10 bg-red border border-light text-light"
                id="WcalculateBtn"
                onclick="wattZones7(); 
            wattZones6(); 
            wattZones5(); 
            wattZones4(); 
            wattZones3(); 
            wattZones2(); 
            wattZones1();
            clearW();
            "
              >
                Calculate
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-xs table-pin-rows table-pin-cols mb-20 bg-dark text-light text-center">
              <thead className="text-light">
                <tr>
                  <td>Zone</td>
                  <td>Power in Watt</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tg1" id="zone5">
                    7 Sprint Power
                  </td>
                  <td className="tg1">
                    <input
                      className="bg-dark"
                      type="text"
                      id="tgOutput700"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td className="tg1" id="zone45">
                    6 Anaerobic Capacity
                  </td>
                  <td className="tg1">
                    <input
                      className="bg-dark"
                      type="text"
                      id="tgOutput600"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td className="tg1" id="zone4">
                    5 VO2max
                  </td>
                  <td className="tg1">
                    <input
                      className="bg-dark"
                      type="text"
                      id="tgOutput500"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td className="tg1" id="zone35">
                    4 Lactate Threshold
                  </td>
                  <td className="tg1">
                    <input
                      className="bg-dark"
                      type="text"
                      id="tgOutput400"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td className="tg1" id="zone3">
                    3 Tempo
                  </td>
                  <td className="tg1">
                    <input
                      className="bg-dark"
                      type="text"
                      id="tgOutput300"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td className="tg1" id="zone2">
                    2 Aerobic Endurance
                  </td>
                  <td className="tg1">
                    <input
                      className="bg-dark"
                      type="text"
                      id="tgOutput200"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td className="tg1" id="zone1">
                    1 Active Recovery
                  </td>
                  <td className="tg1">
                    <input
                      className="bg-dark"
                      type="text"
                      id="tgOutput100"
                      readOnly
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
