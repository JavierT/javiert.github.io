import React from "react";

// Redux
import store from "./store";
import { Provider } from "react-redux";
import PersonalInfoComponent from "./Components/personalInfo/PersonalInfo";
import MapComponent from "./Components/map/Map";
import ElevationComponent from "./Components/elevation/Elevation";
import SegmentsComponent from "./Components/segments/Segments";
import OthersComponent from "./Components/others/Others";
import ContactComponent from "./Components/contact/Contact";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-55280197-1');
class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      show: false,
    };
  }
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="sticky">
            <div className="title">JT</div>
            <div className="header-items">
              <div className="header-item" onClick={(e) => {
                  this.showModal();
                }}>Contact</div>
            </div>
          </header>
          <div className="content">
            <div className="section-wrapper">
              <PersonalInfoComponent />
            </div>
            <div className="section-wrapper">
              <MapComponent />
            </div>
            <div className="section-wrapper">
              <ElevationComponent />
            </div>
            <div className="section-wrapper">
              <SegmentsComponent />
              <div className="section-end"></div>
            </div>
            <div className="section-wrapper">
              <OthersComponent />
            </div>
            <footer>
              <div className="questions">
                <div
                  onClick={(e) => {
                    this.showModal();
                  }}
                >
                  I have questions!{" "}
                </div>
              </div>
              <div className="header-info">

                <div className="copy">Javier Tresaco &copy; 2020</div>
                <div className='techs'>Powered by react & leaflet</div>
              </div>
            </footer>
          </div>
          <ContactComponent onClose={this.showModal} show={this.state.show} />
        </div>
      </Provider>
    );
  }
}

export default App;
