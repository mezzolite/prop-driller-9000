import React from 'react';

export default class ProptimusOmega extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escalate: false,
    }
  }

  render() {
    return(
      <section>
        <img
          src={this.props.proptimusPhotos[`${this.props.activeProp}`]}
          className="App-logo"
          alt="logo"
          onClick={this.props.botAction}
        />
        <p>{this.props.catchPhrase[`${this.props.activeProp}`]}</p>
       
      </section>

      
    )
  }
}
