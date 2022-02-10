import React from "react";
import "./PersonalInfo.scss";

class PersonalInfoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      age: this.calculate_my_age(),
      show_phone: false,
    }
  }

  calculate_my_age() {
    var today = new Date();
    var birthDate = new Date('07/04/1987');  
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    return age_now;
  }


  render() {
    return (
      <div className="box-info">
        <div className="header">
          <div className="align-left">
            <h2>Javier Tresaco Vidaller</h2>
          </div>
          <div className="align-right">
            <a href="https://www.linkedin.com/in/javiertresaco/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/JavierT" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://stackoverflow.com/users/1966439/javier" target="_blank" rel="noopener noreferrer"><i className="fab fa-stack-overflow"></i></a>
            <a href="https://www.strava.com/athletes/13898144" target="_blank" rel="noopener noreferrer"><i className="fas fa-bicycle"></i> </a>
            
          </div>
        </div>
        <div className="box-content">
          <div className="left-part">
            <div className='media-row'>
              <div className="photo">
                <img src={process.env.PUBLIC_URL + "profile.png"} alt="Logo" />
              </div>
              <div className="name">
                <p>Web developper & UX</p>
                
              </div>
            </div>
            <div className='media-row infos'>
              <div className='flex-center flex-basis-30'>
                <p><i className="fas fa-map-marked-alt mr-10"></i> Mirepoix, France</p>
              </div>
              <div className='flex-center'>
                <i className="fas fa-phone mr-10"></i> 
                { this.state.show_phone ? 
                  <a className="phone" href="tel:+330769337719">
                    (+33) 0769337719
                  </a> 
                  : 
                  <p onClick={() => this.setState({ show_phone: !this.state.show_phone })} > 
                    View telephone
                  </p>
                }
              </div>
            </div>
            <hr />
            <div className='row infos'>
              <div className="item-in-line">
                <label>Work experience: </label>
                <p>7+ years</p>
              </div>
            </div>
          </div>
          <div className="right-part">
            <div className="line">
              <div className="item">
                <p>{this.state.age} years old</p>
                <span>Distance</span>
              </div>
              <div className="item">
                <p>Huesca, Spain</p>
                <span>Start</span>
              </div>
              <div className="item">
                <p>168cm</p>
                <span>Elevation Gain</span>
              </div>
            </div>
            <hr />
            <div className="line">
              <div className='table-infos'>
                  
                <div className='col-grow'>
                      <div className='ftd head'></div>
                      <div className='ftd'>Spanish</div>
                      <div className='ftd'>English</div>
                      <div className='ftd'>French</div>
                </div>
                <div className='col'>
                  <div className='ftd head'>Level</div>
                  <div className='ftd'>Mothertongue</div>
                  <div className='ftd'>Fluent</div>
                  <div className='ftd'>Medium</div>
                </div>
                <div className='col'>
                  <div className='ftd head'>Used</div>
                  <div className='ftd'>Always</div>
                  <div className='ftd'>At work</div>
                  <div className='ftd'>At home</div>
                </div>
              </div>
            </div>
            <hr />
            <div className="line">
              <div className="item-tech">
                <label>Web:</label>
                <p>
                  <span className='big'>Angular 2+, </span>
                  <span className='medium'>Html, Sass, Typescript, </span>
                  <span className='small'>React</span>
                </p>
              </div>
              <div className="item-tech">
              <label>Backend:</label>
                <p>
                  <span className='big'>Python (tornado), </span>
                  <span className='medium'>Nodejs, MongoDB, </span>
                  <span className='small'>PostgreSQL, PHP</span>
                </p>
              </div>
              <div className="item-tech">
              <label>Others:</label><p>Balsamiq mockups, Use cases (UX), Git, SVN</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PersonalInfoComponent;
