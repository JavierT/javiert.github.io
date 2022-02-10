import React from "react";
import CanvasJSReact from "./../../lib/canvasjs.react";
import elevation from "./newJson.json";
import infos from "./infos.json";
import "./elevation.scss";

class ElevationComponent extends React.Component {
  constructor(props) {
    super(props);
    var dataPoints = [];
    var experience = {};
    var test = [];
    test = elevation.elevation;
    experience = infos;
    //const total = test.length;
    const currentYear = new Date().getFullYear();
    //const currentMonth = new Date().getMonth();
    const years = currentYear - 2005;
    //const step = Math.floor(total / (years*12));
    this.options = {
      theme: "light",
      animationEnabled: true,
      axisX:{
        title: "Year",
        valueFormatString:  "####"
      },
      height: window.innerWidth > 959 ? 300 : 200,
      data: [
        {
          type: "area",
          toolTipContent: `
          <div class='chart-popup'>
            <span class='title'>{place}</span>
            <span>{name}</span>
            <span>{year}</span>
          </div>`,
          dataPoints: dataPoints,
        },
      ],
    };
    // So for each year since the current date to today, we divide the amount 
    // of points of the elevation for the amount of years * 12. 
    // We create a key that is the year. (month divided in 10 parts).
    // We use the key year.month for the experience json.
    let infoTooltip = experience[Object.keys(experience)[0]];
    for (let i = 0; i < test.length; i++) {
      const value = test[i];
      let newPoint = {};
      if (experience[value.x] != null) {
        infoTooltip = experience[value.x];
        newPoint = {
          x: value.x,
          y: parseInt(value.y),
          name: infoTooltip.name,
          place: infoTooltip.place,
          year: infoTooltip.year, 
        };
        if (infoTooltip.showMarker) {
          newPoint.indexLabel = infoTooltip.logo;
          newPoint.markerType = "triangle"; 
          newPoint.markerColor = "red";
          newPoint.markerSize = 12;
        }
      }
      else {
        newPoint = {
          x: value.x,
          y: parseInt(value.y),
          name: infoTooltip.name,
          place: infoTooltip.place,
          year: infoTooltip.year,
        };
      }
      dataPoints.push(newPoint);
    };
  }

  render() {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    return (
      <div className="box-info mt-2 map-position">
        <div className='elevation-help'>Hover over the chart to see my work experience</div>
        <CanvasJSChart
          options={this.options}
          /* onRef = {ref => this.chart = ref} */
        />
      </div>
      
    );
  }
}

export default ElevationComponent;
