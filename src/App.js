import React from 'react';
import './App.css';
import ProptimusOmega from './proptimusOmega'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      callForHelp: "https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png",
      proptimusPhotos: {
        "Proptimus Prime": "http://pngimg.com/uploads/transformers/transformers_PNG3.png",
        "Proptimus Beta": "https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png",
        "Proptimus Omega": "https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726",
      },
      activeProp: "",
      catchPhrase: {
        "Proptimus Prime": "Here to Help!",
        "Proptimus Beta": "I'm medium here.",
        "Proptimus Omega": "Hereish!",
      }
    }
  }


  callForBadHelp = (event) => {
    this.setState({ activeProp: "Proptimus Omega"})
  }

  callForBetterHelp = (event) => {
    this.setState({ activeProp: "Proptimus Beta"})
  }

  gimmeAllYouGot = (event) => {
    this.setState({ activeProp: "Proptimus Prime"})
  }

  sendThemHome = (event) => {
    this.setState({ activeProp: ""})
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            onClick={this.callForBadHelp}
            src={this.state.callForHelp}
            className="App-logo"
            alt="logo"
          />

          {this.state && this.state.activeProp === "Proptimus Omega" /*Which Proptobot should be checked for?*/ &&
          <>
            <p className="">Will this do, human?</p>
            <ProptimusOmega 
              proptimusPhotos={this.state.proptimusPhotos}
              catchPhrase={this.state.catchPhrase}
              botAction={this.callForBetterHelp}
              activeProp={this.state.activeProp}
            />
          </>
          }

          {this.state && this.state.activeProp === "Proptimus Beta" /*Which Proptobot should be checked for?*/ &&
            <>
              <p className="">Will this do, human?</p>
              <ProptimusOmega
                proptimusPhotos={this.state.proptimusPhotos}
                catchPhrase={this.state.catchPhrase}
                botAction={this.gimmeAllYouGot}
                activeProp={this.state.activeProp}
              />
            </>
          }

          {this.state && this.state.activeProp === "Proptimus Prime" /*Which Proptobot should be checked for?*/ &&
            <>
              <p className="">Will this do, human?</p>
              <ProptimusOmega 
                proptimusPhotos={this.state.proptimusPhotos}
                catchPhrase={this.state.catchPhrase}
                botAction={this.sendThemHome}
                activeProp={this.state.activeProp}
              />
            </>
          }
        </header>
      </div>
    );
  }
}
