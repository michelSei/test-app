import React, { Component } from 'react';
import {Radar} from "react-chartjs-2";
import greif3 from "./../pictures/modul_greifarm/3.jpg";
import greif2 from "./../pictures/modul_greifarm/2.jpg";
import greif1 from "./../pictures/modul_greifarm/1.jpg";
import greif0 from "./../pictures/modul_greifarm/0.jpg";


export default class SurveyResults extends Component {
 render() {
  // const addition = this.props.data.prozessdauer + this.props.data.wiederholungen;
  const {genauigkeit, handhabungsgewicht, materialvarianz, prozessdauer, werkzeuge, wiederholungen, ziele_automatisierung} = this.props.data;
  
  const automatisierungsgrad = genauigkeit+handhabungsgewicht+materialvarianz+prozessdauer+werkzeuge+wiederholungen;

  
  
  return (
   <div>
    {JSON.stringify(this.props.data)}
    <h1>Auswertung der Daten</h1>
    <h3>Benutzerdaten:</h3>
    <ul>
     <li>Name: {this.props.data.benutzerdaten.name}</li>
     <li>E-Mail: {this.props.data.benutzerdaten.mail}</li>
     <li>Ort: {this.props.data.benutzerdaten.ort}</li>
     <li>Areitsplatz: {this.props.data.benutzerdaten.arbeitsplatz}</li>
    </ul>

    <h3>Ziele der Automatisierung:</h3>
    <p>"{ziele_automatisierung}"</p>
    <h3>Prozessdaten:</h3>
    <ul>
     <li>Automatisierungsgrad: {automatisierungsgrad}/18</li>
     <ul>
      {automatisierungsgrad > 10 ? <li>Automatisierungsgrad über 10: <br/>
      Eine Automatisierung ist sinnvoll
    </li> : null}
      </ul>

  
    </ul>
        <div>
     <Radar data={{
  labels: [
    'Genaugikeit',
    'Handhabungsgewicht',
    'Materialverhalten',
    'Prozessdauer',
    'Werkzeuge',
    'Wiederholungen'
  ],
  datasets: [{
    label: 'Daten ',
    data: [genauigkeit,
     handhabungsgewicht,
     materialvarianz,
     prozessdauer,
     werkzeuge,
     wiederholungen],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
     }} height={600}
     width={800}
     options={{
      scales: {
       r: {
        anlgeLines: {
         display: false
        },
        suggestedMin:0,
        suggestedMax: 3
       }
      },
      maintainAspectRatio: false,
     }}
    />
    </div>
    <h3>Empfohlene Module:</h3>
    <ul>
     <li>
      <b>Greifmodul</b> <br/>
      {handhabungsgewicht==3 ? 
      <div>
       <img src={greif3} alt="Logo" />
       <p>Modell: GSM-P<br/>
        Kosten: 500€ <br/>
        max. Handhabungsgewicht: 1 kg <br/>
        Eigenmasse: 0,37 kg
       </p>
      </div>
      
       : null}
       {handhabungsgewicht==2 ? 
      <div>
       <img src={greif2} alt="Logo" />
       <p>Modell: GSM-te<br/>
        Kosten: 1000€<br/>
        max. Handhabungsgewicht: 5 kg <br/>
        Eigenmasse: 0,37 kg
       </p>
      </div>
      
       : null}
       {handhabungsgewicht==1 ? 
      <div>
       <img src={greif1} alt="Logo" />
       <p>Modell: GSM-PE<br/>
        Kosten: 5000€<br/>
        max. Handhabungsgewicht: 10 kg <br/>
        Eigenmasse: 0,37 kg
       </p>
      </div>
      
       : null}
       {handhabungsgewicht==0 ? 
      <div>
       <img src={greif0} alt="Logo" />
       <p>Modell: GSM-MAX<br/>
        Kosten: 10000€ <br/>
        max. Handhabungsgewicht: 100 kg <br/>
        Eigenmasse: 0,37 kg
       </p>
      </div>
      
       : null}
     </li>
    </ul>

    



   </div>

           
        // <ul>
        //   <li>{JSON.stringify(this.state.survey_results[0])}</li>
        //   <li>{this.state.survey_results[0].id}</li>
        // </ul>


  )
 }
}
