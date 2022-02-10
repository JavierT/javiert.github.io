import React from "react";
import "./others.scss";
import activitiesJson from "./activities.json";
class OthersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.isMobile = window.innerWidth <= 959;
    this.activities = activitiesJson.activities;
  }

  createTable = () => {
    let table = []
    this.activities.forEach((actInfo, index) => {
      const headerTitle =  <div key={'title-'+index} className="activity-title"><a href={actInfo.link} target='blank'>{actInfo.title}</a></div>
      const headerDate =  <div key={'date-'+index} className="activity-date">{actInfo.date}</div>
      const mapImage = 
        <div key={'img-'+index} className="activity-map">
          <a href={actInfo.map} target="_blank" rel="noopener noreferrer">
            <img className='img' src={process.env.PUBLIC_URL + actInfo.mapImg} alt="map" />
          </a>
        </div>
      const contentInfo = 
          <div key={'content-'+index} className='activity-data'>
            <div className='activity-techs'>
              <i className="fas fa-laptop-code"></i>
              <p>{actInfo.techs}</p>
            </div>
            <div className='activity-desc'>
              <p>{actInfo.desc}</p>
            </div>
          </div>
        const actImgs = 
          <div key={'actImgs-'+index} className='activity-imgs'>
            <a href={actInfo.link} target='blank'>
              <img src={process.env.PUBLIC_URL + actInfo.img1} alt="img" />
              <img src={process.env.PUBLIC_URL + actInfo.img2} alt="img2" />
            </a>
          </div>
        let activity = 
          <div key={'activity-'+index} className="activity">
            <div className='activity-info'>
              <div className='activity-header'>
                {this.isMobile ? mapImage : null}
                <div className='activity-line'>
                  {headerTitle}{headerDate}
                </div>
              </div>
              <div className='activity-content'>
                {contentInfo}
                {actImgs}
              </div>
            </div>
            {this.isMobile ? null : mapImage}
          </div>
        table.push(activity)
    });
    return table
  }

  render() {
    return (
      <div className="box-info mt-2">
        <h3 className="title-box">Other activities</h3>
        {this.createTable()}
      </div> 
    );
  }
}

export default OthersComponent;
