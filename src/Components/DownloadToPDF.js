import React, { Component } from 'react';
import {Button} from "reactstrap";
import jsPDF from "jspdf";
import pic from "./../pictures/modul_greifarm/0.jpg";

export default class DowloadToPDF extends Component {

 pdfGenerate=(genauigkeit)=>{
  var doc=new jsPDF("portrait","px", "a4", "false");
  doc.addImage(pic, "PNG", 65, 20, 50, 40);
  doc.text(120, 410, `Name ${genauigkeit}`)
  doc.save()
 }

 render() {
  const {genauigkeit, handhabungsgewicht, materialvarianz, prozessdauer, werkzeuge, wiederholungen, ziele_automatisierung} = this.props.data;
  return (
   <div>
    <Button onClick={()=>this.pdfGenerate(genauigkeit)}>Download to PDF</Button>
   </div>
  )
 }
}
