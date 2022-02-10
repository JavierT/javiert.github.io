import React from "react";
import "./segments.scss";
import infoSegmentsJson from './segments.json';

class SegmentsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.segments = infoSegmentsJson.segments;
    this.isMobile = window.innerWidth <= 959;
  }

  createTable = () => {
    let table = []
    this.segments.forEach((segment, index) => {    
        let children = []
        children.push(<div key={'date-'+index} className='column-date'>{segment.date}</div>);
        children.push(<div key={'name-'+index} className='column-name'>{segment.company}</div>);
        children.push(<div key={'title-'+index} className='column-title'>{segment.title}</div>);
        if (!this.isMobile) {
          children.push(<div key={'time-'+index} className='column-time'>{segment.time}</div>);
          children.push(<div key={'code-'+index} className='column-code'>{segment.code}</div>);
          children.push(<div key={'team-'+index} className='column-team'>{segment.team}</div>);
        } else {
          children.push(<div key={'code-'+index} className='column-code'>{segment.code}</div>);
        }
        const icon = <div key={'icon-'+index} className='column-icon'><i className={index === this.segments.length-1 ? "fas fa-star" : "far fa-star"}></i></div>
        const upperRow = <div className='inner-row'>{children}</div>;
        const descLines = [];
        segment.description.forEach((line, index) => {
            descLines.push(<div key={'desc-'+index} className='description-line'>{line}</div>);   
        })
        if (this.isMobile) {
          descLines.push(<div key={'desc-time'+index} className='description-line'>Team: {segment.team}</div>);
          descLines.push(<div key={'desc-time'+index} className='description-line'>Duration: {segment.time}.</div>);
        }
        const bottomRow = <div className='description-row'>{descLines}</div>
        const info = <div className='column-info'>{upperRow}{bottomRow}</div>
        table.push(<div key={'row-'+index} className='row'>{this.isMobile ? null : icon}{info}</div>);
    });
    return table
  }

  render() {
    return (
      <div className="box-info mt-2">
        <h3 className="title-box">Segments</h3>
        <div className='table-segments'>
            <div className='table-segments-header'>
                {this.isMobile ? null : <div className='column-icon'></div>}
                <div className='inner-row'>
                  <div className='column-date'>Date</div>
                  <div className='column-name'>Name</div>
                  <div className='column-title'>Role</div>
                  {this.isMobile ? null : <div className='column-time'>Time</div>}
                  <div className='column-code'>Techs</div>
                  {this.isMobile ? null : <div className='column-team'>Team</div>}
          
                </div>
            </div>
            {this.createTable()}
        </div>
      </div>
    );
  }
};

export default SegmentsComponent;
