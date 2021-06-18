import React from "react";
import * as Survey from "survey-react";
// import * as widgets from "surveyjs-widgets";
import "survey-react/survey.css";

//NEW FROM ME
import { Component } from "react";
import axios from "axios";
import SurveyDone from "./SurveyDone";
import SurveyResults from "./SurveyResults";
import ReactToPrint from "./../Components/ReactToPrint";
import { json } from "../Surveys/surveyFraunhofer_json2";

// import "jquery-ui/themes/base/all.css";
// import "nouislider/distribute/nouislider.css";
// import "select2/dist/css/select2.css";
// import "bootstrap-slider/dist/css/bootstrap-slider.css";

// import "jquery-bar-rating/dist/themes/css-stars.css";

// import $ from "jquery";
// import "jquery-ui/ui/widgets/datepicker.js";
// import "select2/dist/js/select2.js";
// import "jquery-bar-rating";

// import "pretty-checkbox/dist/pretty-checkbox.css";



//import "icheck/skins/square/blue.css";
// window["$"] = window["jQuery"] = $;
//require("icheck");

// export { MyQuestion } from "../MyQuestion";

Survey.StylesManager.applyTheme("default");

// //widgets.icheck(Survey, $);
// widgets.prettycheckbox(Survey);
// widgets.select2(Survey, $);
// widgets.inputmask(Survey);
// widgets.jquerybarrating(Survey, $);
// widgets.jqueryuidatepicker(Survey, $);
// widgets.nouislider(Survey);
// widgets.select2tagbox(Survey, $);
// //widgets.signaturepad(Survey);
// widgets.sortablejs(Survey);
// widgets.ckeditor(Survey);
// widgets.autocomplete(Survey, $);
// widgets.bootstrapslider(Survey);



class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survey_results: []
    };
    // this.movies= [];
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  };
  

  onCompleteComponent = () => {
    this.setState({
      isCompleted: true,
    });
  };

  sendDataToServer = (survey) => {
    this.setState({
      isCompleted: true,
    });
    //send Ajax request to your web server.
    // alert("The results are:" + JSON.stringify(survey.data));
    // console.log("Survey DATA:" , survey.data);
    // console.log("Survey MAIL:", survey.data.Benutzerdaten.Mail);
    //Daten aus dem Fragebogen wird der EMAIL aus dem Fragebogen zugeordnet
    localStorage.setItem("userEmail", survey.data.Benutzerdaten.Mail);


    //Daten local speichern:
    console.log("Survey.data:", survey.data)
    let survey_result = {
      id: survey.data.Benutzerdaten.Mail,
      benutzerdaten: {
        name: survey.data.Benutzerdaten.name,
        mail: survey.data.Benutzerdaten.Mail,
        ort: survey.data.Benutzerdaten.ort,
        arbeitsplatz: survey.data.Benutzerdaten.arbeitsplatz,
      },
      prozessdauer: parseInt(survey.data.prozessdauer),
      wiederholungen: parseInt(survey.data.wiederholungen),
      genauigkeit: parseInt(survey.data.genauigkeit),
      handhabungsgewicht: parseInt(survey.data.handhabungsgewicht),
      werkzeuge: parseInt(survey.data.werkzeuge),
      materialvarianz: parseInt(survey.data.materialvarianz),
      ziele_automatisierung: survey.data.ziele_automatisierung
    }
    this.state.survey_results.push(survey_result);
    console.log("added", this.state.survey_results);

    localStorage.setItem("BLABLA", JSON.stringify(this.state.survey_results))
    // let pre = document.



    //Daten auf Server speichern
    // axios
    //   .post("http://localhost:5000/doasurvey", {
    //     data: survey.data,
    //     email: survey.data.Benutzerdaten.Mail,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     // console.log(res.config.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

  };

  render() {

    var model = new Survey.Model(json);

    //Fragebogen noch nicht beendet:
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        model={model}
        showCompletedPage={false}
        onComplete={this.sendDataToServer}
      />
    ) : null;

    //Fragebogen beendet:
    var onSurveyCompletion = this.state.isCompleted ? (
      <div>
        {/* <SurveyResults data={this.state.survey_results[0]}/> */}
        
        <ReactToPrint data={this.state.survey_results[0]}/>

        {/* <DownloadToPDF data={this.state.survey_results[0]}/> */}
        
      </div>
    ) : null;

    return (
      <div>
        <div>
          {surveyRender}
          {onSurveyCompletion}
        </div>
      </div>
    );
  }
}

export default Test;
