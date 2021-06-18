import React, { Component } from "react";
import { Radar } from "react-chartjs-2";
import greif3 from "./../pictures/modul_greifarm/3.jpg";
import greif2 from "./../pictures/modul_greifarm/2.jpg";
import greif1 from "./../pictures/modul_greifarm/1.jpg";
import greif0 from "./../pictures/modul_greifarm/0.jpg";

import Pdf from "react-to-pdf";
import ReactToPrint from "react-to-print";

class SurveyResults extends Component {
  render() {
    // const addition = this.props.data.prozessdauer + this.props.data.wiederholungen;
    console.log(this.props);
    const {
      genauigkeit,
      handhabungsgewicht,
      materialvarianz,
      prozessdauer,
      werkzeuge,
      wiederholungen,
      ziele_automatisierung,
    } = this.props.props.data;

    const automatisierungsgrad =
      genauigkeit +
      handhabungsgewicht +
      materialvarianz +
      prozessdauer +
      werkzeuge +
      wiederholungen;

    const ref = React.createRef();

    return (
      <div>
        <div ref={ref}>
          {JSON.stringify(this.props.props.data)}
          <h1>Auswertung der Daten</h1>
          <h3>Benutzerdaten:</h3>
          <ul>
            <li>Name: {this.props.props.data.benutzerdaten.name}</li>
            <li>E-Mail: {this.props.props.data.benutzerdaten.mail}</li>
            <li>Ort: {this.props.props.data.benutzerdaten.ort}</li>
            <li>
              Areitsplatz: {this.props.props.data.benutzerdaten.arbeitsplatz}
            </li>
          </ul>

          <h3>Ziele der Automatisierung:</h3>
          <p>"{ziele_automatisierung}"</p>
          <h3>Prozessdaten:</h3>
          <ul>
            <li>Automatisierungsgrad: {automatisierungsgrad}/18</li>
            <ul>
              {automatisierungsgrad > 10 ? (
                <li>
                  Automatisierungsgrad über 10: <br />
                  Eine Automatisierung ist sinnvoll
                </li>
              ) : null}
            </ul>
          </ul>
          <div>
            <Radar
              data={{
                labels: [
                  "Genaugikeit",
                  "Handhabungsgewicht",
                  "Materialverhalten",
                  "Prozessdauer",
                  "Werkzeuge",
                  "Wiederholungen",
                ],
                datasets: [
                  {
                    label: "Daten ",
                    data: [
                      genauigkeit,
                      handhabungsgewicht,
                      materialvarianz,
                      prozessdauer,
                      werkzeuge,
                      wiederholungen,
                    ],
                    fill: true,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgb(255, 99, 132)",
                    pointBackgroundColor: "rgb(255, 99, 132)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgb(255, 99, 132)",
                  },
                ],
              }}
              height={600}
              width={800}
              options={{
                scales: {
                  r: {
                    anlgeLines: {
                      display: false,
                    },
                    suggestedMin: 0,
                    suggestedMax: 3,
                  },
                },
                maintainAspectRatio: false,
              }}
            />
          </div>
          <h3>Empfohlene Module:</h3>
          <ul>
            <li>
              <b>Greifmodul</b> <br />
              {handhabungsgewicht == 3 ? (
                <div>
                  <img src={greif3} alt="Logo" />
                  <p>
                    Modell: GSM-P
                    <br />
                    Kosten: 500€ <br />
                    max. Handhabungsgewicht: 1 kg <br />
                    Eigenmasse: 0,37 kg
                  </p>
                </div>
              ) : null}
              {handhabungsgewicht == 2 ? (
                <div>
                  <img src={greif2} alt="Logo" />
                  <p>
                    Modell: GSM-te
                    <br />
                    Kosten: 1000€
                    <br />
                    max. Handhabungsgewicht: 5 kg <br />
                    Eigenmasse: 0,37 kg
                  </p>
                </div>
              ) : null}
              {handhabungsgewicht == 1 ? (
                <div>
                  <img src={greif1} alt="Logo" />
                  <p>
                    Modell: GSM-PE
                    <br />
                    Kosten: 5000€
                    <br />
                    max. Handhabungsgewicht: 10 kg <br />
                    Eigenmasse: 0,37 kg
                  </p>
                </div>
              ) : null}
              {handhabungsgewicht == 0 ? (
                <div>
                  <img src={greif0} alt="Logo" />
                  <p>
                    Modell: GSM-MAX
                    <br />
                    Kosten: 10000€ <br />
                    max. Handhabungsgewicht: 100 kg <br />
                    Eigenmasse: 0,37 kg
                  </p>
                </div>
              ) : null}
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
              quis doloribus neque voluptatibus cumque, dignissimos nulla iure
              quos deserunt et eligendi fuga ea maxime magni quibusdam adipisci
              blanditiis non sunt. Molestias rem perspiciatis ex quisquam
              maiores ipsa pariatur nesciunt culpa eum obcaecati modi adipisci
              repellat, ipsam harum reprehenderit consectetur nobis magnam,
              iusto tempore voluptas sapiente neque laborum officia voluptatum.
              Sint aliquam labore libero hic aperiam porro atque molestiae
              dolorem adipisci odit. Minus consequuntur magni eius molestias
              dolore cupiditate neque repudiandae nulla, nesciunt dicta? Quia
              dicta quis cum dolorum nostrum! Rerum molestiae a, repellat sunt
              iusto vero sapiente nesciunt earum hic et officiis repudiandae
              fugit molestias commodi esse corrupti sit rem nulla, animi velit
              quis recusandae aspernatur natus. Molestiae nostrum exercitationem
              quam, totam itaque voluptate vitae distinctio sequi incidunt rem
              necessitatibus officiis. Unde molestias laudantium eos aut ullam
              necessitatibus recusandae saepe maxime nulla, incidunt velit illo
              rerum maiores? Dicta autem accusamus alias nulla, dolor doloremque
              sint sequi odit amet, accusantium deleniti unde? Ducimus eos sint
              nulla ullam nam culpa, praesentium tenetur maiores nisi, eveniet
              nesciunt aperiam illo amet corporis incidunt quasi temporibus
              veritatis odio at nihil dicta animi laboriosam rerum autem?
              Praesentium dolores quam reprehenderit necessitatibus, distinctio
              placeat eveniet fuga architecto ullam ut vitae expedita ducimus
              numquam error voluptas cumque? Quas reiciendis nulla aliquam,
              provident, voluptate vitae blanditiis commodi quidem non,
              necessitatibus dicta autem minus voluptatem eligendi? Nam quasi
              temporibus est assumenda asperiores dignissimos pariatur
              consequatur corrupti, maiores dolor voluptatibus quis totam amet
              saepe, quod excepturi esse ad, tenetur distinctio officia
              doloremque facere iusto. Commodi incidunt hic perspiciatis
              repellat! Eos fugiat obcaecati omnis ducimus quae. Minima
              laboriosam voluptate id molestias distinctio, exercitationem
              voluptatum illum explicabo repellat atque odio itaque aperiam
              porro perferendis magnam nesciunt eum ullam rem nostrum. Incidunt
              voluptates aspernatur, veniam fugiat, rerum vitae eveniet
              provident autem tempore voluptatem, veritatis maiores. Amet
              reiciendis corrupti quae, autem vitae provident alias eius placeat
              dolor? Dolor et voluptate laudantium veniam eius, quos quidem,
              possimus pariatur non explicabo sint quas exercitationem, iusto
              corrupti quia quaerat ab dolores a nemo. Ipsam et praesentium
              velit, delectus, quam quaerat quidem rerum cupiditate inventore
              optio voluptatibus magni dolor ut! Explicabo autem rem corporis
              nemo temporibus magnam non accusamus voluptatem nam aut esse,
              dicta vel ipsa quisquam inventore ut quia necessitatibus
              consequatur! Cupiditate, itaque iure. Aperiam similique aut
              voluptatum nostrum mollitia, eveniet labore, distinctio delectus
              ipsa fuga accusantium officiis magnam doloremque ab ullam
              obcaecati ipsam voluptates expedita nam dolorem ad incidunt sequi
              assumenda? Natus, vitae dolorum! Quidem optio, reprehenderit iure
              exercitationem itaque impedit esse nulla odit voluptas quibusdam
              non facere velit ea laborum magnam dolor architecto aperiam.
              Aperiam nesciunt consectetur excepturi obcaecati iure pariatur,
              eaque sunt natus deserunt in error optio, harum est. Quam facilis
              incidunt asperiores est recusandae. Fugiat amet voluptates facere
              nihil minima voluptatibus. Sapiente dicta vel perferendis cumque,
              nesciunt iusto. Qui, quibusdam ipsam consequuntur nesciunt,
              exercitationem aliquam, accusantium eius possimus dolores deleniti
              ab facere corrupti libero. Illum odio laborum iure rerum quas
              atque dolores, in aliquam. Ducimus pariatur quae voluptas
              aspernatur architecto magnam dolor odit sint animi, autem sequi
              nobis maiores rem repellat nesciunt voluptate dolore perferendis
              expedita dignissimos in qui suscipit. Eveniet debitis sit
              molestias iure, distinctio atque et minus quibusdam sequi. Aperiam
              qui, praesentium in earum illum hic. Nesciunt libero quas vel.
              Voluptatibus, atque nobis unde deleniti perspiciatis similique
              doloribus quam odio natus facilis possimus id est animi quod
              explicabo fugiat velit, reprehenderit minus voluptate. Ut eos ad
              commodi deleniti! Dolor sapiente magnam, repellendus possimus
              voluptates reiciendis quidem ab iusto odio commodi consequatur eum
              quos facere dolorum consectetur voluptatum ad ullam, sunt
              exercitationem eos. Pariatur aperiam debitis, dolore earum
              exercitationem qui aliquid. Numquam ad, ducimus unde laudantium
              consectetur ipsam ex repudiandae ut dignissimos excepturi, tenetur
              nihil, veritatis officiis illum error totam pariatur natus fugiat
              repellat! Optio eos, corrupti assumenda voluptatibus facilis, non
              velit ex illo repudiandae officia similique tempore ducimus minus
              error totam, id sequi. Aut, ipsam nesciunt itaque nemo excepturi
              inventore dolorum atque, ratione amet, quos beatae earum id ipsa
              minima velit nobis enim in. Placeat quibusdam vitae vero corporis?
              Voluptates debitis sint doloribus molestiae natus maiores,
              voluptatum impedit quidem quo iure, odit facere qui at eaque.
              Culpa possimus dicta ut iusto praesentium veritatis debitis
              deserunt dolor sequi quisquam tempore cupiditate a sunt porro
              distinctio nostrum est, nulla nisi soluta perferendis quaerat
              rerum numquam nobis? A distinctio quia facere, minus repellendus
              libero itaque veritatis exercitationem commodi blanditiis,
              laboriosam nulla dolore eveniet natus dicta. Aut laudantium sequi,
              possimus doloremque fuga a distinctio cumque dolorum iure quod
              voluptatum minus tempora rerum eligendi vitae ea! Alias possimus
              ex suscipit quasi saepe aliquid sunt, vero, ducimus reiciendis
              doloremque quo earum autem? Ea, inventore fugit enim et repellat
              corrupti, odit incidunt iste, unde delectus hic tempora adipisci a
              illo. Qui, tenetur quod delectus laborum iste cumque dolores
              labore eius iusto at a assumenda consectetur obcaecati placeat
              tempora dicta voluptas commodi. Inventore eligendi provident atque
              sint itaque aperiam nisi obcaecati cupiditate explicabo id. Quis
              saepe laudantium quibusdam, minus vel libero veritatis placeat
              impedit ipsa delectus eos, animi fuga! Harum, vitae. Aliquid sit
              debitis dolorum ducimus reiciendis deleniti pariatur sapiente
              placeat alias provident dicta sed nam esse in, quibusdam,
              architecto expedita dolore. Maiores sint unde accusamus,
              exercitationem qui nobis mollitia saepe voluptates quia reiciendis
              officia neque, doloremque pariatur soluta illo placeat culpa fugit
              accusantium provident molestias excepturi quo. Quibusdam quo
              quisquam exercitationem enim perferendis. Odit obcaecati ut ab
              nulla, asperiores beatae, ullam sequi minima, optio voluptatum
              rerum error maxime aliquid corporis corrupti ea iste repudiandae
              nobis. Aut optio, maiores totam consequatur mollitia id excepturi
              amet doloremque delectus minus voluptates? Quis recusandae,
              pariatur cum blanditiis nam unde nihil optio magni asperiores et
              temporibus voluptas libero dicta impedit ducimus, nesciunt,
              delectus in eligendi quidem repellat illo maiores eius? Suscipit
              accusamus ad, quod porro deleniti, culpa, obcaecati unde dolore
              alias eveniet illum doloremque earum repellat eius. Ratione
              aliquam nisi dolor. Vel debitis consectetur esse! Laboriosam hic
              quibusdam dolore accusamus quo alias ullam quae unde, voluptatum
              id molestiae nobis nemo dolores officia sed atque voluptatibus ad
              dolor quis. Commodi excepturi architecto magni non dicta!
            </li>
          </ul>
        </div>
        {/* <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf> */}
      </div>
    );
  }
}

export default SurveyResults;
